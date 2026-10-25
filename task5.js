/* 
В этом задании я сделал общий суффикс —
последовательность из 2х или более букв на
конце строк, поэтому работа программы соответствует примеру
*/


function longestCommonSuffix(strings) {
  if (strings.length === 0) {
    return '';
  }

  const shortest = strings.reduce((current, word) =>
    word.length < current.length ? word : current
  );
  let suffix = '';

  for (let index = shortest.length - 1; index >= 0; index -= 1) {
    const letter = shortest[index];

    if (!strings.every((word) => word[index + word.length - shortest.length] === letter)) {
      break;
    }

    suffix = letter + suffix;
  }

  return suffix.length >= 2 ? suffix : '';
}

console.log(longestCommonSuffix(['цветок', 'поток', 'хлопок']));
console.log(longestCommonSuffix(['собака', 'гоночная машина', 'машина']));
