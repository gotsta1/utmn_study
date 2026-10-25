function spinWords(text) {
  return text.replace(/\p{L}{5,}/gu, (word) => [...word].reverse().join(''));
}

// Тут я сделал чтобы разворачивались только буквы слова
// благодаря \p{L}. То есть воскл. знак останется в конце
console.log(spinWords('Привет от Legacy!'));
console.log(spinWords('This is a test'));
