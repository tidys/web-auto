const PKG = require('../package.json');
module.exports = {
    isDev () {
        if (PKG.hasOwnProperty('publish')) {
            return !PKG.publish;
        }
        return false;
    }
}

