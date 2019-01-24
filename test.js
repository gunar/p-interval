import test from 'ava';
import delay from 'delay';
import pInterval from '.';

test('calls function every interval', async t => {
	let i = 0;
	const stop = pInterval(
		async () => {
			i++;
		},
		500);
	await delay(2100);
	t.is(i, 5);
	stop();
});

test('allows functions to run over', async t => {
	let i = 0;
	const stop = pInterval(
		async () => {
			await delay(600);
			i++;
		},
		500);
	await delay(2000);
	t.is(i, 3);
	stop();
});

test('can stop', async t => {
	let i = 0;
	const stop = pInterval(
		async () => {
			await delay(600);
			i++;
		},
		500);
	await delay(2000);
	stop();
	await delay(2000);
	t.is(i, 4);
	await delay(2000);
	t.is(i, 4);
});
