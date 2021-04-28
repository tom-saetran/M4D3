import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import WarningSign from "./components/WarningSign"
import MyBadge from "./components/MyBadge"

const App = () => (
    <>
    <WarningSign text="ERROR OH NO"/>
    <MyBadge variant="warning" text="Something cool"/>
    </>
)

export default App
