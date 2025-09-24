import React, { useEffect, useState } from 'react'
import BookItem from '../bookItem/BookItem'
import BookSearch from '../bookSearch/BookSearch'
import DeleteModal from '../ui/modals/DeleteModal'

const Books = ({ books, onDeleteBook }) => {
  const [search, setSearch] = useState("");
  const [bookSelected, setBookSelected] = useState("");
  const [modal, setModal] = useState({
    show: false,
    bookId: 0,
    title: ""
  });

  const handleSearch = (value) => {
    setSearch(value)
  };

  const handleBookSelected = (title) => {
    setBookSelected(title)
  }

  const handleDeleteBook = (id, title) => {
    setModal({
      show: true,
      bookId: id,
      title,
    })
  }

  const handleDeleteFromModal = () => {
    onDeleteBook(modal.bookId);
    setModal({
      show: false,
      bookId: 0,
      title: ''
    });
  }

  const handleHideModal = () => {
    setModal({
      show: false,
      bookId: 0,
      title: ''
    });
  }

  const filteredBooks = books.filter((book) => {
    if (!search) return true
    return (
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
    )
  });

  return (
    <div className="d-flex justify-content-center flex-wrap my-5">
      <DeleteModal
        headerText="Eliminar libro"
        onHide={handleHideModal}
        onDelete={handleDeleteFromModal}
        entity={modal.title}
        show={modal.show}

      />
      <div className="container w-50 d-flex justify-content-center flex-wrap">
        <BookSearch onSearch={handleSearch} search={search} />
      </div>

      <div className="container d-flex justify-content-center flex-wrap">
        {filteredBooks.length ? (
          filteredBooks.map((book) => (
            <BookItem
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              rating={book.rating}
              pageCount={book.pageCount}
              summary={book.summary}
              imageUrl={book.imageUrl}
              available={book.available}
              onDeleteBook={handleDeleteBook}
            />
          ))
        ) : (
          <p>No se encontraron libros</p>
        )}
      </div>
    </div>
  )
}

export default Books


