function pickPropArray(objects, property) {
  return objects
    .filter((object) => Object.hasOwn(object, property))
    .map((object) => object[property]);
}

const students = [
  { name: 'Павел', age: 20 },
  { name: 'Иван', age: 20 },
  { name: 'Эдем', age: 20 },
  { name: 'Денис', age: 20 },
  { name: 'Виктория', age: 20 },
  { age: 40 },
];

console.log(pickPropArray(students, 'name'));
