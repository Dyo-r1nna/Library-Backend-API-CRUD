require('dotenv').config();
const mongoose = require('mongoose');
const Book = require('./src/models/Book');
const Member = require('./src/models/Member');
const { connectDB } = require('./src/db');

async function seedData() {
    try {
        await connectDB();
        
        await Book.deleteMany();
        await Member.deleteMany();

        const books = await Book.insertMany([
            {
                isbn: "978-0132350884",
                title: "Clean Code: A Handbook of Agile Software Craftsmanship",
                author: "Robert C. Martin",
                copies: 5
            },
            {
                isbn: "978-0201633610",
                title: "Design Patterns: Elements of Reusable Object-Oriented Software",
                author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
                copies: 3
            },
            {
                isbn: "978-0321125217",
                title: "Domain-Driven Design: Tackling Complexity in the Heart of Software",
                author: "Eric Evans",
                copies: 2
            },
            {
                isbn: "978-0134494166",
                title: "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
                author: "Robert C. Martin",
                copies: 4
            },
            {
                isbn: "978-1617293294",
                title: "Spring in Action",
                author: "Craig Walls",
                copies: 3
            }
        ]);

        const members = await Member.insertMany([
            {
                name: "Alice Johnson",
                email: "alice.johnson@email.com"
            },
            {
                name: "Bob Smith",
                email: "bob.smith@email.com"
            },
            {
                name: "Carol Davis",
                email: "carol.davis@email.com"
            },
            {
                name: "David Wilson",
                email: "david.wilson@email.com"
            }
        ]);

        console.log('✅ Seed data created successfully!');
        console.log(`📚 Created ${books.length} books`);
        console.log(`👥 Created ${members.length} members`);
        
    } catch (error) {
        console.error('❌ Error seeding data:', error);
    } finally {
        mongoose.connection.close();
        console.log('Database connection closed');
    }
}

seedData();