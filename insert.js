// insert.js
// Вмъкване на документи в MongoDB колекциите за приложение "Онлайн книжарница"

use bookstore;

// Колекция: books
// Добавяне на книги
// Книгите имат: title, author, genre, price, stock, ratings (масив), publisher (обект)
db.books.insertMany([
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    price: 12.99,
    stock: 30,
    ratings: [5, 4, 4, 5],
    publisher: { name: "Secker & Warburg", country: "UK" }
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
    price: 9.99,
    stock: 20,
    ratings: [5, 5, 5],
    publisher: { name: "J.B. Lippincott & Co.", country: "USA" }
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    price: 8.99,
    stock: 15,
    ratings: [4, 5],
    publisher: { name: "Charles Scribner's Sons", country: "USA" }
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
    price: 11.49,
    stock: 12,
    ratings: [4, 3, 4],
    publisher: { name: "Chatto & Windus", country: "UK" }
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    genre: "Dystopian",
    price: 10.99,
    stock: 18,
    ratings: [5, 5, 5, 4],
    publisher: { name: "Ballantine Books", country: "USA" }
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    genre: "Adventure",
    price: 13.50,
    stock: 10,
    ratings: [4, 2],
    publisher: { name: "Harper & Brothers", country: "USA" }
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Classic",
    price: 10.00,
    stock: 22,
    ratings: [3, 4, 5],
    publisher: { name: "Little, Brown and Company", country: "USA" }
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    price: 14.20,
    stock: 25,
    ratings: [5, 5, 5, 5],
    publisher: { name: "George Allen & Unwin", country: "UK" }
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    genre: "Philosophical",
    price: 12.75,
    stock: 17,
    ratings: [4, 4, 5],
    publisher: { name: "The Russian Messenger", country: "Russia" }
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    genre: "Horror",
    price: 9.95,
    stock: 14,
    ratings: [4, 5, 3],
    publisher: { name: "Lackington, Hughes, Harding, Mavor & Jones", country: "UK" }
  }
]);

// Колекция: customers
db.customers.insertMany([
  {
    name: "Ivan Petrov",
    email: "ivan@example.com",
    address: { city: "Sofia", street: "Vitosha 12" },
    phone: "0888123456",
    favoriteGenres: ["Sci-fi", "Mystery"]
  },
  {
    name: "Maria Ivanova",
    email: "maria@example.com",
    address: { city: "Plovdiv", street: "Kapana 5" },
    phone: "0888111222",
    favoriteGenres: ["Romance", "Fantasy"]
  },
  {
    name: "Georgi Dimitrov",
    email: "georgi@example.com",
    address: { city: "Varna", street: "Levski 8" },
    phone: "0888333444",
    favoriteGenres: ["Adventure", "Classic"]
  },
  {
    name: "Petya Georgieva",
    email: "petya@example.com",
    address: { city: "Burgas", street: "Aleksandrovska 23" },
    phone: "0888000111",
    favoriteGenres: ["Horror", "Sci-fi"]
  },
  {
    name: "Nikolay Stoyanov",
    email: "nikolay@example.com",
    address: { city: "Ruse", street: "Oborishte 10" },
    phone: "0888999888",
    favoriteGenres: ["Fantasy", "Dystopian"]
  },
  {
    name: "Elena Petrova",
    email: "elena@example.com",
    address: { city: "Pleven", street: "Dunav 7" },
    phone: "0888555666",
    favoriteGenres: ["Philosophical", "Classic"]
  },
  {
    name: "Stoyan Marinov",
    email: "stoyan@example.com",
    address: { city: "Shumen", street: "Bul. Slavia 2" },
    phone: "0888222333",
    favoriteGenres: ["Mystery", "Dystopian"]
  },
  {
    name: "Dessislava Dimitrova",
    email: "dessi@example.com",
    address: { city: "Blagoevgrad", street: "Macedonia 1" },
    phone: "0888777666",
    favoriteGenres: ["Adventure", "Fantasy"]
  },
  {
    name: "Kiril Kirov",
    email: "kiril@example.com",
    address: { city: "Haskovo", street: "Preslav 3" },
    phone: "0888444555",
    favoriteGenres: ["Romance", "Horror"]
  },
  {
    name: "Violeta Staneva",
    email: "violeta@example.com",
    address: { city: "Stara Zagora", street: "Zheleznik 6" },
    phone: "0888666777",
    favoriteGenres: ["Sci-fi", "Classic"]
  }
]);

// Колекция: categories
db.categories.insertMany([
  { name: "Classic", description: "Classic literary works" },
  { name: "Dystopian", description: "Dystopian fiction and futuristic societies" },
  { name: "Fantasy", description: "Fantasy novels and magical adventures" },
  { name: "Horror", description: "Horror stories and supernatural thrillers" },
  { name: "Philosophical", description: "Books with philosophical themes" },
  { name: "Sci-fi", description: "Science fiction and futuristic tech" },
  { name: "Romance", description: "Romantic stories" },
  { name: "Mystery", description: "Crime and mystery novels" },
  { name: "Adventure", description: "Books with exciting adventures" },
  { name: "Historical", description: "Historical fiction and non-fiction" }
]);

// Колекции orders и reviews ще съдържат ObjectId и Date, добави ги в queries.js като пример с агрегации и справки.
