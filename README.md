# 🛡️ NestJS GraphQL Authentication API

A secure **authentication system** using **NestJS, GraphQL, Passport, JWT, and Prisma**. Supports **email/password login, biometric authentication**, and includes **E2E tests**.


---

## **📌 Features**

✅ User authentication with **JWT (JSON Web Token)**\
✅ Secure **email/password** login\
✅ **Biometric authentication** using hashed biometric keys\
✅ **GraphQL API** for authentication and user management\
✅ **E2E testing** with Jest & Supertest

---

## **⚡ Tech Stack**

- **NestJS** – Scalable backend framework
- **GraphQL** – Flexible API querying
- **Prisma ORM** – Database interaction
- **Passport.js** – Authentication middleware
- **JWT (jsonwebtoken)** – Secure token-based authentication
- **Bcrypt** – Secure password hashing and biometrickey hashing
- **Docker** – Containerizing
- **Jest & Supertest** – End-to-end testing

---

## **🚀 Installation & Setup**

### **1️⃣ Clone the repository**

```bash
git clone https://github.com/your-repo.git
cd your-repo
```

### **2️⃣ Spin Up Docker and Install dependencies**

```bash
npm install
```

### **3️⃣ Set up environment variables**

Create a **`.env`** file in the root directory and add:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"  #on Docker
JWT_SECRET="your-secret-key"
```

### **4️⃣ Run database migrations**

```bash
npx prisma migrate dev --name init
```

### **5️⃣ Start the application**

```bash
npm run start
```

Or start in **watch mode**:

```bash
npm run start:dev
```

---

## **🔑 Authentication Flow**

### **1️⃣ User CreateUser (Email & Password & biometrickey)**   
 # biometrickey is optional 
```graphql
mutation {
  creat(createUserInput: { email: "user@example.com", password: "password" ,  biometrickey: "something"}) {   
    password
    email
    biometricKey
  }
}

```

![createUser](https://github.com/user-attachments/assets/d64cb80f-793a-4d51-823c-d054a3c18cb2)




### **1️⃣ User Login (Email & Password)**

```graphql
mutation {
  login(loginAuthInput: { email: "user@example.com", password: "password" }) {
    access_token
   
  }
}

```
![login](https://github.com/user-attachments/assets/3b9d2445-a8de-46c7-aafc-c70895b7bee2)



### **2️⃣ Biometric Authentication**

```graphql
mutation {
  biometric(biometricAuthInput: { biometricKey: "sample_biometric_data" }) {
    access_token
  }
}
```
  ![bio](https://github.com/user-attachments/assets/ea7230a9-ffd8-4f6c-887d-0bb4b781bf2a)

### **3️⃣ Get Logged-in User**

```graphql
query {
  getMe {
    id
    email
    username

}
```
![gtme](https://github.com/user-attachments/assets/1544f875-62f7-4392-aaf9-3f28c9ee5071)


🔹 Requires `Authorization: Bearer <JWT_TOKEN>` in the request header.


---

## **✅ Running Tests**

� End-to-End (E2E) Tests**

```bash
npm run test:e2e
```
### **�

---

## **📌 Folder Structure**

```
📂 src/
 ┣ 📂 auth/              # Authentication logic
 ┣ 📂  strategy/         # Jwt  strategy
 ┣ 📂  guard/            # Jwt  authetication guard
 ┣ 📂  decorator/        # To get current logged user using jwt guard
 ┣ 📂 user/              # User service and database logic
 ┣ 📂 prisma/            # Prisma database schema
 ┣ 📚 tests/             # End-to-End (E2E) tests
 ┣ 📝 app.module.ts      # Main module
 ┣ 📝 main.ts            # Entry point
```

---console.log('🛡️ NestJS GraphQL Authentication API');

console.log('## 📌 Features');

console.log('✅ User authentication with JWT (JSON Web Token)');
console.log('✅ Secure email/password login');
console.log('✅ Biometric authentication using hashed biometric keys');
console.log('✅ GraphQL API for authentication and user management');
console.log('✅ E2E testing with Jest & Supertest');

console.log('## ⚡ Tech Stack');

console.log('- NestJS – Scalable backend framework');
console.log('- GraphQL – Flexible API querying');
console.log('- Prisma ORM – Database interaction');
console.log('- Passport.js – Authentication middleware');
console.log('- JWT (jsonwebtoken) – Secure token-based authentication');
console.log('- Bcrypt – Secure password hashing and biometrickey hashing');
console.log('- Docker – Containerizing');
console.log('- Jest & Supertest – End-to-end testing');

console.log('## 🚀 Installation & Setup');

console.log('### 1️⃣ Clone the repository');

console.log('```bash');
console.log('git clone https://github.com/your-repo.git');
console.log('cd your-repo');
console.log('```');

console.log('### 2️⃣ Spin Up Docker and Install dependencies');

console.log('```bash');
console.log('npm install');
console.log('```');

console.log('### 3️⃣ Set up environment variables');

console.log('Create a .env file in the root directory and add:');

console.log('```env');
console.log('DATABASE_URL="postgresql://user:password@localhost:5432/dbname"  #on Docker');
console.log('JWT_SECRET="your-secret-key"');
console.log('```');

console.log('### 4️⃣ Run database migrations');

console.log('```bash');
console.log('npx prisma migrate dev --name init');
console.log('```');

console.log('### 5️⃣ Start the application');

console.log('```bash');
console.log('npm run start');
console.log('```');

console.log('Or start in watch mode:');

console.log('```bash');
console.log('npm run start:dev');
console.log('```');

console.log('## 🔑 Authentication Flow');

console.log('### 1️⃣ User Login (Email & Password)');

console.log('```graphql');
console.log('mutation {');
console.log('  login(loginAuthInput: { email: "user@example.com", password: "password" }) {');
console.log('    access_token');
console.log('  }');
console.log('}');
console.log('```');

console.log('### 2️⃣ Biometric Authentication');

console.log('```graphql');
console.log('mutation {');
console.log('  biometric(biometricAuthInput: { biometricKey: "sample_biometric_data" }) {');
console.log('    access_token');
console.log('  }');
console.log('}');
console.log('```');

console.log('### 3️⃣ Get Logged-in User');

console.log('```graphql');
console.log('query {');
console.log('  getMe {');
console.log('    id');
console.log('    email');
console.log('    username');
console.log('  }');
console.log('}');
console.log('```');

console.log('🔹 Requires Authorization: Bearer <JWT_TOKEN> in the request header.');

console.log('## ✅ Running Tests');

console.log('### 🧚 Unit Tests');

console.log('Run all unit tests:');

console.log('```bash');
console.log('npm run test');
console.log('```');

console.log('### 🌍 End-to-End (E2E) Tests');

console.log('```bash');
console.log('npm run test:e2e');
console.log('```');

console.log('🔹 Test Coverage');

console.log('```bash');
console.log('npm run test:cov');
console.log('```');

console.log('## 📌 Folder Structure');

console.log('```');
console.log('📂 src/');
console.log(' ┣ 📂 auth/              # Authentication logic');
console.log(' ┣ 📂  strategy/         # Jwt  strategy');
console.log(' ┣ 📂  guard/            # Jwt  authetication guard');
console.log(' ┣ 📂  decorator/        # To get current logged user using jwt guard');
console.log(' ┣ 📂 user/              # User service and database logic');
console.log(' ┣ 📂 prisma/            # Prisma database schema');
console.log(' ┣ 📚 tests/             # End-to-End (E2E) tests');
console.log(' ┣ 📝 app.module.ts      # Main module');
console.log(' ┣ 📝 main.ts            # Entry point');
console.log('```');

console.log('## 📌 API Documentation');

console.log('You can access the GraphQL playground at:');
console.log('📍 http://localhost:3000/graphql');

## **📌 API Documentation**

You can access the GraphQL playground at:\
📍 `http://localhost:3000/graphql`
