class Dom {
    document = null;
    window = null;

    constructor (dom, window) {
        this.document = dom;
        this.window = window;
    }

    $ (id) {
        return this._dom(this.document, id);
    }

    find (el, id) {
        return this._dom(el, id);
    }

    _dom (doc, id) {
        let doms = null;
        if (id.startsWith('.')) {
            let elementID = id.split('.')[1]
            doms = doc.getElementsByClassName(elementID)
        } else if (id.startsWith('#')) {
            let elementID = id.split('#')[1]
            doms = doc.getElementById(elementID)
        } else {
            doms = doc.getElementsByTagName(id)
        }
        if (doms) {
            if (doms instanceof this.window.Element) {
                return doms;
            } else if (Array.isArray(doms) || doms instanceof this.window.HTMLCollection) {
                if (doms.length === 1) {
                    return doms[0];
                }else{
                    console.warn('发现多个dom')
                    return doms;
                }
            } else {
                console.error('其他')
            }
        } else {
            console.warn('未发现dom: ', id)
        }
    }

    setInputValue (id, value) {
        let dom = this.$(id)
        if (dom) {
            dom.value = value;
        } else {
            console.warn(`设置失败:${id}`)
        }
    }

    emitButton (id) {
        let dom = this.$(id)
        if (dom) {
            dom.click();
        }
    }

}

module.exports = Dom;
