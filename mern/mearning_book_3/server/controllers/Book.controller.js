import Book from "../models/Book.model.js";


const bookController = {
    createBook : async(req , res , next)=>{
        try {
            const {title , author , pages  } = req.body;
            const isAvailble = Boolean(req.body.isAvailble);
            const newbook = await Book.create({title, author, pages , isAvailble})
            res.status(201).json(newbook);
        } catch (err) {
            next(err);
        }
    },
    getAllBooks : async(req , res , next)=>{
        try {
            const book = await Book.find()
            res.status(200).json(book);
        } catch (err) {
            next(err);
        }
    },
    getBookById : async(req, res , next)=>{
        try {
            const book = await Book.findById(req.params.id)
            
            if(!book) {
                return res.status(404).json({ message: "Book not found" });
            }
            res.status(200).json(book);
        } catch (err) {
            next(err);
        }
    },
    updateBook : async(req, res , next)=>{
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
        }catch (err) {
            next(err);
        }
    }
    ,
    deleteBook : async(req, res , next)=>{
        try {
            const book = await Book.findByIdAndDelete(req.params.id)
            if(!book) {
                return res.status(404).json({ message: "Book not found" });
            }
            res.status(200).json({ message: "Book deleted successfully" });
        } catch (err) {
            next(err);
        }
    }


}

export default bookController;