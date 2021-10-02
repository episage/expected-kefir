# Expected Kefir

This is a universal library for testing observables from [KefirJS](https://github.com/kefirjs/kefir).

It assumes that observable ends at expected array end. If a test fails it will throw an `Error`.

## Install

```bash
npm i expected-kefir
```

## Example usage

```javascript
var { expect } = require('./expected-kefir');

describe('samle test', function () {

    function test(a, b) {
        var pointSimplifier = new PointsSimplifier({ gpv });
        var obs =
            .flatten()
            .map(p => pointSimplifier.point(p))
            .flatten()
        expect(obs).toEmit(b);
    }

    it(`works`, function () {
        expect(kefir
            .constant([1,2,3,4])
            .map(n => n * 2))
        .toEmit([2,4,6,8])
    })
})
```

## API

```javascript
expect(kefirJsObservable)
    .toEmit(expectedArrayEmits)
```

## Output

I use [mocha](https://mochajs.org/) here but the library is agnostic.

