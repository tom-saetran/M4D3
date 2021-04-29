import React from "react"
import SingleBook from "./SingleBook"
import Fantasy from "../data/fantasy.json"

class BookList extends React.Component {
    state = {
        books: Fantasy
    }

    result = ""

    render() {
        try {
            this.result = this.props.books.map(book => <SingleBook book={book} key={book.asin} />)
        } catch (error) {
            console.log("oh no error, beep baap boop", error)
            return null
        } finally {
            return this.result
        }
    }
}

export default BookList
