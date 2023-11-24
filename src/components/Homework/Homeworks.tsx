import {
  HiOutlinePlusCircle,
  HiOutlineEye,
  HiChevronDoubleRight,
  HiChevronDown,
} from "react-icons/hi";
import { useEffect, useState } from "react";
import axios from "axios";
import session, { unique_id } from "../auth/session";

function Homeworks() {
  const [user, setUser] = useState(false);
  const [homework, setHomework] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:8000/homeworks');
        setHomework(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    const intervalId = setInterval(fetchData, 300);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const userId = session.getItem('userId');
    if (userId && userId.length > 0) {
      // var unique_id = session.getItem('userId');
      setUser(true);
    }
    console.log(userId);
  }, []);


  


  const [inputs, setInputs] = useState({
    course: "",
    class: "",
    marks: "",
    sub_date: "",
    unique_id: unique_id,
  });
  
  const [updateData, setUpdateData] = useState({
    course: "",
    class: "",
    marks: "",
    sub_date: "",
  });
  
  const HandleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
  
    setInputs((prevInputs: any) => ({ ...prevInputs, [name]: value }));
    setUpdateData((prevUpdateData: any) => ({ ...prevUpdateData, [name]: value }));
  };
  

  const [error, setError] = useState([]);
  const HandleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const a = async () => {
        const data = await axios.post(
          "http://localhost:8000/homework/add",
          inputs
        );
        setInputs({
          course: "",
          class: "",
          marks: "",
          sub_date: "",
          unique_id: unique_id,
        });

        var values = data.data;
        if (values.status) {
          var id = values.id;
          window.localStorage.setItem("homework_id", id);
          // console.log(values);
          window.location.href = "/homework";
        } else {
          setError(values);
        }
      };
      a();
    } catch (err) {
      console.log(err);
    }
  };

  const [datas, setData] = useState({
    class: "",
  });
  if (datas.class.length > 0) {
  } else {
    datas.class = "All (P1 - 6)";
  }

  const HandleClick = () => {
    document.getElementById("ul")!.style.display = "block";
  };

  
  const HandleWork = (e: string) => {
    window.localStorage.setItem("homework_id", e);
    console.log(e);
    location.href = "/homework";
  };

  const HandleAdd = () => {
    setDisplay({
      condition: false,
    });
    const loginForm = document.querySelector(".login-form") as HTMLElement | null;
    if (loginForm) {
      loginForm.style.display = "flex";
    }
  };
  window.onclick = (e: MouseEvent) => {
    const loginForm = document.querySelector(".login-form") as HTMLElement | null;
    const ulElement = document.getElementById("ul") as HTMLElement | null;
  
    if (loginForm && e.target instanceof Element) {
      if (e.target.matches(".login-form") && !e.target.matches(".main-form")) {
        loginForm.style.display = "none";
      }
    }
  
    if (ulElement && e.target instanceof Element && e.target.matches(".p")) {
      ulElement.style.display = "none";
    }
  };
  

  const HandleUpdateSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    var Qid = window.localStorage.getItem("Homework_Update_id");
    try {
      const a = async () => {
        const data = await axios.post(
          "http://localhost:8000/homework/update/" + Qid,
          inputs
        );
        var values = data.data;
        console.log(values);
        if (values.status) {
          setDisplay({
            condition: false,
          });
          const loginForm = document.querySelector(".login-form") as HTMLElement | null;
          if (loginForm) {
            loginForm.style.display = "none";
          }
          setError("");
        } else {
          console.log(values);
          setError(values);
        }
      };
      a();
    } catch (error) {
      console.log(error);
    }
  };

  const [display, setDisplay] = useState({
    condition: false,
  });

  const HandleUpdate = (e: string) => {
    console.log(e);
    try {
      const a = async () => {
        const data = await axios.get("http://localhost:8000/homeworks_id/" + e);
        var values = data.data;
        if (values.status) {
          setUpdateData({
            course: values.data[0].course,
            class: values.data[0].class,
            marks: values.data[0].marks,
            sub_date: values.data[0].sub_date,
          });
          setDisplay({
            condition: true,
          });
          window.localStorage.setItem("Homework_Update_id", e);
          const loginForm = document.querySelector(".login-form") as HTMLElement | null;
          if (loginForm) {
            loginForm.style.display = "flex";
          }
        } else {
          console.log(values);
        }
      };
      a();
    } catch (error) {
      console.log(error);
    }
  };

  const HandleDelete = (e: string) => {
    window.localStorage.setItem("DeleteHomework_id", e);
    const alertDelete = document.querySelector(".alert-delete") as HTMLElement | null;
  
    if (alertDelete) {
      alertDelete.style.display = "flex";
    }
  };
  

  const DeleteQuestion = () => {
    const Dquestion_id = window.localStorage.getItem("DeleteHomework_id");
  
    try {
      const a = async () => {
        const response = await axios.get(
          `http://localhost:8000/homework/delete/${Dquestion_id}`
        );
  
        const values = response.data;
  
        if (values.status) {
          const alertDelete = document.querySelector(".alert-delete") as HTMLElement | null;
  
          if (alertDelete) {
            alertDelete.style.display = "none";
          }
        } else {
          console.log(values);
        }
      };
  
      a();
    } catch (error) {
      console.error(error);
    }
  };
  

  const CancelDelete = () => {
    const alertDelete = document.querySelector(".alert-delete") as HTMLElement | null;
  
    if (alertDelete) {
      alertDelete.style.display = "none";
    }
  };
  

  return (
    <>
      <div className="alert-delete">
        <div className="main">
          <h1>Delete</h1>
          <p>
            Are you sure you want to Delete <b> Homework </b>
          </p>
          <div className="buttons">
            <button onClick={DeleteQuestion}>Yes</button>
            <button onClick={CancelDelete}>Cancel</button>
          </div>
        </div>
      </div>
      <div className="login-form">
        <form method="POST">
          <div className="login-details">
            <span>
              {display.condition == false ? "NEW HOMEWORK" : "UPDATE HOMEWORK"}
            </span>
          </div>
          <div className="error">{error.length > 0 ? error : ""}</div>
          <div className="form">
            <label htmlFor="course">Course</label>
            <input
              onChange={HandleChange}
              type="text"
              placeholder="Course"
              name="course"
              value={
                display.condition == false ? inputs.course : updateData.course
              }
            />
          </div>
          <div className="form">
            <label htmlFor="class">Class</label>
            <input
              type="text"
              placeholder="Class"
              onChange={HandleChange}
              value={
                display.condition == false ? inputs.class : updateData.class
              }
              name="class"
            />
          </div>
          <div className="form">
            <label htmlFor="marks">Total Marks</label>
            <input
              onChange={HandleChange}
              type="number"
              placeholder="Total Marks"
              name="marks"
              value={
                display.condition == false ? inputs.marks : updateData.marks
              }
            />
          </div>
          <div className="form">
            <label htmlFor="sub_date">Submit Date</label>
            <input
              onChange={HandleChange}
              type="date"
              name="sub_date"
              value={
                display.condition == false
                  ? inputs.sub_date
                  : updateData.sub_date
              }
            />
          </div>
          <div className="form">
            {display.condition == false ? (
              <button type="submit" onClick={HandleSubmit}>
                ADD NEW HOMEWORK
              </button>
            ) : (
              <button type="submit" onClick={HandleUpdateSubmit}>
                UPDATE HOMEWORK
              </button>
            )}
          </div>
        </form>
      </div>

      {/* <!-- Header --> */}
      <header id="header" className="ex-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="white">Homeworks</h1>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- end of header --> */}

      {/* <!-- Breadcrumbs --> */}
      <div className="ex-basic-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumbs">
                <a href="index.html">Home</a>
                <i className="fa fa-angle-double-right"></i>
                <span>Homeworks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end of breadcrumbs --> */}

      {/* <!-- Privacy Content --> */}
      <div className="ex-basic-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="homeworks">
                <div className="options">
                  <a>
                    Show <HiChevronDoubleRight className="direct-show" />{" "}
                  </a>
                  <li onClick={HandleClick}>
                    <i>
                      <span id="s-to-change"> {datas.class} </span>
                      <HiChevronDown className="drop-down" />
                    </i>
                    <ul id="ul">
                      <li
                        className="p p1"
                        onClick={() => setData({ class: "All (P1 - 6)" })}
                      >
                        All (P1 - 6)
                      </li>
                      <li
                        className="p p1"
                        onClick={() => setData({ class: "Primary 1" })}
                      >
                        Primary 1
                      </li>
                      <li
                        className="p p2"
                        onClick={() => setData({ class: "Primary 2" })}
                      >
                        Primary 2
                      </li>
                      <li
                        className="p p3"
                        onClick={() => setData({ class: "Primary 3" })}
                      >
                        Primary 3
                      </li>
                      <li
                        className="p p4"
                        onClick={() => setData({ class: "Primary 4" })}
                      >
                        Primary 4
                      </li>
                      <li
                        className="p p5"
                        onClick={() => setData({ class: "Primary 5" })}
                      >
                        Primary 5
                      </li>
                      <li
                        className="p p6"
                        onClick={() => setData({ class: "Primary 6" })}
                      >
                        Primary 6
                      </li>
                    </ul>
                  </li>
                  {user ? (
                    <div className="new-question-tag" onClick={HandleAdd}>
                      <HiOutlinePlusCircle />
                      &nbsp;New
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="list">
                  {homework.map((data) => (
                    <div
                      className="single-homework"
                      style={{
                        display:
                          (datas.class == "All (P1 - 6)"
                            ? data.class
                            : datas.class) == data.class
                            ? "flex"
                            : "none",
                      }}
                    >
                      <div className="h-head">
                        <div className="course-details">
                          <h4>{data.course}</h4>
                          <span>{data.class}</span>
                        </div>
                        <div className="pre_date">{data.pre_date}</div>
                      </div>
                      <div className="information">
                        This Homework must be Submited{" "}
                        <span>on:&nbsp;{data.sub_data}</span> and All
                        Instructions must be obeyed. Wish you all the best.
                      </div>
                      <div className="actions">
                        {data.author == unique_id ? (
                          <div className="modifys">
                            <button
                              className="upd"
                              onClick={() => HandleUpdate(data.Hid)}
                            >
                              upd
                            </button>
                            <button
                              className="del"
                              onClick={() => HandleDelete(data.Hid)}
                            >
                              del
                            </button>
                          </div>
                        ) : (
                          ""
                        )}
                        <button
                          className="Join-button"
                          onClick={() => HandleWork(data.Hid)}
                        >
                          Join Homework
                        </button>
                      </div>
                      <div className="details">
                        <i>
                          <HiOutlineEye className="eye-icon" />
                          &nbsp;10 Joins
                        </i>
                        <a href="/teacher">
                          By<span> {data.names}</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end of privacy content --> */}

      {/* <!-- Breadcrumbs --> */}
      <div className="ex-basic-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumbs">
                <a href="index.html">Home</a>
                <i className="fa fa-angle-double-right"></i>
                <span>Homeworks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end of breadcrumbs --> */}
    </>
  );
}

export default Homeworks;
