// imports
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { BrowserRouter } from "react-router-dom"
import CustomProvider from "./components/CartContext"


const App = () => {
    return (
        <BrowserRouter>
            <CustomProvider>
                <Header/>
                <Main/>
                <Footer/>
            </CustomProvider>
        </BrowserRouter>
    )
}

export default App
