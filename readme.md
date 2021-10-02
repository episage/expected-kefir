# Expected Kefir

This is a universal library for testing observables from [KefirJS](https://github.com/kefirjs/kefir).

It assumes that observable ends at expected array end. If a test fails it will throw an `Error`.

## Install

```bash
npm i expected-kefir
```

## Example usage with [Mocha](https://mochajs.org/)

```javascript
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
```


## Output

```

  samle test
    ✔ works


  1 passing (14ms)

```


## API

```javascript
expect(kefirJsObservable)
    .toEmit(expectedArrayEmits)
```

## Contributors

Warmly welcome!