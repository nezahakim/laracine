import axios from "axios";
import session, { unique_id } from "../auth/session"
import BackEndLink from "../auth/BackEnd";
import { useState } from "react";

function Account() {
    if(unique_id == '' && unique_id.length == 0){
        console.log(unique_id)
        window.location.href = "/home"
    }else if(unique_id == null && session.length == 0){
        console.log(unique_id)
        window.location.href = "/home"
    }

    console.log(unique_id)
    const HandleLogout = () =>{
        if(unique_id != '' && unique_id!.length > 0){
            session.setItem('userId','');
            console.log(unique_id)
            window.location.href = "/home"
        }
    }
    
    const [AccountData, setAccountData] = useState([])
    try{
        const Fetch = async () =>{
            const data = await axios.get(BackEndLink + "/account/" + unique_id)
            var values = data.data
            if(values.status){
                setAccountData(values.data)
                window.localStorage.setItem("AccountData",values.data)
            }else{
                console.log(values)
            }
        }
        Fetch();
    }catch(error){
        console.log(error)
    }


    return (
        <>
        {/* Header */}
        <header id="header" className="ex-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="white">Account</h1>
                        <button className="logout-css" onClick={HandleLogout}>Logout</button>
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
                            <a href="/">Home</a><i className="fa fa-angle-double-right"></i><span>Account</span>
                        </div> {/* end of breadcrumbs */}
                    </div> {/* end of col */}
                </div> {/* end of row */}
            </div> {/* end of container */}
        </div> {/* end of ex-basic-1 */}
        {/* end of breadcrumbs */}
    
        {/* Terms Content */}
    <div className="ex-basic-2">
        <div className="container">
            <div className="account">
                <div className="left">
                    <img src="./system/person.png" alt="" />
                    <div className="details">
                        <h1>{AccountData.names}</h1>
                        <button>Change Information</button>
                    </div>
                </div>
                <div className="right">
                    <div className="profile">
                        <h3>PROFILE</h3>
                        <div className="data">
                        <div className="form">
                            <label htmlFor="names">Names</label>
                            <input type="text" value={AccountData.names} />
                        </div>
                        <div className="form">
                            <label htmlFor="names">Gender</label>
                            <input type="text" value={AccountData.gender} />
                        </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="profile">
                        <h3>CONTACTS</h3>
                        <div className="data">
                        <div className="form">
                            <label htmlFor="names">Email</label>
                            <input type="text" value={AccountData.email} />
                        </div>
                        <div className="form">
                            <label htmlFor="names">Phone Number</label>
                            <input type="text" value={AccountData.phone} />
                        </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="profile">
                        <h3>SUBJECT TAUGHT</h3>
                        <div className="data">
                        <div className="form">
                            <label htmlFor="names">Subject Taught</label>
                            <input type="text" value={AccountData.subject_taught} />
                        </div>
                        </div>
                    </div>
                </div>
            </div> {/* end of row */}
        </div> {/* end of container */}
    </div> {/* end of ex-basic */}
    {/* end of terms content */}
    
        {/* Breadcrumbs */}
        <div className="ex-basic-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumbs">
                            <a href="/">Home</a><i className="fa fa-angle-double-right"></i><span>Account</span>
                        </div> {/* end of breadcrumbs */}
                    </div> {/* end of col */}
                </div> {/* end of row */}
            </div> {/* end of container */}
        </div> {/* end of ex-basic-1 */}
        {/* end of breadcrumbs */}
        </>
      )
}

export default Account