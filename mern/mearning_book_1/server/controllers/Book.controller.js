import Book from "../models/Book.model.js";


const bookController = {
    createBook : async(req , res)=>{
        try {
            const {title , author , pages  } = req.body;
            const isAvailble = Boolean(req.body.isAvailble);
            const newbook = await Book.create({title, author, pages , isAvailble})
            res.status(201).json(newbook);
        } catch (error) {
            if (error.name === 'ValidationError') {
                const errors = Object.values(error.errors).map((err) => err.message);
                return res.status(400).json({ errors: errors.join(', ') });
              }
              res.status(500).json({ message: "Internal Server Error" });
            
        }
    },
    getAllBooks : async(req , res)=>{
        try {
            const book = await Book.find()
            res.status(200).json(book);
        } catch (error) {
            if (error.name === 'ValidationError') {
                // Crée un objet d'erreurs claires
                const errors = Object.values(error.errors).map((err) => err.message);
                // Retourne les erreurs comme une seule chaîne
                return res.status(400).json({ errors: errors.join(', ') });
              }
            res.status(500).json({ message: "Internal Server Error" });
            
            
        }
    },
    getBookById : async(req, res)=>{
        try {
            const book = await Book.findById(req.params.id)
            console.log(book)
            if(!book) {
                return res.status(404).json({ message: "Book not found" });
            }
            res.status(200).json(book);
        } catch (error) {
            if (error.name === 'ValidationError') {
                // Crée un objet d'erreurs claires
                const errors = Object.values(error.errors).map((err) => err.message);
                // Retourne les erreurs comme une seule chaîne
                return res.status(400).json({ errors: errors.join(', ') });
              }
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
            if (error.name === 'ValidationError') {
                // Crée un objet d'erreurs claires
                const errors = Object.values(error.errors).map((err) => err.message);
                // Retourne les erreurs comme une seule chaîne
                return res.status(400).json({ errors: errors.join(', ') });
              }
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
            if (error.name === 'ValidationError') {
                // Crée un objet d'erreurs claires
                const errors = Object.values(error.errors).map((err) => err.message);
                // Retourne les erreurs comme une seule chaîne
                return res.status(400).json({ errors: errors.join(', ') });
              }
            res.status(500).json({ message: "error in deleting book " });
            
        }
    }


}

export default bookController;