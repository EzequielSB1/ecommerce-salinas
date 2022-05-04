// imports
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { BrowserRouter } from "react-router-dom"

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Main/>
            <Footer/>
        </BrowserRouter>
    )
}

export default App
