import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('bookData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    },[])
    return (
        <div>
           <h2 className="text-4xl">Books</h2> 
            <div className="grid lg:grid-cols-3 gap-10 mb-10">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;