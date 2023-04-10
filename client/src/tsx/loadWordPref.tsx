export default async function loadWordPref(
  wordLength: number,
  recurringChars: boolean
) {
  const res = await fetch(
    `/api/wordOptions?wordLength=${wordLength}&recurringChars=${recurringChars}`
  );
  const data = await res.json();
  return data;
}
