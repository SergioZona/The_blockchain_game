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

export function generateRandomNumberInRange(min, max) {
  const range = max - min + 1;
  let random = 0;

  const randomBuffer = crypto.randomBytes(4);
  const randomBytes = new Uint32Array(randomBuffer.buffer);
  random = (randomBytes[0] % range) + min;

  return random;
}

export function generateBlock(socketList, blocksSet) {
  // We declare a function:
  function isObjectInList(obj, list) {
    for (let i = 0; i < list.length; i++) {
      const listItem = list[i];
      if (JSON.stringify(listItem) === JSON.stringify(obj)) {
        return true;
      }
    }
    return false;
  }

  const subjects = [
    "math",
    "language",
    "economy",
    "chemistry",
    "physics",
    "biology",
    "programming",
  ];

  let randomUser = -1;
  let socket = "";
  let dictUser = {};
  let publicKey = "";
  let randomSubject = "";
  let randomGrade = "";
  let block = {};

  do {
    randomUser = generateRandomNumberInRange(0, socketList.length - 1);
    socket = Object.keys(socketList[randomUser])[0];
    dictUser = socketList[randomUser][socket];
    publicKey = socketList[randomUser][socket].public_key;
    randomSubject =
      subjects[generateRandomNumberInRange(0, subjects.length - 1)];
    randomGrade = dictUser[randomSubject];

    block = {
      socket: socket,
      public_key: publicKey,
      subject: randomSubject,
      grade: randomGrade,
    };
  } while (isObjectInList(block, blocksSet));

  return block;
}
