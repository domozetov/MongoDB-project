// Избор на база данни
use onlineCoursesDB

// ------------------------- USERS -------------------------

// Извличане на всички потребители
// Read all
db.users.find()

// Филтриране по град
db.users.find({ "address.city": "Sofia" })

// Филтриране по възраст и интерес
db.users.find({ age: { $gt: 25 }, interests: "programming" })

// Актуализиране: Промяна на email на конкретен потребител
db.users.updateOne(
  { email: "ivan@example.com" },
  { $set: { email: "ivan.petrov@example.com" } }
)

// Изтриване: Премахване на потребител от Ruse
db.users.deleteOne({ "address.city": "Ruse" })

// Агрегации:

// Групиране по град с броене
db.users.aggregate([
  { $group: { _id: "$address.city", totalUsers: { $sum: 1 } } }
])

// Средна възраст на потребителите по интерес "programming"
db.users.aggregate([
  { $match: { interests: "programming" } },
  { $group: { _id: null, avgAge: { $avg: "$age" } } }
])

// Сортиране по възраст
db.users.aggregate([
  { $sort: { age: -1 } }
])

// ------------------------- COURSES -------------------------

// Всички курсове
db.courses.find()

// Курсове по категория "Programming"
db.courses.find({ category: "Programming" })

// Курсове с цена под 60 и ниво "Beginner"
db.courses.find({ price: { $lt: 60 }, level: "Beginner" })

// Update: промяна на цена на курс
db.courses.updateOne(
  { title: "JavaScript Basics" },
  { $set: { price: 44.99 } }
)

// Delete: изтриване на курс
db.courses.deleteOne({ title: "Cooking Like a Pro" })

// Агрегации:

// Брой курсове по категория
db.courses.aggregate([
  { $group: { _id: "$category", totalCourses: { $sum: 1 } } }
])

// Средна цена по ниво
db.courses.aggregate([
  { $group: { _id: "$level", avgPrice: { $avg: "$price" } } }
])

// Сортиране по цена
db.courses.aggregate([
  { $sort: { price: -1 } }
])

// ------------------------- INSTRUCTORS -------------------------

// Всички инструктори
db.instructors.find()

// Филтриране по име
db.instructors.find({ name: /Petrov/ })

// Инструктори с повече от 0 курсове (ако има update за courseIds)
db.instructors.find({ courseIds: { $exists: true, $not: { $size: 0 } } })

// Update: добавяне на courseId в courseIds
db.instructors.updateOne(
  { name: "Stefan Markov" },
  { $set: { courseIds: [ObjectId("65faabcde000000000000001")] } }
)

// Delete: премахване на инструктор
db.instructors.deleteOne({ name: "Petar Petrov" })

// Агрегации:

// Групиране по брой курсове
db.instructors.aggregate([
  {
    $project: {
      name: 1,
      numberOfCourses: { $size: "$courseIds" }
    }
  },
  {
    $group: {
      _id: null,
      avgCourses: { $avg: "$numberOfCourses" }
    }
  }
])

// Сортиране по име
db.instructors.aggregate([
  { $sort: { name: 1 } }
])

// Броене на инструктори с повече от 1 курс
db.instructors.aggregate([
  {
    $project: {
      name: 1,
      numCourses: { $size: "$courseIds" }
    }
  },
  {
    $match: { numCourses: { $gt: 1 } }
  },
  {
    $count: "InstructorsWithMultipleCourses"
  }
])

// ------------------------- ENROLLMENTS -------------------------

// Всички записвания
db.enrollments.find()

// Филтриране по статус
db.enrollments.find({ status: "completed" })

// По дата и статус
db.enrollments.find({
  date: { $gte: ISODate("2023-01-01") },
  status: "active"
})

// Update: промяна на статус
db.enrollments.updateOne(
  { status: "active" },
  { $set: { status: "completed" } }
)

// Delete: изтриване на записване
db.enrollments.deleteOne({ status: "completed" })

// Агрегации:

// Групиране по статус
db.enrollments.aggregate([
  { $group: { _id: "$status", count: { $sum: 1 } } }
])

// Брой записвания по месец
db.enrollments.aggregate([
  {
    $group: {
      _id: { $month: "$date" },
      total: { $sum: 1 }
    }
  }
])

// Сортиране по дата
db.enrollments.aggregate([
  { $sort: { date: -1 } }
])

// ------------------------- REVIEWS -------------------------

// Всички ревюта
db.reviews.find()

// Ревюта с оценка >= 4
db.reviews.find({ rating: { $gte: 4 } })

// Ревюта за конкретен курс
db.reviews.find({ courseId: ObjectId("65faabcde000000000000001") })

// Update: промяна на коментар
db.reviews.updateOne(
  { comment: "Not bad" },
  { $set: { comment: "Pretty good actually" } }
)

// Delete: изтриване на слабо ревю
db.reviews.deleteOne({ rating: 1 })

// Агрегации:

// Средна оценка по курс
db.reviews.aggregate([
  {
    $group: {
      _id: "$courseId",
      avgRating: { $avg: "$rating" }
    }
  }
])

// Групиране на брой ревюта по оценка
db.reviews.aggregate([
  { $group: { _id: "$rating", total: { $sum: 1 } } }
])

// Сортиране по дата на ревю
db.reviews.aggregate([
  { $sort: { date: -1 } }
])
