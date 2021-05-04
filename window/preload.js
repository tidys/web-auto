console.log('preload.js')
const { ipcRenderer } = require('electron');
const { Msg, Action } = require('./const');
const Cheerio = require('cheerio')
let Dom = require('./dom')


var preload = {
    init () {
        ipcRenderer.on(Msg.OperationWebview, (event, data) => {
            if (data && !data.hasOwnProperty('action')) {
                console.error('操作数据缺失action');
            }
            let retData = this._onAction(data);
            this.sendToWindow(data, 0, retData);
        });
    },
    _onAction (data) {
        let { action } = data;

        if (action === Action.Login) {
            const { account, pwd } = data;
            let dom = new Dom(document, window);
            // 获取登录界面的iframe
            let loginFrame = dom.$('#alibaba-login-box')
            if (loginFrame) {
                let loginDom = new Dom(loginFrame.contentDocument, loginFrame.contentWindow);
                loginDom.setInputValue('#fm-login-id', account)
                loginDom.setInputValue('#fm-login-password', pwd);
                loginDom.emitButton('.password-login')
            }
        } else if (action === Action.SetTime) {
            // 获取订单
            let dom = new Dom(document, window)
            let iframe = dom.$('iframe')
            if (iframe) {
                let frameDom = new Dom(iframe.contentDocument, iframe.contentWindow);
                let ret = frameDom.$('#bottomContainer_1')
                if (ret) {
                    let curAllShop = []
                    for (let i = 0; i < ret.children.length; i++) {
                        let child = ret.children[i];
                        if (child.id && child.id.startsWith('sellerGridContainer')) {
                            let orderID = null;// 订单号
                            let disputeID = null;// 退单号
                            let url = null;// 退款链接
                            let ok = false;
                            // 订单号
                            let header = frameDom.find(child, '.mod-dispute-header');
                            if (header) {
                                let list = frameDom.find(header, 'li');
                                if (list && list instanceof frameDom.window.HTMLCollection) {
                                    function ff (indexLi) {
                                        let span = frameDom.find(indexLi, '.text-span')
                                        let em = frameDom.find(indexLi, 'em');
                                        return { name: span.innerText, value: em.innerText };
                                    }

                                    for (let j = 0; j < list.length; j++) {
                                        let li = list[j];
                                        let index = li.getAttribute('data-index');
                                        if (index === '1') {
                                            //退款编号
                                            disputeID = ff(li).value;
                                        } else if (index === '2') {
                                            // 订单号
                                            orderID = ff(li).value;
                                        } else if (index === '3') {
                                            // 商品编号
                                        }
                                    }
                                }
                            }
                            let body = frameDom.find(child, '.disputeBody')
                            if (body) {
                                let a = frameDom.find(body, 'a');
                                url = a.href;
                                let font = frameDom.find(body, 'font');
                                if (font.innerText === '退款待处理') {
                                    ok = true
                                }
                            }
                            if (ok) {
                                curAllShop.push({ orderID, disputeID, url });
                            }
                        }
                    }
                    return curAllShop;
                }
            }
        } else if (Action.ResetToUrl === action) {
            const { url } = data;
            window.location.href = url;
        } else if (Action.Write === action) {
            let dom = new Dom(document, window)
            let container = dom.$('#sellerRefuseReasonContainer_1')
            if (container) {
                let select = dom.find(container, '.options-content')
                if (select) {
                    let items = dom.find(select, '.options-item');
                    for (let a = 0; a < items.length; a++) {
                        let item = items[a];
                        let spans = dom.find(item, 'span');
                        if (spans[0].innerText === '其他') {
                            item.click();
                            console.log(spans[0].innerText);
                        }
                    }
                }
                let arrowUp = dom.find(container, '.arrow-up');
                if (arrowUp && !(arrowUp instanceof window.HTMLCollection)) {
                    arrowUp.click();
                }
            }

            // 循环检索
            function ff () {

            }

            let area = dom.$('#sellerRefuseTextArea_30');
            if (area) {
                let textContent = dom.find(area, '.textarea-content');
                if (textContent) {
                    let textarea = dom.find(textContent, 'textarea');
                    if (textarea) {
                        setTimeout(() => {
                            textarea.value = '亲，现在店铺倒闭，已经被封了，已经不能正常退款，您说下您的支付宝号或者收款码发给客服，然后把钱直接转给您'
                        }, 3000);
                    }
                }
            }

        }
    },
    sendToWindow (data, ret, userData) {
        if (userData && userData.hasOwnProperty('action')) {
            console.error('action字段被占用！');
            return;
        }
        let retData = { action: data.action, ret: ret, data: userData }
        ipcRenderer.sendToHost(retData)
    }
}
preload.init();
module.exports = preload;
