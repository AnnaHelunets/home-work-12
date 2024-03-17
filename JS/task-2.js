//* Завдання 2
// Дано масив чисел. Потрібно знайти суму всіх додатних чисел у масиві, які є кратними числу 3.

// Вхідні дані: масив чисел

// Вихідні дані: сума всіх додатних чисел у масиві, які є кратними числу 3.

// Приклад вхідних даних: [3, 5, -9, 7, 2, 8, 10, -6]

// Приклад вихідних даних: 9

function findSum(arr) {
  return arr
    .filter((value) => value > 0 && value % 3 === 0)
    .reduce((acc, value) => acc + value);
}
console.log(findSum([3, 5, -9, 7, 2, 8, 10, -6]));
