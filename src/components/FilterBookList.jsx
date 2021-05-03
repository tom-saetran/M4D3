import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import BookList from "./BookList"

import FantasyBooks from "../data/fantasy.json"

class FilterBookList extends React.Component {
    state = {
        search: ""
    }

    updateFilterFromSearch = event => {
        event.preventDefault()
        this.setState({ search: this.getFilteredBooks(event) })
    }

    getFilteredBooks = event => FantasyBooks.filter(book => book.title.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()))

    render() {
        return (
            <>
                <Container className="pt-3">
                    <Form>
                        <Form.Group controlId="filter-books">
                            <Form.Label>Search...</Form.Label>
                            <Form.Control type="text" placeholder="Search..." onChange={this.updateFilterFromSearch} />
                            <Form.Text className="text-muted">Results will update in real time</Form.Text>
                        </Form.Group>
                    </Form>
                </Container>

                <Container fluid>
                    <Row>
                        <Col className="col-8">
                            <BookList books={this.state.search} />
                        </Col>
                        <Col className="col-4">
                            <BookList books={this.state.search} />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default FilterBookList
