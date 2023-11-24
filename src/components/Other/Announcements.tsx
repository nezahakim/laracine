import {HiChevronRight, HiClock, HiOutlineChat, HiOutlineEye } from 'react-icons/hi'

function Announcements() {
  return (
    <>
    {/* Header */}
    <header id="header" className="ex-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="white">Announcements</h1>
                    </div> {/* end of col */}
                </div> {/* end of row */}
            </div> {/* end of container */}
        </header> {/* end of ex-header */}
        {/* end of header */}

    {/* Breadcrumbs */}
    <div className="ex-basic-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumbs">
                        <a href="/">Home</a><i className="fa fa-angle-double-right"></i><span>Announcements</span>
                    </div> {/* end of breadcrumbs */}
                </div> {/* end of col */}
            </div> {/* end of row */}
        </div> {/* end of container */}
    </div> {/* end of ex-basic-1 */}
    {/* end of breadcrumbs */}


    
    <div className="ex-basic-1">
        <div className="container">
           <div className="announcements">
            <div className="left-side">
                <div className="ann-head">
                    <h1>Marry Christimas</h1>
                    <span><HiClock clasName="icon"/> 18-12-2023</span>
                </div>
                <div className="ann-body">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Architecto, provident ea? Saepe ducimus ex provident beatae ut asperiores voluptatibus non quaerat deleniti rem consectetur, aspernatur architecto natus nostrum perspiciatis aliquid!
                </div>
                <div className="ann-actions">
                    <div className="top">
                        <div className="reactions">
                        <div className="views"><HiOutlineEye className="icon"/> 120&nbsp;<span>views</span></div>
                        <div className="views"><HiOutlineChat className="icon"/> 120&nbsp;<span>comments</span></div>
                        </div>
                        <div className="ann-author">
                            Announced&nbsp;By <span>Manzi&nbsp;Cedrick</span>
                        </div>
                    </div>
                    <div className="bottom">
                        <input type="text" placeholder='Write your Comment Here...' />
                        <button type='submit'><HiChevronRight/></button>
                    </div>
                </div>
                <div className="comments">
                        <h2>View All Comments <p className='comm-count'>20</p></h2>
                        <div className="list">
                            <div className="single-comment">
                                <div className="comment-head">
                                    <h3>Manzi</h3>
                                    <span>Tought English</span>
                                </div>
                                <p className='comment'>
                                imi incidunt voluptate, exercitationem possimus veritatis ipsam laudantium excepturi, ducimus quam ratione iste, perspiciatis unde nesciunt. Ipsa.
                                </p>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="right-side">
                <div className="ann-head">
                    <h2>NewsRoom</h2>
                    <span>Enjoy New Updates</span>
                </div>
                <div className="list">
                    <div className="single-announcement">
                        <h3>Marry Christimas</h3>
                        <p>He's Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span><HiClock/> 18-20-2023</span>
                    </div>
                    <div className="single-announcement">
                        <h3>Marry Christimas</h3>
                        <p>He's Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span><HiClock/> 18-20-2023</span>
                    </div>
                </div>
            </div>
           </div>
        </div> 
    </div> 



    {/* Breadcrumbs */}
    <div className="ex-basic-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumbs">
                        <a href="/">Home</a><i className="fa fa-angle-double-right"></i><span>Announcements</span>
                    </div> {/* end of breadcrumbs */}
                </div> {/* end of col */}
            </div> {/* end of row */}
        </div> {/* end of container */}
    </div> {/* end of ex-basic-1 */}
    {/* end of breadcrumbs */}
    </>
  )
}

export default Announcements