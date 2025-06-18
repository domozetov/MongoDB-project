# MongoDB-project

#  Bookstore MongoDB Project

Този проект представя MongoDB база данни за **онлайн книжарница**, включваща колекции за книги, клиенти, категории, поръчки и отзиви. Проектът демонстрира пълните CRUD операции, както и използване на **aggregate pipeline** за обработка и анализ на данни.

## Съдържание на проекта

bookstore-project
├── insert.js # Всички INSERT (добавяне) заявки
├── queries.js # Всички останали заявки (Read, Update, Delete, Aggregate)
└── README.md # Описание на базата данни и инструкции за стартиране

yaml
Copy
Edit

---

## Описание на базата данни

**Име на базата данни:** `bookstore`

Тя съдържа пет основни колекции:

### 1. `books`
Съдържа информация за книгите, налични в книжарницата.

**Примерна структура на документ:**
```json
{
  "title": "1984",
  "author": "George Orwell",
  "genre": "Dystopian",
  "price": 12.99,
  "stock": 12,
  "tags": ["classic", "totalitarianism"],
  "details": {
    "publisher": "Secker & Warburg",
    "year": 1949
  }
}
2. customers
Съдържа информация за клиентите на магазина.

Примерна структура:

json
Copy
Edit
{
  "name": "Ivan Petrov",
  "email": "ivan@example.com",
  "phone": "0888123456",
  "favoriteGenres": ["Fantasy", "Sci-Fi"],
  "address": {
    "city": "Sofia",
    "street": "Bulgaria Blvd. 15"
  }
}
3.  categories
Съдържа жанрове/категории за книги.

Примерна структура:

json
Copy
Edit
{
  "name": "Fantasy",
  "description": "Books with magical worlds and epic adventures"
}
4. orders
Съдържа информация за направени поръчки от клиенти.

Примерна структура:

json
Copy
Edit
{
  "customerId": ObjectId(...),
  "items": [
    { "bookId": ObjectId(...), "quantity": 2 }
  ],
  "total": 25.98,
  "orderDate": ISODate("2025-06-01T10:00:00Z")
}
5.  reviews
Отзиви на клиенти за книги.

Примерна структура:

json
Copy
Edit
{
  "bookId": ObjectId(...),
  "reviewer": "Maria Ivanova",
  "rating": 5,
  "comment": "Страхотна книга!",
  "date": ISODate("2025-06-10")
}
⚙️ Инструкции за използване
1. Инсталиране на MongoDB (ако още не е инсталиран)
Изтегли MongoDB от: https://www.mongodb.com/try/download/community

Инсталирай го и стартирай сървъра с командата:

bash
Copy
Edit
mongod
2. Стартиране на MongoDB Shell
bash
Copy
Edit
mongo
3. Изпълнение на insert.js
От MongoDB shell зареди:

bash
Copy
Edit
load("insert.js")
4. Изпълнение на queries.js
След това изпълни:

bash
Copy
Edit
load("queries.js")
 Какво съдържа проектът (по условие)
 Създаване (Create)
Всяка колекция съдържа поне 10 документа.

Документите съдържат различни типове данни – прости типове, масиви и вградени обекти.

 Четене (Read)
Заявки за:

Извличане на всички документи.

Филтриране по едно и по няколко полета.

 Актуализация (Update)
Поне една заявка за актуализация във всяка колекция – чрез $set и $inc.

 Изтриване (Delete)
Поне една заявка за изтриване на документ от всяка колекция.

 Агрегиране (Aggregate)
Използване на aggregate() за:

Групиране по поле ($group)

Сумиране, броене или средни стойности ($sum, $avg)

Филтриране и сортиране ($match, $sort)

Примерни технологии
MongoDB Community Server

Mongo Shell (mongosh или mongo)

Visual Studio Code или друг редактор

Автор
Проектът е създаден с учебна цел като част от задание по бази данни.

yaml
Copy
Edit

---

Готово за поставяне в GitHub! Ако искаш, мога да ти помогна и с `.gitignore` или описание на комитит
