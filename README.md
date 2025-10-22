# Library-Management-System-API

## Student Information
- **Name:** JORINNA E. ESPENA
- **Course:** BSCS 4-1
- **Submission Date:** October 17, 2025
- **System:** Library Management

## 📌 Base URL
- **Local Development:** `http://localhost:3000`
- **Deployed URL:** `https://library-backend-api-crud-1.onrender.com`

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account

### Installation & Setup
```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables in .env file:
# PORT=3000
# MONGO_URL=your_mongodb_atlas_connection_string

# 3. Seed the database with sample data
npm run seed

# 4. Start the server
npm start

# 5. Verify it's working (in browser or Postman)
# Visit: http://localhost:3000/health
# Expected: {"ok":true}
```
## 🔗 API Endpoints

### 📘 Books Management
| Method | Endpoint | Description | Status Codes |
|:-------|:----------|:-------------|:--------------|
| GET | /api/books | Get all books | 200 |
| GET | /api/books/:id | Get specific book by ID | 200 |
| POST | /api/books | Create a new book | 201 |
| PUT | /api/books/:id | Update a book | 200 |
| DELETE | /api/books/:id | Delete a book | 200 |

### 👥 Members Management
| Method | Endpoint | Description | Status Codes |
|:-------|:----------|:-------------|:--------------|
| GET | /api/members | Get all members (with pagination) | 200 |
| GET | /api/members/:id | Get specific member by ID | 200, 404 |
| POST | /api/members | Create a new member | 201, 400 |
| PUT | /api/members/:id | Update a member | 200, 404 |
| DELETE | /api/members/:id | Delete a member | 200, 404 |

### 💰 Loans Management
| Method | Endpoint | Description | Status Codes |
|:-------|:----------|:-------------|:--------------|
| GET | /api/loans | Get all loans with details | 200 |
| POST | /api/loans | Create a new loan (borrow book) | 201, 400 |
| PATCH | /api/loans/:id/return | Return a borrowed book | 200, 404 |

---

## 🧾 Sample Requests

### Create a Book
```bash
POST http://library-management-system-backend-api-production.up.railway.app/api/books
Content-Type: application/json

{
  "isbn": "978-1233214567",
  "title": "SE2",
  "author": "Rhia Mae",
  "copies": 5
}
```
### Update a Book
```bash
PUT http://library-management-system-backend-api-production.up.railway.app/api/books/:id
Content-Type: application/json
{
  "title": "Updated SE2",
  "copies": 10
}
```

### Create a Member
```bash
POST http://library-management-system-backend-api-production.up.railway.app/api/members
Content-Type: application/json

{
  "name": "Juan Dela Cruz",
  "email": "juan@email.com"
}
```
### Update a Member
```bash
POST http://library-management-system-backend-api-production.up.railway.app/api/members/:id
Content-Type: application/json

{
  "name": "Updated Member Name"
}
```

### Borrow a Book (Create Loan)
```bash
POST http://library-management-system-backend-api-production.up.railway.app/api/loans
Content-Type: application/json

{
  "memberId": "ACTUAL_MEMBER_ID_HERE",
  "bookId": "ACTUAL_BOOK_ID_HERE"
}
```
---

## 🧪 Test Data
- 📚 **5 sample books** (e.g., "Clean Code", "Design Patterns", etc.)
- 👥 **4 sample members**
- Ready for immediate testing after:
  ```bash
  npm run seed
  ```

---

## 🔒 Features Implemented

### Core Requirements
- ✅ Complete CRUD for Books, Members, and Loans  
- ✅ MongoDB Atlas integration  
- ✅ Input validation and error handling  
- ✅ Proper HTTP status codes (200, 201, 400, 404, 500)  
- ✅ Pagination support (`?page=1&limit=10`)  
- ✅ RESTful API design  

### Business Logic
- ✅ Loan management with constraints  
- ✅ Max 5 books per member  
- ✅ Book availability validation  
- ✅ Automatic 14-day due date  
- ✅ Real-time updates to availability  

### Technical Features
- ✅ Express.js MVC architecture  
- ✅ Mongoose ODM for MongoDB  
- ✅ Environment variables via dotenv  
- ✅ CORS enabled  
- ✅ Morgan logging  

---

## 🛠️ Technology Stack
| Layer | Technology |
|:------|:------------|
| Backend | Node.js + Express.js |
| Database | MongoDB Atlas (Cloud) |
| ODM | Mongoose |
| Environment | dotenv |
| Middleware | cors, morgan |

---

## 📁 Project Structure
```
Library-Management-System-Backend-API/
├── app.js (fixed version)
├── package.json
├── .env
├── .gitignore
├── config/
│   └── db.js
├── models/
│   ├── Book.js
│   ├── Member.js
│   └── Loan.js
├── routes/
│   ├── books.js
│   ├── members.js
│   └── loans.js
├── controllers/
│   ├── bookController.js
│   ├── memberController.js
│   └── loanController.js
└── middleware/
    └── errorHandler.js
```





