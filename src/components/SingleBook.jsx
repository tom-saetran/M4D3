import React from "react"
import Image from "react-bootstrap/Image"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import AddComment from "./AddComment"
import CommentsList from "./CommentsList"

class SingleBook extends React.Component {
    state = {
        selected: false,
        modalShow: true
    }

    onClick = () => {
        this.setState({ selected: !this.state.selected, modalShow: true })
    }

    render() {
        return (
            <>
                {this.state.selected && <BookModal book={this.props.book} show={this.state.modalShow} onHide={() => this.setState({ modalShow: false, selected: false })} />}
                <Image className={"p-1"} onClick={this.onClick} height="150px" src={this.props.book.img} alt={this.props.book.asin} />
            </>
        )
    }
}

const BookModal = props => {
    return (
        <Modal {...props} size="lg" aria-labelledby="latestModal" centered>
            <Modal.Header closeButton>
                <Modal.Title className="w-100 text-center" id="latestModal">
                    {props.book.asin}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex flex-column">
                <h4 className="text-center">{props.book.title}</h4>
                <img style={{ height: "300px", width: "auto" }} className="img d-block mx-auto pb-2" src={props.book.img} alt={props.book.asin} />
                <AddComment book={props.book.asin} />
                <CommentsList book={props.book.asin} />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SingleBook
