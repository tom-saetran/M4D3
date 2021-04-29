import React from "react"

class CommentsList extends React.Component {
    async componentDidMount() {
        console.log(this.props.book)

        let result = ""
        try {
            result = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.book.asin, {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMGU5Y2IxZjBmYjAwMTVkOTE3MGMiLCJpYXQiOjE2MTkwMDUwODQsImV4cCI6MTYyMDIxNDY4NH0.g7jMheL_T_9M884BUoPCOuoZKlexshqRDDspOxxUOwQ"
                }
            }).then(result => result.json())
        } catch (error) {
            console.error(error)
        } finally {
            console.log(result)
        }
    }

    render() {
        return (
            <>
                {/**/}
                {/**/}
            </>
        )
    }
}

export default CommentsList
