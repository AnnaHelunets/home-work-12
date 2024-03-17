// * Завдання 4
// У нас є список книг, і ми хочемо відфільтрувати цей список за певною категорією, а потім групувати книги за авторами. При цьому ми хочемо вивести лише імена авторів та список їхніх книг.

// Список книг
const books = [
  { title: "Book 1", author: "Author A", category: "Fiction" },
  { title: "Book 2", author: "Author B", category: "Non-Fiction" },
  { title: "Book 3", author: "Author A", category: "Fiction" },
  { title: "Book 4", author: "Author C", category: "Mystery" },
  { title: "Book 5", author: "Author B", category: "Fiction" },
];

const category = "Fiction";

const filteredBooks = books.filter((book) => book.category === category);
const authorAndTitle = filteredBooks.reduce((acc, book) => {
  if (!acc[book.author]) {
    acc[book.author] = [];
  }
  acc[book.author].push(book.title);
  return acc;
}, {});

console.log(filteredBooks);
console.log(authorAndTitle);
