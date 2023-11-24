import axios from "axios"
import { HiArrowLeft,HiArrowRight } from "react-icons/hi"
import session from "../auth/session"
import { useState } from "react"

function Body() {
    const [error,setError] = useState([])
    const [inputs,setInputs] = useState({
        email:'',
        password:'',
        save:''
    })
    const HandleChange = (e) =>{
        setInputs((prev)=>({...prev,[e.target.name]:[e.target.value]}))
    }

    const HandleSubmit = (e) =>{
        e.preventDefault()
        try{
            const a = async ()=> {
            const data = await axios.post("http://localhost:8000/login",inputs);
                
                var values = data.data;
                if(values.status){
                    console.log(values.status)
                    var id = values.userId
                    session.setItem("userId",id)
                    window.location.href = "/homeworks"
                }else{
                    setError( values )
                }
            }
            a();
        }catch(error){
            console.log(error)
        }
    }


    const HandleLogin = () =>{
        document.querySelector(".login-form")!.style.display = "flex";
    }
    window.onclick = (e) => {
        if(e.target!.matches(".login-form")){
            if(!e.target!.matches(".main-form")){
                document.querySelector(".login-form")!.style.display = "none";
            }
        }
    }

  return (
    <>

    <div className="login-form">
        <form className="main-form" method="POST">
            <div className="login-details">
                <img src="./system/logo.jpg" alt="img" />
                <span>Login To Laracine</span>
            </div>
            <div className="error">
                {error.length > 0 ? error : '' }
            </div>
            <div className="form">
                <label htmlFor="email">Email</label>
                <input type="email" onChange={HandleChange} required placeholder="Email" name="email" />
            </div>
            <div className="form">
                <label htmlFor="password">Password</label>
                <input type="password" onChange={HandleChange} required placeholder="Password" name="password" />
            </div>
            <div className="form save">
                <span> Remember me &nbsp;<input type="checkbox" onChange={HandleChange} name="save" className="save-login" /></span>
                <a href="">forget password</a>
            </div>
            <div className="form">
                <button type="submit" onClick={HandleSubmit}>LOGIN</button>
            </div>
        </form>
    </div>

    <section className="student-events">
        <div className="container">
        <div className="single-event one">
            <h4>CERTFICATE</h4>
            <img src="./system/image/img-11.jpeg" alt="img" />
            <div className="details">
                <span>LANGUAGE AND TECHNOLOGY</span>
                <button className="btn-outline-lg page-scroll">VIEW DETAILS</button>
            </div>
        </div>
        <div className="single-event two">
            <h4>PRACTICE</h4>
            <img src="./system/image/img-11.jpeg" alt="img" />
            <div className="details">
                <span>EXERCISE</span>
                <button className="btn-outline-lg page-scroll">VIEW DETAILS</button>
            </div>
        </div>
        <div className="single-event three">
            <h4>CULTURAL</h4>
            <img src="./system/image/img-11.jpeg" alt="img" />
            <div className="details">
                <span>TRADITIONAL DANCE</span>
                <button className="btn-outline-lg page-scroll">VIEW DETAILS</button>
            </div>
        </div>
        </div>
    </section>

    <section className="school-events">
        <div className="buttons">
            <i><HiArrowLeft  className="b left"/></i>
            <HiArrowRight className="b right" />
        </div>
        <div className="single-event">
            <img src="./system/image/img-13.jpeg" alt="img" />
            <div className="details">
                <h2>Class Event</h2>
                <button className="btn-outline-lg page-scroll">VIEW VIDEO  <HiArrowRight className="icon"/> </button>
            </div>
        </div>
    </section>

    <section id="programes" className="programes">
        <h3 className="container h-3">PROGRAMS</h3>
        <div className="basic-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img className="img-fluid" src="./system/image/img-14.jpeg" alt="alternative"/>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-container">
                            <h2>NURSARY</h2>
                            <p>All child who do not above 3 years old. Lorem ipsum dolor 
                                sit amet consectetur adipisicing elit. Odit blanditiis nisi, 
                                nemo aliquam voluptate eius corrupti quibusdam dicta nobis.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nihil soluta quae iste dolorem, tempora, dignissimos eveniet.</p>
                            <a className="btn-solid-reg popup-with-move-anim" href="#register">REQUEST FOR REGISTER</a>
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div>
        <div className="basic-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="text-container">
                            <h2>PRIMARY</h2>
                            <p>All child who will above 3 years old. Lorem ipsum dolor 
                                sit amet consectetur adipisicing elit. Odit blanditiis nisi, 
                                nemo aliquam voluptate eius corrupti quibusdam dicta nobis.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nihil soluta quae iste dolorem, tempora, dignissimos eveniet.</p>
                            <a className="btn-solid-reg popup-with-move-anim" href="#register">REQUEST FOR REGISTER</a>
                        </div> 
                    </div> 
                    <div className="col-lg-6">
                        <img className="img-fluid" src="./system/image/img-15.jpeg" alt="alternative"/>
                    </div>
                </div> 
            </div> 
        </div>
    </section>

    <div id="register" className="form-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="text-container">
                        <h2>Register Using The Form</h2>
                        <p>It's easy to register for the Place in School,
                             just fill out the form and click 
                             submit. Then you will be registered 
                             for one of the best Primary School training 
                             courses in the industry</p>
                        <ul className="list-unstyled li-space-lg">
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body"><strong>Your information</strong> is required to complete the registration</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body"><strong>It's safe with us</strong> and will not be used for marketing</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body"><strong>You will receive</strong> a confirmation email in less than 24h</div>
                            </li>
                        </ul>
                    </div> 
                </div> 
                <div className="col-lg-6">

                
                    <div className="form-container">
                        <form id="registrationForm" data-toggle="validator" data-focus="false">
                            <div className="form-group">
                                <input type="text" className="form-control-input" id="rname" name="rname" required/>
                                <label className="label-control" form="rname">Complete name</label>
                                <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control-input" id="remail" name="remail" required/>
                                <label className="label-control" form="remail">Email address</label>
                                <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control-input" id="rphone" name="rphone" required/>
                                <label className="label-control" form="rphone">Phone number</label>
                                <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group checkbox">
                                <input type="checkbox" id="rterms" value="Agreed-to-Terms" name="rterms" required/>I've read and agree to La RACINE's <a href="/privacy">Privacy Policy</a> and <a href="/terms">Terms & Conditions</a>
                                <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="form-control-submit-button">REGISTER</button>
                            </div>
                            <div className="form-message">
                                <div id="rmsgSubmit" className="h3 text-center hidden"></div>
                            </div>
                            <p>Already have an Account? <a className="login-link" onClick={HandleLogin}>Login Here</a></p>
                        </form>
                    </div> 
                    
                </div>
            </div>
        </div>
    </div>

    <div className="slider-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <p className="p-small">FEATURED IN</p>

                    <div className="slider-container">
                        <div className="swiper-container image-slider-2">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                        <img className="img-fluid" src="images/customer-logo-1.png" alt="alternative"/>
                                </div>
                                <div className="swiper-slide">
                                        <img className="img-fluid" src="images/customer-logo-2.png" alt="alternative"/>
                                </div>
                                <div className="swiper-slide">
                                        <img className="img-fluid" src="images/customer-logo-3.png" alt="alternative" />
                                </div>
                                <div className="swiper-slide">
                                        <img className="img-fluid" src="images/customer-logo-4.png" alt="alternative" />
                                </div>
                                <div className="swiper-slide">
                                        <img className="img-fluid" src="images/customer-logo-5.png" alt="alternative" />
                                </div>
                                <div className="swiper-slide">
                                        <img className="img-fluid" src="images/customer-logo-6.png" alt="alternative" />
                                </div>
                            </div> 
                        </div> 
                    </div>

                </div> 
            </div> 
        </div>
    </div>

    <div id="instructor" className="basic-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img className="img-fluid" src="./system/image/img-12.jpeg" alt="alternative"/>
                </div> 
                <div className="col-lg-6">
                    <div className="text-container">
                        <h2>Trainers (Teachers)</h2>
                        <p>Hi everybody! we will be your main instructor durnig the School training courses. About the experience in Teaching are above 5 years. Register for the school and let's meet.</p>
                        <p>Teaching students all about the best Learning techniques is something we love to do as a full-time job</p>
                    </div> 
                </div> 
            </div> 
        </div>
    </div>

    <div id="description" className="basic-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>What Will You Learn In Our LA RACINE Primary School</h2>
                </div> 
            </div> 
            <div className="row">
                <div className="col-lg-6">
                    <ul className="list-unstyled li-space-lg first">
                        <li className="media">
                            <i className="bullet">1</i>
                            <div className="media-body">
                                <h4>Displine</h4>
                                <p>One of the keys of great Knowledge is having a Displine and this blings a success to our students.</p>
                            </div>
                        </li>
                        <li className="media">
                            <i className="bullet">2</i>
                            <div className="media-body">
                                <h4>Smartness</h4>
                                <p>Smartness to our students is best choise of ours</p>
                            </div>
                        </li>
                        <li className="media">
                            <i className="bullet">3</i>
                            <div className="media-body">
                                <h4>Wisdom</h4>
                                <p>Our students Have a Wisdom</p>
                            </div>
                        </li>
                    </ul>
                </div> 
                <div className="col-lg-6">
                    <ul className="list-unstyled li-space-lg second">
                        <li className="media">
                            <i className="bullet">4</i>
                            <div className="media-body">
                                <h4>Mathematics</h4>
                                <p>A good action plan comes out of understanding where your current position is and the calculations</p>
                            </div>
                        </li>
                        <li className="media">
                            <i className="bullet">5</i>
                            <div className="media-body">
                                <h4>Social Studies</h4>
                                <p>Know all about the environment and History</p>
                            </div>
                        </li>
                        <li className="media">
                            <i className="bullet">6</i>
                            <div className="media-body">
                                <h4>ICT</h4>
                                <p>Information Communication and Technology</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div className="basic-3">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="text-container">
                        <h2>Who Should Attend The School</h2>
                        <p>All child who do not above 3 years old. Lorem ipsum dolor 
                            sit amet consectetur adipisicing elit. Odit blanditiis nisi, 
                            nemo aliquam voluptate eius corrupti quibusdam dicta nobis.</p>
                        <a className="btn-solid-reg popup-with-move-anim" href="#details-lightbox">LIGHTBOX</a>
                    </div> 
                </div> 
                <div className="col-lg-6">
                    <img className="img-fluid" src="./system/image/img-15.jpeg" alt="alternative"/>
                </div>
            </div> 
        </div> 
    </div>

    <div id="details-lightbox" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="container">
            <div className="row">
                <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
                <div className="col-lg-8">
                    <div className="image-container">
                        <img className="img-fluid" src="./system/image/img-16.jpeg" alt="alternative" />
                    </div> 
                </div> 
                <div className="col-lg-4">
                    <h3>LA RACINE</h3>
                    <hr></hr>
                    <h5>For everybody</h5>
                    <p>Wisdom to everyone in The Wolrd, you deserve go School with all in One.</p>
                    <ul className="list-unstyled li-space-lg">
                        <li className="media">
                            <i className="fas fa-square"></i><div className="media-body">Link building framework</div>
                        </li>
                        <li className="media">
                            <i className="fas fa-square"></i><div className="media-body">Know your current position</div>
                        </li>
                        <li className="media">
                            <i className="fas fa-square"></i><div className="media-body">Partnering with blogs</div>
                        </li>
                        <li className="media">
                            <i className="fas fa-square"></i><div className="media-body">Naming your images</div>
                        </li>
                        <li className="media">
                            <i className="fas fa-square"></i><div className="media-body">Creating good sitemaps</div>
                        </li>
                        <li className="media">
                            <i className="fas fa-square"></i><div className="media-body">Writing for humans</div>
                        </li>
                    </ul>
                    <a className="btn-solid-reg mfp-close page-scroll" href="#register">SIGN UP</a> <a className="btn-outline-reg mfp-close as-button" href="#screenshots">BACK</a>
                </div> 
            </div>
        </div> 
    </div>

    <div className="basic-4">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>Course Video Presentation</h2>

                    {/* <!-- Video Preview --> */}
                    <div className="image-container">
                        <div className="video-wrapper">
                            <a className="popup-youtube" href="" data-effect="fadeIn">
                                <img className="img-fluid" src="./system/image/img-3.jpeg" alt="alternative"/>
                                <span className="video-play-button">
                                    <span></span>
                                </span>
                            </a>
                        </div> 
                    </div>

                </div>
            </div>
        </div>
    </div> 

    <div className="cards">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>Key Takeaways</h2>
                    <p className="p-heading">Key Figures we going to start to And Course about their Percentage.</p>
                </div> 
            </div> 
            <div className="row">
                <div className="col-lg-12">

                    {/* <!-- Card --> */}
                    <div className="card">
                        <div className="card-image">
                            <i className="fas fa-atom"></i>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Position Analysis</h4>
                            <p>Understand where your website is currently positioned.</p>
                        </div>
                    </div>
                    
                    <div className="card">
                        <div className="card-image">
                            <i className="fas fa-key"></i>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Keyword Planning</h4>
                            <p>Find the best relevant keywords that fit your website SEO strategy in the long run</p>
                        </div>
                    </div>
                    
                    <div className="card">
                        <div className="card-image">
                            <i className="fas fa-newspaper"></i>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Writing Articles</h4>
                            <p>How to plan your content strategy and write articles that are optimized for SEO</p>
                        </div>
                    </div>
                    
                    <div className="card">
                        <div className="card-image">
                            <i className="fas fa-link"></i>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Gathering Backlinks</h4>
                            <p>Backlinks are vital for SEO and we'll teach you everything there is to know about them</p>
                        </div>
                    </div>
                    
                    <div className="card">
                        <div className="card-image">
                            <i className="far fa-handshake"></i>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Build Partnerships</h4>
                            <p>Partnerships will help you establish your website or blog as an authority in your field</p>
                        </div>
                    </div>
                    
                    <div className="card">
                        <div className="card-image">
                            <i className="fas fa-chart-bar"></i>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Evaluate Actions</h4>
                            <p>Learn how to use the right analytics tools to evaluate your SEO actions and improve them</p>
                        </div>
                    </div>
                    
                </div> 
            </div>
        </div> 
    </div>

    <div className="slider-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h3>Check out our attendees testimonials from previous editions of the LA RACINE School</h3>

                    {/* <!-- Text Slider --> */}
                    <div className="slider-container">
                        <div className="swiper-container text-slider">
                            <div className="swiper-wrapper">
                                
                               
                                <div className="swiper-slide">
                                    <div className="image-wrapper">
                                        <img className="img-fluid" src="./system/image/img-10.jpeg" alt="alternative"/>
                                    </div> 
                                    <div className="text-wrapper">
                                        <div className="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quo voluptatibus voluptates </div>
                                        <div className="testimonial-author">Person</div>
                                    </div>
                                </div> 

                                <div className="swiper-slide">
                                    <div className="image-wrapper">
                                        <img className="img-fluid" src="./system/image/img-11.jpeg" alt="alternative"/>
                                    </div> 
                                    <div className="text-wrapper">
                                        <div className="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quo voluptatibus voluptates </div>
                                        <div className="testimonial-author">Person</div>
                                    </div> 
                                </div>

                                <div className="swiper-slide">
                                    <div className="image-wrapper">
                                        <img className="img-fluid" src="./system/image/img-12.jpeg" alt="alternative"/>
                                    </div>
                                    <div className="text-wrapper">
                                        <div className="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quo voluptatibus voluptates </div>
                                        <div className="testimonial-author">Person</div>
                                    </div> 
                                </div> 

                                <div className="swiper-slide">
                                    <div className="image-wrapper">
                                        <img className="img-fluid" src="./system/image/img-13.jpeg" alt="alternative"/>
                                    </div>
                                    <div className="text-wrapper">
                                        <div className="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quo voluptatibus voluptates </div>
                                        <div className="testimonial-author">Person</div>
                                    </div> 
                                </div>

                            </div> 

                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                        
                        </div> 
                    </div> 

                </div>
            </div>
        </div> 
    </div>

    <div id="date" className="basic-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text-container">
                        <h2>December 22nd 2020 at School Place</h2>
                        <p>As Every New Year We Take New Students And We Excell them. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, fugiat? Et neque obcaecati praesentium sed libero? Quas voluptate rem corrupti odio quo, magni, voluptatem assumenda officia, iusto itaque rerum? Vero.</p>
                        <a className="btn-solid-lg page-scroll" href="#register">REGISTER</a>
                    </div>
                </div> 
            </div> 
        </div> 
    </div> 

    <div className="form-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h3>Stay updated with news by subscribing to our newsletter and our social channels</h3>
                    
                    
                    <form id="newsletterForm" data-toggle="validator" data-focus="false">
                        <div className="form-group">
                            <input type="email" className="form-control-input" id="nemail" required/>
                            <label className="label-control" form="nemail">Email</label>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group checkbox">
                            <input type="checkbox" id="nterms" value="Agreed-to-Terms" required/>I've read and agree to LA RACINE's <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms-conditions.html">Terms Conditions</a> 
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="form-control-submit-button">SIGN UP</button>
                        </div>
                        <div className="form-message">
                            <div id="nmsgSubmit" className="h3 text-center hidden"></div>
                        </div>
                    </form>

                    <div className="icon-container">
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
                        <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-pinterest-p fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-instagram fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-linkedin-in fa-stack-1x"></i>
                            </a>
                        </span>
                    </div>

                </div>
            </div> 
        </div> 
    </div>

    <div id="contact" className="form-3">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="text-container">
                        <h2>Contact Details</h2>
                        <p>For registration questions please get in touch using the contact details below. For any questions use the form.</p>
                        <h3>Main Office Location</h3>
                        <ul className="list-unstyled li-space-lg">
                            <li className="media">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="media-body">Gisenyi, Rubavu, Rwanda, EA(East Africa)</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-mobile-alt"></i>
                                <div className="media-body">+250 732 515 801, &nbsp;&nbsp;<i className="fas fa-mobile-alt"></i>&nbsp; +250 </div>
                            </li>
                            <li className="media">
                                <i className="fas fa-envelope"></i>
                                <div className="media-body"><a className="light-gray" href="mailto:laracine@gmail.com">laracine@gmail.com</a> <i className="fas fa-globe"></i><a className="light-gray" href="www.laracine.com">www.laracine.com</a></div>
                            </li>
                        </ul>
                    </div> 
                </div> 
                <div className="col-lg-6">

                    <form id="contactForm" data-toggle="validator" data-focus="false">
                        <div className="form-group">
                            <input type="text" className="form-control-input" id="cname" required />
                            <label className="label-control" form="cname">Name</label>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control-input" id="cemail" required />
                            <label className="label-control" form="cemail">Email</label>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control-textarea" id="cmessage" required></textarea>
                            <label className="label-control" form="cmessage">Your message</label>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group checkbox">
                            <input type="checkbox" id="cterms" value="Agreed-to-Terms" required />I have read and agree to La RACINE's <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms-conditions.html">Terms Conditions</a> 
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="form-control-submit-button">SUBMIT</button>
                        </div>
                        <div className="form-message">
                            <div id="cmsgSubmit" className="h3 text-center hidden"></div>
                        </div>
                    </form>
                </div> 
            </div>
        </div> 
    </div> 
    </>
  )
}

export default Body