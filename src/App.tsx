import { BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
// import Loader from './components/Navbar/Loader'
import Footer from './components/Navbar/Footer'
import Homeworks from './components/Homework/Homeworks'
import Homework from "./components/Homework/Homework"
import Terms from "./components/Other/Terms"
import Privacy from "./components/Other/Privacy"
import Account from "./components/Other/Account"
import "./App.css"
import Announcements from "./components/Other/Announcements"

function App() {
  return (
    <>
    {/* <Loader/> */}
    <Navbar/>
    <BrowserRouter>
        <Routes>
          <Route path='/' index element={<Home/>} ></Route>
          <Route path='/home' index element={<Home/>} ></Route>
          <Route path='/homeworks' element={<Homeworks/>} ></Route>
          <Route path='/homework' element={<Homework/>} ></Route>
          <Route path='/terms' element={<Terms/>} ></Route>
          <Route path='/privacy' element={<Privacy/>} ></Route>
          <Route path='/announcements' element={<Announcements/>} ></Route>
          <Route path='/account' element={<Account/>} >
            <Route  path=':accountId' element={<Account/>} />
          </Route>
        </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
