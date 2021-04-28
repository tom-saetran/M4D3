import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import CardColumns from "react-bootstrap/CardColumns"

const BookList = props => {
    return (
        <Container>
            <CardColumns>
                {props.books.map(book => (
                    <Card>
                        <Card.Img variant="top" src={book.img} />
                        <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                        </Card.Body>
                    </Card>
                ))}
            </CardColumns>
        </Container>
    )
}

export default BookList
