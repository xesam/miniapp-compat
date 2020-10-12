const miniapp = require('../index');
global.wx = function () {

};
describe('test HookPage', () => {
    it('global is function', () => {
        expect(miniapp.host).toBeNull();
    });
});