import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const {bookId} = useParams();
    const id = parseInt(bookId)

    const data = useLoaderData();
    const book = data.find(book => book.bookId === id)
    console.log(data,book,bookId,id);
    const {bookId:currentBookId, image} = book;
    const handleMarkAsRead = ()=>{
        /**
         * 1.understant what to store or save : => bookId
         * 2. Where to store: database
         * 3. array, list, collection:
         * 4. check. if the book is already in the readList.
         * 5. if not. then and the book to the list
         * 6. if yes, do not and the book
         */

       



    }
    
    return (
        <div>
           <h2>Book Details{bookId}</h2> 
           <img className="w-48" src={image} alt="" />
           <br />
           <button className="btn btn-outline mr-4 btn-accent">Mark as Read</button>
           <button className="btn btn-accent">Add to WishList</button>
        </div>
    );
};

export default BookDetails;