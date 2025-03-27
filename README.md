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

 access_token
```
![creatUser](https://github.com/user-attachments/assets/36c29e7b-8de5-42fb-9dec-125e87a6d9be)



### **1️⃣ User Login (Email & Password)**

```graphql
mutation {
  login(loginAuthInput: { email: "user@example.com", password: "password" }) {
   
  }
}

```
![login](https://github.com/user-attachments/assets/f9abe10d-1ac5-4eaf-b169-413745c26b1d)


### **2️⃣ Biometric Authentication**

```graphql
mutation {
  biometric(biometricAuthInput: { biometricKey: "sample_biometric_data" }) {
    access_token
  }
}
```
  }![biometric](https://github.com/user-attachments/assets/5ddba17f-0fee-42b4-9a07-dfe60902f365)

### **3️⃣ Get Logged-in User**

```graphql
query {
  getMe {
    id
    email
    username

}
```
![gtme](https://github.com/user-attachments/assets/12ed6693-755b-4e6e-a0b7-f865b0c0c909)

🔹 Requires `Authorization: Bearer <JWT_TOKEN>` in the request header.

---

## **✅ Running Tests**

### **🧚 Unit Tests**

Run all unit tests:

```bash
npm run test
```

� End-to-End (E2E) Tests**

```bash
npm run test:e2e
```
### **�

🔹 **Test Coverage**

```bash
npm run test:cov
```

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

---

## **📌 API Documentation**

You can access the GraphQL playground at:\
📍 `http://localhost:3000/graphql`
