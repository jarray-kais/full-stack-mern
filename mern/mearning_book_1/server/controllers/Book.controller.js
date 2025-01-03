import Book from "../models/Book.model.js";


const bookController = {
    createBook : async(req , res)=>{
        try {
            const {title , author , pages  } = req.body;
            const isAvailble = Boolean(req.body.isAvailble);
            const newbook = await Book.create({title, author, pages , isAvailble})
            res.status(201).json(newbook);
        } catch (error) {
            
            res.status(400).json(error)
            
        }
    },
    getAllBooks : async(req , res)=>{
        try {
            const book = await Book.find()
            res.status(200).json(book);
        } catch (error) {
            res.status(400).json(error)
            res.status(500).json({ message: "Internal Server Error" });
            
            
        }
    },
    getBookById : async(req, res)=>{
        try {
            const book = await Book.findById(req.params.id)
            
            if(!book) {
                return res.status(404).json({ message: "Book not found" });
            }
            res.status(200).json(book);
        } catch (error) {
            res.status(400).json(error)
            res.status(500).json({ message: "Internal Server Error" });
            
        }
    },
    updateBook : async(req, res)=>{
        const options ={
            new: true,
            runValidators: true
        }
        try {
            const book = await Book.findByIdAndUpdate(req.params.id , req.body , options)
            if(!book) {
                return res.status(404).json({ message: "Book not found" });
            }
            res.status(200).json(book);
        } catch (error) {
            res.status(400).json(error)
            res.status(500).json({ message: "error in updating book " });
        }
    }
    ,
    deleteBook : async(req, res)=>{
        try {
            const book = await Book.findByIdAndDelete(req.params.id)
            if(!book) {
                return res.status(404).json({ message: "Book not found" });
            }
            res.status(200).json({ message: "Book deleted successfully" });
        } catch (error) {
            res.status(400).json(error)
            res.status(500).json({ message: "error in deleting book " });
            
        }
    }


}

export default bookController;