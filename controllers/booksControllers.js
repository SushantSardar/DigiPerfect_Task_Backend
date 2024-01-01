const BooksModel = require("../models/books")

const showBooksList = async (req, res) => {
    try {
        const booksList = await BooksModel.find({}).sort({ createdAt: -1 });
        res.status(200).json(booksList);
    } catch (error) {
        console.error("ClientList not added!!!", error);
        res.status(500).json({ error: "ClientList Not added" });
    }
};
const addBook = async (req, res) => {
    try {
        const { thumbnail, title, publisher, author, publishingYear, eanCode, copiesInStock} = req.body;
        const booksList = await BooksModel.create({ thumbnail, title, publisher, author, publishingYear, eanCode, copiesInStock });
        res.status(200).json({message:"Book added successfully",booksList:booksList});
    } catch (error) {
        console.error("ClientList not added!!!", error);
        res.status(500).json({ error: "ClientList Not added" });
    }
};

module.exports = {showBooksList, addBook};




