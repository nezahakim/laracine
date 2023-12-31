import { unique_id } from "../auth/session"
import { useState,useEffect } from "react"


function Navbar() {
    
    const [show,setShow] = useState(true)
    var prevScrollPos = window.scrollY;

    const constrolNavbar = () =>{
        var currentScrollPos = window.scrollY;
        if (prevScrollPos > currentScrollPos) {
            setShow(true)
        } else {
            setShow(false)
        }
        prevScrollPos = currentScrollPos;     
    }
    useEffect(()=>{
        window.addEventListener('scroll',constrolNavbar)
        return () =>{
            window.removeEventListener('scroll',constrolNavbar)
        }
    },[])
    
    const [collapse,setCollapse] = useState(false)
    const handleCollapse = () =>{
        setCollapse(!collapse)
    }

    const [nav_collapse,setNav_collapse] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setNav_collapse(true)
            } else {
                setNav_collapse(false)
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('load', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


  return (
    <nav className={`${show ? `navbar-scroll-show`:`navbar-scroll-hide`} navbar navbar-expand-lg navbar-dark navbar-custom fixed-top ${nav_collapse && 'top-nav-collapse'} `}>

        {/* <!-- Text Logo - Use this if you don't have a graphic logo --> */}
        {/* <!-- <a className="navbar-brand logo-text page-scroll" href="index.html">Corso</a> --> */}

        {/* <!-- Image Logo --> */}
        <a className="navbar-brand logo-image" href="/"><img src="./system/logo.jpg" className="logo" alt="alternative" /></a>

        {/* <!-- Mobile Menu Toggle Button --> */}
        <button onClick={handleCollapse} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded={`${collapse ? 'true' : 'false'}`} aria-label="Toggle navigation">
            <span className="navbar-toggler-awesome fas fa-bars"></span>
            <span className="navbar-toggler-awesome fas fa-times"></span>
        </button>
        {/* <!-- end of mobile menu toggle button --> */}

        <div className={`ul-ul ${ collapse ? '':'collapse' } navbar-collapse`} id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link page-scroll" href="/">HOME <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link page-scroll" href="/announcements">ANNOUNCEMENTS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link page-scroll" href="/#description">DETAILS</a>
                </li>

                {/* <!-- Dropdown Menu -->           */}
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle page-scroll" 
                                href="/#programes" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">PROGRAMS</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="/#nursary" ><span className="item-text">NURSARY</span></a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/#primary"><span className="item-text">PRIMARY</span></a>
                    </div>
                </li>
                {/* <!-- end of dropdown menu --> */}

                <li className="nav-item">
                    <a className="nav-link page-scroll" href="/homeworks">HOMEWORKS</a>
                </li>

                {/* <!-- Dropdown Menu -->           */}
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle page-scroll" 
                                href="/#date" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">DATE</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="/terms" ><span className="item-text">TERMS CONDITIONS</span></a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/privacy"><span className="item-text">PRIVACY POLICY</span></a>
                    </div>
                </li>
                {/* <!-- end of dropdown menu --> */}

                <li className="nav-item">
                    <a className="nav-link page-scroll" href="/#contact">CONTACT</a>
                </li>
                {unique_id != '' && unique_id != null ? 
                (<li className="nav-item">
                    <a className="nav-link page-scroll" href="/account">
                        <div className="account">
                            <img src="./system/person.png" alt="person" />
                            ACCOUNT
                        </div>
                    </a>
                </li>)
                : ''}
            </ul>
            <span className="nav-item social-icons">
                <span className="fa-stack">
                    <a href="#your-link">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-facebook-f fa-stack-1x"></i>
                    </a>
                </span>
                <span className="fa-stack">
                    <a href="#your-link">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-twitter fa-stack-1x"></i>
                    </a>
                </span>
            </span>
        </div>
    </nav>
  )
}

export default Navbar