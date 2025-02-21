export default function getRandomInteger(min, max) {
  min = Math.max(0, min);

  const randomFraction = Math.random();

  const randomInteger = Math.floor(randomFraction * (max - min + 1)) + min;

  return randomInteger;
}
