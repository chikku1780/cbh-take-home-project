// Purpose/Notes
// Global
const crypto = require("crypto");
const _ = require("lodash");
// Local
// Var
const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;
const DEFAULT_ALGORITHM = {
	ALGORITHM: 'sha3-512',
	ENCODING: 'hex',
};

// Logic

function getDeterministicPartitionKey(event, options) {
	if (isUNE(event) || _.isEmpty(event)) return TRIVIAL_PARTITION_KEY;
	let partitionKey = event?.partitionKey;
	if (isUNE(partitionKey)) partitionKey = getHashValueFromString(event, {});
	if ((partitionKey?.length > MAX_PARTITION_KEY_LENGTH)) {
		partitionKey = getHashValueFromString(partitionKey, {});
	}
	return partitionKey;
}

function getHashValueFromString(data, algorithmMeta = {}, options = {}) {
	if (isUNE(data)) return;
	if (!isString(data)) data = JSON.stringify(data);
	let algorithm = algorithmMeta?.algorithm || DEFAULT_ALGORITHM?.ALGORITHM;
	let encoding = algorithmMeta?.encoding || DEFAULT_ALGORITHM?.ENCODING;
	return crypto.createHash(algorithm).update(data).digest(encoding);
}

function getRandomString(length = 10, options) {
	return crypto.randomBytes(length).toString(DEFAULT_ALGORITHM?.ENCODING);
}

// Utilities

const isUNE = (value)=> (value === undefined || value === null || value === '');
const isString = (value)=> (typeof value === 'string');


exports.deterministicPartitionKey = getDeterministicPartitionKey;
exports.getHashValueFromString = getHashValueFromString;
exports.getRandomString = getRandomString;


exports.deterministicPartitionKeyOld = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } else {
      const data = JSON.stringify(event);
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
    }
  }

  if (candidate) {
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
    }
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }
  return candidate;
};
