

function Footer() {
  return (
    <>
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="footer-col first">
                        <h5>About LA RACINE</h5>
                        <p className="p-small">We're passionate about teaching students how to be
                            wisdom in their Studies.
                        </p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="footer-col second">
                        <h5>Links</h5>
                        <ul className="list-unstyled li-space-lg p-small">
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body"><a href="/terms">Terms & Conditions</a></div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body"><a href="/privacy">Privacy Policy</a></div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body"><a href="#programes">Programs</a></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="footer-col third">
                        <h5>Links</h5>
                        <ul className="list-unstyled li-space-lg p-small">
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body"><a href="#programes">Programs</a></div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body"><a href="/terms">Terms & Conditions</a></div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body"><a href="/privacy">Privacy Policy</a></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="footer-col fourth">
                        <h5>Social Media</h5>
                        <p className="p-small">For news & updates follow us</p>
                        <a href="#your-link">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#your-link">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#your-link">
                            <i className="fab fa-pinterest-p"></i>
                        </a>
                        <a href="#your-link">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#your-link">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#your-link">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div> 
                </div>
            </div> 
        </div> 
    </div>

    <div className="copyright">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <p className="p-small">Copyright © 2020 
                    <a href="https://www.laracine.rw">LA RACINE</a> - All rights reserved <br></br> 
                    powered by <a href="https://www.tyza.com">Tyza Inc.</a></p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer