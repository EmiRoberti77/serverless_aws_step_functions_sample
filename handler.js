const MAX = 60;

class NumberIsTooBig extends Error {
  constructor(n) {
    super(`${n} is too big`);
    this.name = "NumberIsTooBig";
    Error.captureStackTrace(this, NumberIsTooBig);
  }
}

exports.add = async ({ x, y }) => {
  return x + y;
};

exports.double = async (n) => {
  const total = n * 2;
  if (total > MAX) {
    throw new NumberIsTooBig(total);
  }
  return total;
};

exports.doubleBigNumbers = async (n) => {
  return n * 2;
};
