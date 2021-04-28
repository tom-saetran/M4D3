import React from "react"
import Container from "react-bootstrap/Container"
import CardColumns from "react-bootstrap/CardColumns"
import Card from "react-bootstrap/Card"

class SingleBook extends React.Component {
    state = {
        selected: false
    }

    render() {
        return (
            <>
                <Container>
                    <CardColumns>
                        <Card>
                            <Card.Img variant="top" src={this.props.book.img} />
                            <Card.Body>
                                <Card.Title>{this.props.book.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </CardColumns>
                </Container>
            </>
        )
    }
}

export default SingleBook
