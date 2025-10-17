const Book = require('../models/Book');

const getAllBooks = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const books = await Book.find()
            .skip(skip)
            .limit(limit)
            .sort({ title: 1 });

        const total = await Book.countDocuments();

        res.json({
            books,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createBook = async (req, res) => {
    try {
        const { isbn, title, author, copies } = req.body;
        
        if (!isbn || !title || !author || !copies) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const book = new Book({
            isbn,
            title,
            author,
            copies,
            availableCopies: copies
        });

        await book.save();
        res.status(201).json(book);
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ error: 'ISBN already exists' });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
};

const updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};