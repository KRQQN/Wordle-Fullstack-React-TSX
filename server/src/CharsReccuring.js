export default function CharsReccuring(str) {
  const charCount = {};

  for (const currentChar of str) {
    charCount[currentChar] = (charCount[currentChar] || 0) + 1;
  }
  return Object.values(charCount).some((el) => el > 1);
}
