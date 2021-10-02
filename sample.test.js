var { expect } = require('expected-kefir');
var kefir = require('kefir');

describe('samle test', function () {

    it(`works`, function () {
        expect(kefir
            .constant([1, 2, 3, 4])
            .flatten()
            .map(n => n * 2))
            .toEmit([2, 4, 6, 8])
    })

})