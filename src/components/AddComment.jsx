import React from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import CommentsList from "./CommentsList"

class AddComment extends React.Component {
    state = {
        comment: "",
        rating: 1,
        asin: this.props.book
    }

    handleCommentChange = event => {
        this.setState({ comment: event.target.value })
    }

    handleRatingChange = event => {
        this.setState({ rating: event.target.value })
    }

    handleSubmit = event => {
        new CommentsList().add(this.state)
        event.preventDefault()
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="BookRating">
                    <Form.Label>Your Rating:</Form.Label>
                    <Form.Control as="select" value={this.state.rating} onChange={this.handleRatingChange}>
                        <option value="1">★</option>
                        <option value="2">★★</option>
                        <option value="3">★★★</option>
                        <option value="4">★★★★</option>
                        <option value="5">★★★★★</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="BookComment">
                    <Form.Label>Your Comment:</Form.Label>
                    <Form.Control as="textarea" rows={3} value={this.state.comment} onChange={this.handleCommentChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add Comment
                </Button>
            </Form>
        )
    }
}

export default AddComment
