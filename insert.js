// Създаване и избор на базата
use onlineCoursesDB

// ------------------------- USERS -------------------------
// Вмъкване на потребители
db.users.insertMany([
  {
    name: "Ivan Petrov",
    email: "ivan@example.com",
    age: 25,
    interests: ["programming", "math"],
    address: { city: "Sofia", street: "Bulgaria Blvd", number: 42 }
  },
  {
    name: "Maria Ivanova",
    email: "maria@example.com",
    age: 31,
    interests: ["art", "design"],
    address: { city: "Plovdiv", street: "Vasil Levski", number: 12 }
  },
  {
    name: "Georgi Georgiev",
    email: "georgi@example.com",
    age: 22,
    interests: ["gaming", "programming"],
    address: { city: "Varna", street: "Slivnitsa", number: 7 }
  },
  {
    name: "Petya Dimitrova",
    email: "petya@example.com",
    age: 29,
    interests: ["languages", "travel"],
    address: { city: "Burgas", street: "Aleksandrovska", number: 21 }
  },
  {
    name: "Dimitar Stoyanov",
    email: "dimitar@example.com",
    age: 35,
    interests: ["photography", "cooking"],
    address: { city: "Ruse", street: "Tsar Osvoboditel", number: 88 }
  },
  {
    name: "Kalina Koleva",
    email: "kalina@example.com",
    age: 24,
    interests: ["design", "UI/UX"],
    address: { city: "Sofia", street: "Cherni Vrah", number: 9 }
  },
  {
    name: "Stoyan Angelov",
    email: "stoyan@example.com",
    age: 28,
    interests: ["sports", "fitness"],
    address: { city: "Pleven", street: "Georgi Benkovski", number: 16 }
  },
  {
    name: "Vesela Mihaylova",
    email: "vesela@example.com",
    age: 26,
    interests: ["programming", "books"],
    address: { city: "Blagoevgrad", street: "Todor Alexandrov", number: 3 }
  },
  {
    name: "Nikolay Todorov",
    email: "nikolay@example.com",
    age: 30,
    interests: ["math", "data science"],
    address: { city: "Sofia", street: "Oborishte", number: 14 }
  },
  {
    name: "Yana Borisova",
    email: "yana@example.com",
    age: 27,
    interests: ["psychology", "marketing"],
    address: { city: "Stara Zagora", street: "Tsar Simeon", number: 5 }
  }
])

// ------------------------- COURSES -------------------------
db.courses.insertMany([
  {
    title: "JavaScript Basics",
    category: "Programming",
    level: "Beginner",
    price: 49.99,
    tags: ["js", "frontend", "web"]
  },
  {
    title: "Advanced Python",
    category: "Programming",
    level: "Advanced",
    price: 89.99,
    tags: ["python", "backend", "data"]
  },
  {
    title: "UI/UX Design",
    category: "Design",
    level: "Intermediate",
    price: 59.99,
    tags: ["design", "ux", "figma"]
  },
  {
    title: "Photography for Beginners",
    category: "Photography",
    level: "Beginner",
    price: 39.99,
    tags: ["photo", "camera", "basics"]
  },
  {
    title: "Digital Marketing",
    category: "Marketing",
    level: "Intermediate",
    price: 69.99,
    tags: ["ads", "seo", "social media"]
  },
  {
    title: "Data Structures in Java",
    category: "Programming",
    level: "Intermediate",
    price: 74.99,
    tags: ["java", "algorithms"]
  },
  {
    title: "Creative Writing",
    category: "Writing",
    level: "Beginner",
    price: 29.99,
    tags: ["writing", "creativity"]
  },
  {
    title: "Project Management Basics",
    category: "Business",
    level: "Beginner",
    price: 54.99,
    tags: ["planning", "scrum", "agile"]
  },
  {
    title: "Machine Learning Fundamentals",
    category: "AI",
    level: "Advanced",
    price: 109.99,
    tags: ["ml", "ai", "python"]
  },
  {
    title: "Cooking Like a Pro",
    category: "Cooking",
    level: "Beginner",
    price: 34.99,
    tags: ["cooking", "chef", "food"]
  }
])

// ------------------------- INSTRUCTORS -------------------------
db.instructors.insertMany([
  { name: "Stefan Markov", bio: "Senior Java Developer", courseIds: [] },
  { name: "Diana Petrova", bio: "UI/UX Expert", courseIds: [] },
  { name: "Alex Todorov", bio: "Digital Marketing Guru", courseIds: [] },
  { name: "Maya Hristova", bio: "Photographer with 10+ years", courseIds: [] },
  { name: "Todor Ivanov", bio: "Full Stack Developer", courseIds: [] },
  { name: "Galina Stoyanova", bio: "Machine Learning Engineer", courseIds: [] },
  { name: "Petar Petrov", bio: "Chef and food blogger", courseIds: [] },
  { name: "Milena Georgieva", bio: "Writer and editor", courseIds: [] },
  { name: "Ivaylo Vasilev", bio: "Business Consultant", courseIds: [] },
  { name: "Elena Kolarova", bio: "Python & AI Expert", courseIds: [] }
])

// ------------------------- ENROLLMENTS -------------------------
// Свързваме userId и courseId по-късно с find().toArray() и update, но за демо:
db.enrollments.insertMany([
  { userId: ObjectId(), courseId: ObjectId(), date: new Date(), status: "active" },
  { userId: ObjectId(), courseId: ObjectId(), date: new Date(), status: "completed" },
  { userId: ObjectId(), courseId: ObjectId(), date: new Date(), status: "active" },
  { userId: ObjectId(), courseId: ObjectId(), date: new Date(), status: "completed" },
  { userId: ObjectId(), courseId: ObjectId(), date: new Date(), status: "active" },
  { userId: ObjectId(), courseId: ObjectId(), date: new Date(), status: "completed" },
  { userId: ObjectId(), courseId: ObjectId(), date: new Date(), status: "active" },
  { userId: ObjectId(), courseId: ObjectId(), date: new Date(), status: "active" },
  { userId: ObjectId(), courseId: ObjectId(), date: new Date(), status: "completed" },
  { userId: ObjectId(), courseId: ObjectId(), date: new Date(), status: "active" }
])

// ------------------------- REVIEWS -------------------------
db.reviews.insertMany([
  { courseId: ObjectId(), userId: ObjectId(), rating: 5, comment: "Excellent course!", date: new Date() },
  { courseId: ObjectId(), userId: ObjectId(), rating: 4, comment: "Very helpful.", date: new Date() },
  { courseId: ObjectId(), userId: ObjectId(), rating: 3, comment: "Average experience", date: new Date() },
  { courseId: ObjectId(), userId: ObjectId(), rating: 5, comment: "Loved the content!", date: new Date() },
  { courseId: ObjectId(), userId: ObjectId(), rating: 2, comment: "Could be better", date: new Date() },
  { courseId: ObjectId(), userId: ObjectId(), rating: 4, comment: "Good value for money", date: new Date() },
  { courseId: ObjectId(), userId: ObjectId(), rating: 5, comment: "Best course I've taken!", date: new Date() },
  { courseId: ObjectId(), userId: ObjectId(), rating: 3, comment: "Not bad", date: new Date() },
  { courseId: ObjectId(), userId: ObjectId(), rating: 1, comment: "Disappointed", date: new Date() },
  { courseId: ObjectId(), userId: ObjectId(), rating: 4, comment: "Well structured", date: new Date() }
])
