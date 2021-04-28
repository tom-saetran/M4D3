import Badge from "react-bootstrap/Badge"

export default function MyBadge(props) {
    return (
  <Badge variant={props.variant}>{props.text}</Badge>
    )
}
