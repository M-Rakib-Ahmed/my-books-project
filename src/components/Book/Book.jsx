import { Link } from "react-router-dom";


const Book = ({book}) => {
    const {image, bookName, author, tags, category, bookId}=book;
    
    return (
       <Link to={`/books/${bookId}`}>
            <div className="card    border">
                <figure className="bg-gray-300 p-5 rounded-md">
                    <img className=" h-[170px] rounded-md"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="text-left">
                    {
                        tags.map((tag, idx) => <button key={idx} className=" btn btn-xs mr-4 mt-2 rounded-full text-green-300">{tag}</button>)
                    }
                </div>
                <div>

                    <h2 className="card-title">
                        {bookName.length > 30 ? bookName.slice(0, 30) + "..." : bookName}

                    </h2>
                    <p className="card-title text-xs">By:{author}</p>
                    <p className="border-t-2 border-dashed mt-10"></p>
                    <div className="text-left mt-3 text-gray-400 flex justify-between">
                        <div>{category}</div>
                        <div className="rating">5.00
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
            </div>
       </Link>
    );
};

export default Book;