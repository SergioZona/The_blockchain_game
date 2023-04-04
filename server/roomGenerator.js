import crypto from "crypto";

export function generateUniqueRandomNumber(set) {
  const min = 100000;
  const max = 999999;
  const range = max - min + 1;
  let random = 0;

  do {
    const randomBuffer = crypto.randomBytes(4);
    const randomBytes = new Uint32Array(randomBuffer.buffer);
    random = (randomBytes[0] % range) + min;
  } while (set.has(random));

  return random;
}
