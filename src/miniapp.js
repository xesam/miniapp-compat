let _host = null;

function _init() {
    if (typeof wx === 'object') {
        return wx;
    } else if (typeof qq === 'object') {
        return qq;
    } else if (typeof my === 'object') {
        return my;
    } else if (typeof swan === 'object') {
        return swan;
    } else if (typeof tt === 'object') {
        return tt;
    } else {
        return null;
    }
}

const miniapp = {
    get host() {
        if (!_host) {
            _host = _init();
        }
        return _host;
    },

    set host(value) {
        _host = value;
    },

    getPages() {
        return getCurrentPages();
    }
};

module.exports = miniapp;
