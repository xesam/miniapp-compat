const miniapp = require('../index');
global.wx = {};
describe('test HookPage', () => {
    it('global is object', () => {
        expect(miniapp.host).toBe(wx);
    });
});