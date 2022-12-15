function chekIsAnagrem(word, word2) {
  if (word.length !== word2.length) {
    return false;
  }
  let size = word.length;
  let counter = 0;
  for (let letter of word) {
    for (let letter2 of word2) {
      if (letter === letter2) {
        counter++;
      }
    }
  }

  if (size === counter) {
    return true;
  }
  return false;
}
