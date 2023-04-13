export function calculateHash(publicKey, subject, grade, previousHashDigits) {
  const a = publicKey[0].toUpperCase().charCodeAt();
  const b = subject[1].toUpperCase().charCodeAt();
  const c = grade[0].toUpperCase().charCodeAt();

  let nonce = 1;
  let hash = a + b + c - previousHashDigits + nonce;

  while (hash % 3 !== 0) {
    nonce++;
    hash = a + b + c - previousHashDigits + nonce;
  }

  return {
    nonce: nonce,
    a: a,
    b: b,
    c: c,
    last_digits: previousHashDigits,
    hash: hash,
  };
}
