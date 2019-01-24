'use strict';
const PQueue = require('p-queue');

function pInterval(fn, interval) {
	const queue = new PQueue({
		carryoverConcurrencyCount: true,
		concurrency: 1,
		interval,
		intervalCap: 1
	});
	let cleared = false;
	const recur = () => {
		queue.onIdle().then(() => {
			if (cleared) {
				return;
			}
			queue.add(fn);
			recur();
		});
	};
	recur();
	return function () {
		cleared = true;
		queue.clear();
	};
}

module.exports = pInterval;
