#  OnlineCoursesDB – MongoDB проект

##  Общо описание

Този проект представлява MongoDB база данни за онлайн образователна платформа, наречена **OnlineCoursesDB**. Платформата управлява информация за потребители, курсове, инструктори, записвания и ревюта. Системата позволява CRUD операции и използва множество `aggregate` pipeline заявки за извличане на аналитични данни.

Проектът е създаден като част от учебна задача и включва:

-  5 колекции
-  Поне 10 документа във всяка
-  CRUD операции (create, read, update, delete)
-  Множество агрегиращи заявки (групиране, сумиране, броене, филтриране, сортиране)
-  Структура подходяща за качване в GitHub

---

##  Структура на проекта

OnlineCoursesDB
├── insert.js # Всички заявки за вмъкване на данни с коментари
├── queries.js # Всички CRUD и агрегиращи заявки с коментари
└── README.md # Това описание

yaml
Copy
Edit

---

##  Колекции и структура на документите

### 1. `users`

Съдържа информация за потребители на платформата.


{
  "name": "Ivan Petrov",
  "email": "ivan@example.com",
  "age": 28,
  "interests": ["programming", "math"],
  "address": {
    "city": "Sofia",
    "street": "Bulgaria Blvd. 101"
  }
}
2. courses
Съдържа всички онлайн курсове.

json
Copy
Edit
{
  "title": "JavaScript Basics",
  "category": "Programming",
  "price": 49.99,
  "level": "Beginner",
  "createdAt": ISODate("2023-10-01")
}
3. instructors
Информация за преподаватели и курсовете, които водят.

json
Copy
Edit
{
  "name": "Stefan Markov",
  "bio": "Software engineer with 10 years of experience.",
  "courseIds": [
    ObjectId("65faabcde000000000000001"),
    ObjectId("65faabcde000000000000002")
  ]
}
4. enrollments
Записвания на потребители за курсове.

json
Copy
Edit
{
  "userId": ObjectId("65faabcde000000000000010"),
  "courseId": ObjectId("65faabcde000000000000001"),
  "date": ISODate("2024-02-15"),
  "status": "completed"
}
5. reviews
Мнения и оценки за курсове.

json
Copy
Edit
{
  "courseId": ObjectId("65faabcde000000000000001"),
  "userId": ObjectId("65faabcde000000000000010"),
  "rating": 5,
  "comment": "Excellent course!",
  "date": ISODate("2024-03-01")
}
 Инсталация и използване
 Изисквания
MongoDB (локално или в облак – MongoDB Atlas)

Mongo Shell или MongoDB Compass

Git (по избор)

 Стъпки
bash
Copy
Edit
git clone https://github.com/your-username/OnlineCoursesDB.git
cd OnlineCoursesDB
Отвори insert.js и стартирай заявките, за да вмъкнеш данните.

След това отвори queries.js, за да изпълниш CRUD и агрегиращите заявки.

 Агрегиращи операции
Проектът съдържа aggregate pipeline заявки за всяка колекция, включително:

Групиране

Сумиране, броене, средна стойност

Филтриране и сортиране

Пример: Средна цена на курсовете по ниво
js
Copy
Edit
db.courses.aggregate([
  {
    $group: {
      _id: "$level",
      avgPrice: { $avg: "$price" }
    }
  }
])
 Какво покрива проектът
Условие	Изпълнено
5 Колекции	
≥10 документа на колекция	
Разнообразие от типове данни	
CRUD операции за всяка колекция	
Агрегиране: групиране	
Агрегиране: сумиране/средно/броене	
Агрегиране: филтриране и сортиране	
Коментари преди всяка заявка	
README.md описание
