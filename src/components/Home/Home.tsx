import Body from "./Body"

const Home = () => {
  return (
  <>
    <header id="header" className="header">
        <div className="container h-container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text-container">
                        <div className="countdown">
                            <span className="inn">-- DISPLINE - INTELLIGENCE - INOVATIONS --</span>
                        </div>
                        <h1>LA RACINE</h1>
                        <p className="p-large">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            quos porro possimus quidem harum debitis molestiae expedita! Nam explicabo ipsum exercitationem molestiae.
                        </p>
                        <a className="btn-solid-lg page-scroll" href="#register">REGISTER</a>
                        <a className="btn-outline-lg page-scroll" href="#instructor">DISCOVER</a>
                    </div>
                </div> 
            </div>
         </div> 
    </header> 
    <Body/>
    </>
  )
}

export default Home 