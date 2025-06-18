// queries.js
// Заявки към MongoDB за четене, актуализация, изтриване и агрегации

use bookstore;

// 📘 BOOKS

// Извличане на всички книги
db.books.find();

// Филтриране по жанр
db.books.find({ genre: "Dystopian" });

// Филтриране по жанр и цена под 12
db.books.find({ genre: "Classic", price: { $lt: 12 } });

// Актуализация на книга по заглавие - увеличаване на наличност
db.books.updateOne(
  { title: "1984" },
  { $inc: { stock: 5 } }
);

// Изтриване на книга по автор
db.books.deleteOne({ author: "Herman Melville" });

// Агрегиране: групиране по жанр и средна цена
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" },
      totalStock: { $sum: "$stock" }
    }
  },
  { $sort: { averagePrice: -1 } }
]);

// 👥 CUSTOMERS

// Всички клиенти
db.customers.find();

// Филтриране по град
db.customers.find({ "address.city": "Sofia" });

// Филтриране по жанр в любимите
db.customers.find({ favoriteGenres: "Dystopian" });

// Актуализация на телефон по имейл
db.customers.updateOne(
  { email: "ivan@example.com" },
  { $set: { phone: "0888999111" } }
);

// Изтриване по имейл
db.customers.deleteOne({ email: "georgi@example.com" });

// Агригация: групиране на клиенти по град
db.customers.aggregate([
  {
    $group: {
      _id: "$address.city",
      count: { $sum: 1 }
    }
  },
  { $sort: { count: -1 } }
]);

// 📂 CATEGORIES

// Всички категории
db.categories.find();

// Филтриране по име
db.categories.find({ name: "Fantasy" });

// Актуализация на описание
db.categories.updateOne(
  { name: "Horror" },
  { $set: { description: "Horror books and terrifying tales" } }
);

// Изтриване на категория
db.categories.deleteOne({ name: "Historical" });

// Агригация: просто броене на всички категории
db.categories.aggregate([
  {
    $group: {
      _id: null,
      totalCategories: { $sum: 1 }
    }
  }
]);

// 🧾 ДОПЪЛНИТЕЛНИ: примерни колекции orders и reviews

// Колекция: orders
db.orders.insertMany([
  {
    customerId: ObjectId("664a8f9b7c0c3d8999c14e01"),
    items: [
      { bookId: ObjectId("664a8cba7c0c3d8999c14e11"), quantity: 2 },
      { bookId: ObjectId("664a8cba7c0c3d8999c14e13"), quantity: 1 }
    ],
    total: 32.97,
    orderDate: new Date("2025-06-01T10:00:00Z")
  }
]);

// Агригация: обща сума на поръчките
db.orders.aggregate([
  {
    $group: {
      _id: null,
      totalRevenue: { $sum: "$total" },
      totalOrders: { $sum: 1 }
    }
  }
]);

// Колекция: reviews
db.reviews.insertMany([
  {
    bookId: ObjectId("664a8cba7c0c3d8999c14e11"),
    reviewer: "Ivan Petrov",
    rating: 5,
    comment: "Прекрасна книга!",
    date: new Date("2025-06-10")
  }
]);

// Агригация: средна оценка по книга
db.reviews.aggregate([
  {
    $group: {
      _id: "$bookId",
      avgRating: { $avg: "$rating" },
      count: { $sum: 1 }
    }
  }
]);
