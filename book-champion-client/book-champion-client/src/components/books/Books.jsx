import React from 'react'
import BookItem from '../bookItem/BookItem'
   

const Books = ({ books }) => {
    return (
        <div className="d-flex justify-content-center flex-wrap">
            <BookItem
                title={books[0].bookTitle}
                author={books[0].bookAuthor}
                rating={books[0].bookRating}
                pageCount={books[0].pageCount}
                imageUrl={books[0].imageUrl}
            />
            <BookItem
                title={books[1].bookTitle}
                author={books[1].bookAuthor}
                rating={books[1].bookRating}
                pageCount={books[1].pageCount}
                imageUrl={books[1].imageUrl}
            />
            <BookItem
                title={books[2].bookTitle}
                author={books[2].bookAuthor}
                rating={books[2].bookRating}
                pageCount={books[2].pageCount}
                imageUrl={books[2].imageUrl}
            />
        </div>
    )
}

export default Books