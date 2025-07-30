import React from 'react'

const BookItem = () => {

     const bookTitle = "100 años de soledad"
     const bookAuthor = "Gabriel Garcia Marquez"
     const bookRating = 5
     const pages = 140

  return (
    <div>
        <h2>{bookTitle}</h2>
        <h3>{bookAuthor}</h3>
        <div>{bookRating} Estrellas</div>
        <p>{pages} páginas</p>
    </div>
  )
}

export default BookItem