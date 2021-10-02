var END = Symbol('end');
var ERROR = Symbol('error');

module.exports = {
    expect(obs) {
        return {
            toEmit(array) {
                var i = 0;
                var handler = function ({ type, value, current }) {
                    try {
                        if (i > array.length) {
                            throw Error(`should not emit [${value}] past end of stream`);
                        }
                        var expectedType = getExpectedType();
                        if (type !== expectedType) {
                            throw Error(`got type [${type}] instead of type [${expectedType}]`);
                        }
                        var expectedValue = getExpectedValue()
                        if (value !== expectedValue) {
                            throw Error(`got [${value}] instead of [${expectedValue}]`);
                        }

                        i++;
                    } catch (error) {
                        obs.offAny(handler);
                        throw error;
                    }
                };
                obs.onAny(handler);

                function getExpectedValue() {
                    if (i === array.length) {
                        return undefined;
                    } else {
                        return array[i];
                    }
                }

                function getExpectedType() {
                    if (i < array.length) {
                        return 'value';
                    }
                    if (i === array.length) {
                        return 'end';
                    }
                    throw Error(`unexpected`)
                }
            }
        }
    }
}