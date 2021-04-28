import SingleBook from "./SingleBook"

const BookList = props => {
    let result = ""

    console.log(props) // This never fires ;_;

    try {
        result = props.books.map(book => <SingleBook book={book} />)
    } catch (error) {
        console.log("oh no error, beep baap boop")
        return null
    } finally {
        return result
    }
}

export default BookList
