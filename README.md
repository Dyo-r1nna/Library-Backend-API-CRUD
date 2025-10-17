# Library-Management-System-API

## Student Information
- **Name:** RHIA MAE U. GOJAR
- **Course:** BSCS 4-1
- **Submission Date:** October 17, 2025
- **System:** Library Management

## 📌 Base URL
**Local Development:** `http://localhost:3000`

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

### 🔗 API Endpoints

### 📘 Books Management
| Method | Endpoint | Description | Status Codes |
|:-------|:----------|:-------------|:--------------|
| GET | /api/books | Get all books (with pagination) | 200 |
| GET | /api/books/:id | Get specific book by ID | 200, 404 |
| POST | /api/books | Create a new book | 201, 400 |
| PUT | /api/books/:id | Update a book | 200, 404 |
| DELETE | /api/books/:id | Delete a book | 200, 404 |

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
