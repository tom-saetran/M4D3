import "bootstrap/dist/css/bootstrap.min.css"
import WarningSign from "./components/WarningSign"
import MyBadge from "./components/MyBadge"
import SingleBook from "./components/SingleBook"

import FantasyBooks from "./data/fantasy.json"

const App = () => (
    <>
        <WarningSign text="ERROR OH NO" />
        <MyBadge variant="warning" text="Something cool" />
        <SingleBook book={FantasyBooks[0]} />
    </>
)

export default App
