export default async function loadWordPref(wordLength: number) {
  //TODO: Add multiple letters option

  const res = await fetch(`api/wordOptions?wordLength=${wordLength}`);
  const data = await res.json(/* word */);
 }
