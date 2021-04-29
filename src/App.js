import "bootstrap/dist/css/bootstrap.min.css"
import WarningSign from "./components/WarningSign"
import MyBadge from "./components/MyBadge"
import FilterBookList from "./components/FilterBookList"

const App = () => (
    <>
        <FilterBookList />
        {/* <WarningSign text="ERROR OH NO" /> */}
        {/* <MyBadge variant="warning" text="Something cool" /> */}
    </>
)

export default App
