const { Msg, Action } = require('./const.js')
var ActionCB = {};
var allShopUrl = [];
new Vue({
    el: '#app',
    data () {
        return {
            webURL: 'https://cg.163.com/'
        }
    },
    created () {
        console.log(Vue.version)
        // this.webURL = 'https://login.taobao.com/member/login.jhtml'
        this.webURL = 'https://ltao.seller.taobao.com/portal/login'

        // const electron = require('electron').remote;
        // electron.protocol.interceptBufferProtocol('https', ((request, callback) => {
        //     let url = 'https://refund2.taobao.com/dispute/adjust/adjustSellerList.json';
        //     if (request.url === url) {
        //         debugger
        //     }
        //     callback();
        // }))
        // electron.session.defaultSession.webRequest.onBeforeRequest({}, (details, callback) => {
        //     debugger
        //     if (details.url.indexOf('.js') > -1) {
        //         console.log('details', details)
        //     }
        //     callback({})
        // })
    },
    mounted () {
        let webview = this.$refs.webview;
        if (webview) {
            webview.addEventListener('dom-ready', () => {
                webview.openDevTools();
            })
            webview.addEventListener('new-window', (e) => {
                // window.open(e.url);
                this.webURL = e.url;
            })
            webview.addEventListener('did-finish-load', () => {
                console.log('did-finish-load')
            })
            webview.addEventListener('did-navigate', () => {
                console.log('did-navigate')
            })
            webview.addEventListener('ipc-message', (event, data) => {
                if (event.channel) {
                    const { action, ret, data } = event.channel;
                    if (ActionCB.hasOwnProperty(action)) {
                        if (ret === 0) {
                            // 执行成功
                            ActionCB[action].resolve(data);
                        }
                        delete ActionCB[action]
                    }
                }
            })
        }
    },
    methods: {
        async sentToWebview (action, data = {}) {
            return new Promise((resolve, reject) => {
                let webview = this.$refs.webview;
                if (webview) {
                    if (ActionCB.hasOwnProperty(action)) {
                        reject(`队列中存在[${action}]操作`)
                        return;
                    }
                    if (data.hasOwnProperty('action')) {
                        reject(`参数不能使用action字段`);
                        return
                    }
                    ActionCB[action] = { resolve, reject };
                    data.action = action;
                    webview.send(Msg.OperationWebview, data);
                }
            })
        },
        async onClickLogin () {

            let ret = await this.sentToWebview(Action.Login, {
                account: 'tb559056599:一一',
                pwd: 'zhangdanxia521',
            })
        },

        async onClickGoOrderPage () {
            let url = 'https://ltao.seller.taobao.com/portal/iframe/refund'
            await this.sentToWebview(Action.ResetToUrl, {
                url: url,
            });
        },
        async onGet1 () {
            allShopUrl = await this.sentToWebview(Action.SetTime);
            console.log(allShopUrl)
        },
        async onLoadRefuseRequest () {
            let disputeId = allShopUrl[0].disputeID;
            let bizOrderId = allShopUrl[0].orderID;
            let url = `https://refund2.tmall.com/dispute/sellerRefuseDispute.htm?bizOrderId=${bizOrderId}&disputeId=${disputeId}&type=1`
            await this.sentToWebview(Action.ResetToUrl, {
                url: url,
            })
        },
        async onWriteRefuseRequest () {
            await this.sentToWebview(Action.Write);
        },
        onAxios () {

        }
    }
})
