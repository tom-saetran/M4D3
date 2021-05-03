import React from "react"
import Container from "react-bootstrap/Container"

class CommentsList extends React.Component {
    state = {
        comments: []
    }

    async componentDidMount() {
        let result = ""
        try {
            result = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.book, {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMGU5Y2IxZjBmYjAwMTVkOTE3MGMiLCJpYXQiOjE2MTkwMDUwODQsImV4cCI6MTYyMDIxNDY4NH0.g7jMheL_T_9M884BUoPCOuoZKlexshqRDDspOxxUOwQ"
                }
            }).then(result => result.json())
        } catch (error) {
            console.error(error)
            return null
        } finally {
            this.setState({ comments: result })
            console.log(this.state.comments)
        }
    }

    add = async target => {
        let payload = {
            comment: target.comment,
            rate: target.rate,
            asin: target.asin
        }

        try {
            await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
                method: "POST",
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMGU5Y2IxZjBmYjAwMTVkOTE3MGMiLCJpYXQiOjE2MTkwMDUwODQsImV4cCI6MTYyMDIxNDY4NH0.g7jMheL_T_9M884BUoPCOuoZKlexshqRDDspOxxUOwQ"
                },
                body: JSON.stringify(payload)
            }).then(result => result.json())
        } catch (error) {
            console.error(error)
            return null
        } finally {
            let newState = this.state.comments.filter(comment => comment._id !== target)
            this.setState({ comments: newState })
            console.log("poof")
        }
    }

    delete = async target => {
        try {
            await fetch("https://striveschool-api.herokuapp.com/api/comments/" + target, {
                method: "DELETE",
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMGU5Y2IxZjBmYjAwMTVkOTE3MGMiLCJpYXQiOjE2MTkwMDUwODQsImV4cCI6MTYyMDIxNDY4NH0.g7jMheL_T_9M884BUoPCOuoZKlexshqRDDspOxxUOwQ"
                }
            }).then(result => result.json())
        } catch (error) {
            console.error(error)
            return null
        } finally {
            let newState = this.state.comments.filter(comment => comment._id !== target)
            this.setState({ comments: newState })
            console.log("poof")
        }
    }

    render() {
        return (
            <>
                {this.state.comments.map(comment => (
                    <p style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
                        <span>
                            <button className="btn btn-danger" onClick={() => this.delete(comment._id)}>
                                Remove
                            </button>
                        </span>
                        <span className={comment.rate >= 1 ? "text-warning" : "text-dark"}>★</span>
                        <span className={comment.rate >= 2 ? "text-warning" : "text-dark"}>★</span>
                        <span className={comment.rate >= 3 ? "text-warning" : "text-dark"}>★</span>
                        <span className={comment.rate >= 4 ? "text-warning" : "text-dark"}>★</span>
                        <span className={comment.rate >= 5 ? "text-warning" : "text-dark"}>★</span> - {comment.comment}
                    </p>
                ))}
            </>
        )
    }
}

export default CommentsList
