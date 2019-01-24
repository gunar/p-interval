# p-interval [![Build Status](https://travis-ci.org/sindresorhus/p-queue.svg?branch=master)](https://travis-ci.org/sindresorhus/p-queue)

> Promisified setInterval based on p-queue

This is *NOT* a library by @sindresorhus, but it is a small wrapper on top of his `p-queue` library.

Useful for Polling. For example, asking for data from a REST API every 10 seconds, while guarding against long requests.


## Install

```
$ npm install p-interval
```


## Usage

```js
const pInterval = require('p-interval');
const got = require('got');

const stop = pInterval(() => got('gunargessner.com'), 1000) // Requests gunargessner.com every 1s

setIimeout(stop, 5000) // Stop after 5s

```


## API

### pInterval(fn, interval)

Returns a `stop` function, that when called clears the interval.

#### fn

Type: `Function`

Promise-returning/async function.

#### interval

Type: `number`<br>
Default: `0`<br>
Minimum: `0`

The length of time in milliseconds before the interval count resets. Must be finite.


## Related projects by @sindresorhus

- [p-queue](https://github.com/sindresorhus/p-queue) - Promise queue with concurrency control
- [p-limit](https://github.com/sindresorhus/p-limit) - Run multiple promise-returning & async functions with limited concurrency
- [p-throttle](https://github.com/sindresorhus/p-throttle) - Throttle promise-returning & async functions
- [p-debounce](https://github.com/sindresorhus/p-debounce) - Debounce promise-returning & async functions
- [p-all](https://github.com/sindresorhus/p-all) - Run promise-returning & async functions concurrently with optional limited concurrency
- [More…](https://github.com/sindresorhus/promise-fun)


## License

MIT
