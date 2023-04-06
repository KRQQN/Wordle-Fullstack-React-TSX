export default async function loadWordPref(wordLength: number, reccuringChars: string) {
  //TODO: Add multiple letters option

  const res = await fetch(`api/wordOptions?wordLength=${wordLength}&reccuringChars=${reccuringChars}`);
  const data = await res.json(/* word */);
 }
