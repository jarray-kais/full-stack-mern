import { model, Schema } from "mongoose";

const BookSchema = new Schema({
  title: {
    type: String,
    required: [true, "title is required!"],
    minlength: [2, "title must be at least 2 characters"],
    maxlength: [255, "title must be at less than 255 characters"],
  },
  author: {
    type: String,
    required: [true, "author is required!"],
    minlength: [5, "author must be at least 5 characters"],
    maxlength: [255, "author must be at less than 255 characters"],
  },
  pages: {
    type: Number,
    required: [true, "page is required!"],
    min: [1, "page must be at least 1 page"],
  },
  isAvailble: { type: Boolean, default: false },
},
{timestamps : true}

);

const Book = model("Book", BookSchema);

export default Book;