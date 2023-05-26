// Injection
const {
	deterministicPartitionKey, getHashValueFromString, getRandomString, deterministicPartitionKeyOld,
} = require('./dpk');


describe('deterministicPartitionKey', () => {

	it(`Test case - no input`, () => {
		const trivialKey = deterministicPartitionKey();
		expect(trivialKey).toBe('0');
	});

	it(`Test case - empty input`, () => {
		const trivialKey = deterministicPartitionKey({});
		expect(trivialKey).toBe('0');
	});

	let inputValue = {partitionKey: 'xyz'};
	it(`Test case - proper input`, () => {
		const trivialKey = deterministicPartitionKey(inputValue);
		expect(trivialKey).toBe(inputValue?.partitionKey);
	});

	let inputValue1 = {partitionKey: '123'};
	it(`Test case - proper input - 2`, () => {
		const trivialKey = deterministicPartitionKey(inputValue1);
		expect(trivialKey).toBe(inputValue1?.partitionKey);
	});

	let string256plus = getRandomString(300);
	let inputValueWithMax = {partitionKey: string256plus};
	let valueWithObjectInputMax = getHashValueFromString(inputValueWithMax?.partitionKey);
	it(`Test case - input with max value`, () => {
		const trivialKey = deterministicPartitionKey(inputValueWithMax);
		expect(trivialKey).toBe(valueWithObjectInputMax);
	});

	let inputValueEmptyKey = {partitionKey: ''};
	let valueWithObjectInputEmptyKey = getHashValueFromString(inputValueEmptyKey);
	it(`Test case - input with empty value`, () => {
		const trivialKey = deterministicPartitionKey(inputValueEmptyKey);
		expect(trivialKey).toBe(valueWithObjectInputEmptyKey);
	});

	let inputValueNoKey = {abc: 1};
	let valueWithObjectInputNoKey = getHashValueFromString(inputValueNoKey);
	it(`Test case - not a proper input`, () => {
		const trivialKey = deterministicPartitionKey(inputValueNoKey);
		expect(trivialKey).toBe(valueWithObjectInputNoKey);
	});

	let inputValueNotObject_1 = 'asdadsasd';
	let valueWithObjectInputNotObject_1 = getHashValueFromString(inputValueNotObject_1);
	it(`Test case - input with different type`, () => {
		const trivialKey = deterministicPartitionKey(inputValueNotObject_1);
		expect(trivialKey).toBe(valueWithObjectInputNotObject_1);
	});

});

describe('deterministicPartitionKeyOld', () => {

	it(`Test case - no input`, () => {
		const trivialKey = deterministicPartitionKeyOld();
		expect(trivialKey).toBe('0');
	});

	// it(`Test case - empty input`, () => {
	// 	const trivialKey = deterministicPartitionKeyOld({});
	// 	expect(trivialKey).toBe('0');
	// });

	let inputValue = {partitionKey: 'xyz'};
	it(`Test case - proper input`, () => {
		const trivialKey = deterministicPartitionKeyOld(inputValue);
		expect(trivialKey).toBe(inputValue?.partitionKey);
	});

	let inputValue1 = {partitionKey: '123'};
	it(`Test case - proper input - 2`, () => {
		const trivialKey = deterministicPartitionKeyOld(inputValue1);
		expect(trivialKey).toBe(inputValue1?.partitionKey);
	});

	let string256plus = getRandomString(300);
	let inputValueWithMax = {partitionKey: string256plus};
	let valueWithObjectInputMax = getHashValueFromString(inputValueWithMax?.partitionKey);
	it(`Test case - input with max value`, () => {
		const trivialKey = deterministicPartitionKeyOld(inputValueWithMax);
		expect(trivialKey).toBe(valueWithObjectInputMax);
	});

	let inputValueEmptyKey = {partitionKey: ''};
	let valueWithObjectInputEmptyKey = getHashValueFromString(inputValueEmptyKey);
	it(`Test case - input with empty value`, () => {
		const trivialKey = deterministicPartitionKeyOld(inputValueEmptyKey);
		expect(trivialKey).toBe(valueWithObjectInputEmptyKey);
	});

	let inputValueNoKey = {abc: 1};
	let valueWithObjectInputNoKey = getHashValueFromString(inputValueNoKey);
	it(`Test case - not a proper input`, () => {
		const trivialKey = deterministicPartitionKeyOld(inputValueNoKey);
		expect(trivialKey).toBe(valueWithObjectInputNoKey);
	});

	// let inputValueNotObject_1 = 'asdadsasd';
	// let valueWithObjectInputNotObject_1 = getHashValueFromString(inputValueNotObject_1);
	// it(`Test case - input with different type`, () => {
	// 	const trivialKey = deterministicPartitionKeyOld(inputValueNotObject_1);
	// 	expect(trivialKey).toBe(valueWithObjectInputNotObject_1);
	// });


});


// Returns the literal '0' when given no input
// Returns the literal '0' when given given empty object
// Returns the literal '${inputValue?.partitionKey}' when given ${JSON.stringify(inputValue)}
// Returns the literal '${inputValue1?.partitionKey}' when given ${JSON.stringify(inputValue1)}
// Returns the literal '${JSON.stringify(inputValueWithMax)}' when given ${JSON.stringify(inputValueWithMax)}
// Returns the literal '${JSON.stringify(inputValueEmptyKey)}' when given ${JSON.stringify(inputValueEmptyKey)}
// Returns the literal '${JSON.stringify(valueWithObjectInputNoKey)}' when given ${JSON.stringify(inputValueNoKey)}
// Returns the literal '${JSON.stringify(valueWithObjectInputNotObject_1)}' when given ${JSON.stringify(inputValueNotObject_1)}
