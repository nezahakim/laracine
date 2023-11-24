import { useEffect, useState } from "react";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { unique_id } from "../auth/session";
import axios from "axios";

function Homework() {
  const homework_id = window.localStorage.getItem("homework_id");

  if (!homework_id || homework_id.length === 0) {
    window.location.href = "/homeworks";
  }

  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/homework/${homework_id}`);
        setQuestions(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    // Fetch questions initially
    fetchQuestions();

    // Cleanup function to clear the interval when the component is unmounted
    // return () => clearInterval(intervalId);

  }, [homework_id]);

  const [Homework, setHomework] = useState(null); // Initialize as null or with default values
  useEffect(() => {
    const fetchHomework = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/homeworks/${homework_id}`);
        setHomework(res.data[0]);
      } catch (err) {
        console.error(err);
      }
    };
    fetchHomework();
  }, [homework_id]);

  const [inputs, setInputs] = useState({
    question: "",
    marks: "",
    homework_id: homework_id,
  });

  const [updateData, setUpdateData] = useState({
    question: "",
    marks: 0,
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setUpdateData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [error, setError] = useState(""); // Initialize as a string

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await axios.post("http://localhost:8000/question/add", inputs);

      const values = data.data;
      if (values.status) {
        console.log(values);
        setInputs({
          question: "",
          marks: "",
          homework_id: homework_id,
        });
        document.querySelector(".login-form")!.style.display = "none";
        setError("");
      } else {
        setError(values.errorMessage); // Adjust the property name based on your response
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    const Qid = window.localStorage.getItem("Question_id");
    try {
      const data = await axios.post(`http://localhost:8000/question/update/${Qid}`, updateData);

      const values = data.data;
      if (values.status) {
        setDisplay({
          condition: false,
        });
        document.querySelector(".login-form")!.style.display = "none";
        setError("");
      } else {
        setError(values.errorMessage); // Adjust the property name based on your response
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [display, setDisplay] = useState({
    condition: false,
  });

  const handleUpdate = async (e, index) => {
    window.localStorage.setItem("Question_number", index);
    try {
      const data = await axios.get(`http://localhost:8000/question/${e}`);
      const values = data.data;
      if (values.status) {
        setUpdateData({
          question: values.data[0].question,
          marks: values.data[0].marks,
        });
        console.log(values.data[0].question);
        setDisplay({
          condition: true,
        });
        window.localStorage.setItem("Question_id", e);
        document.querySelector(".login-form")!.style.display = "flex";
      } else {
        console.log(values);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleAdd = () => {
    setDisplay({
      condition: false,
    });
    document.querySelector(".login-form")!.style.display = "flex";
  };

  window.onclick = (e) => {
    if (e.target!.matches(".login-form") && !e.target!.matches(".main-form")) {
      document.querySelector(".login-form")!.style.display = "none";
    }
  };

  const handleDelete = async (e, index) => {
    window.localStorage.setItem("Delete_Question_Number", index);
    window.localStorage.setItem("DeleteQuestion_id", e);
    document.querySelector(".alert-delete")!.style.display = "flex";
  };

  const deleteQuestion = async () => {
    const Dquestion_id = window.localStorage.getItem("DeleteQuestion_id");
    try {
      const data = await axios.get(`http://localhost:8000/question/delete/${Dquestion_id}`);
      const values = data.data;
      if (values.status) {
        document.querySelector(".alert-delete")!.style.display = "none";
      } else {
        console.log(values);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const cancelDelete = () => {
    document.querySelector(".alert-delete")!.style.display = "none";
  };

  return (
    <>
      <div className="alert-delete">
        <div className="main">
          <h1>Delete</h1>
          <p>
            Are you sure you want to Delete{" "}
            <b> Question {localStorage.getItem("Delete_Question_Number")} </b>
          </p>
          <div className="buttons">
            <button onClick={deleteQuestion}>Yes</button>
            <button onClick={cancelDelete}>Cancel</button>
          </div>
        </div>
      </div>
      <div className="login-form">
        <form method="POST">
          <div className="login-details">
            <span>
              {display.condition == false
                ? "ADD QUESTION"
                : `UPDATE QUESTION ${localStorage.getItem("Question_number")}`}{" "}
            </span>
          </div>
          <div className="error">{error.length > 0 ? error : ""}</div>
          <div className="form">
            <label htmlFor="question">Question</label>
            <textarea
              onChange={handleChange}
              placeholder="Question"
              value={
                display.condition == false
                  ? inputs.question
                  : updateData.question
              }
              name="question"
              required
            ></textarea>
          </div>
          <div className="form">
            <label htmlFor="marks">Marks</label>
            <input
              onChange={handleChange}
              type="number"
              placeholder="Marks"
              name="marks"
              value={
                display.condition == false ? inputs.marks : updateData.marks
              }
              required
            />
          </div>
          <div className="form">
            {display.condition == false ? (
              <button type="submit" onClick={handleSubmit}>
                ADD NEW QUESTION
              </button>
            ) : (
              <button type="submit" onClick={handleUpdateSubmit}>
                UPDATE QUESTION
              </button>
            )}
          </div>
        </form>
      </div>
      {/* Header */}
      <header id="header" className="ex-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="white">{Homework ? Homework.course : ""}</h1>
              <div className="detail-s">
                <h3 className="class">{Homework ? Homework.class : ""}</h3>
                <span className="author">Prepared by {Homework ? Homework.names : ""}</span>
              </div>
            </div>{" "}
            {/* end of col */}
          </div>{" "}
          {/* end of row */}
        </div>{" "}
        {/* end of container */}
      </header>{" "}
      {/* end of ex-header */}
      {/* end of header */}
      {/* Breadcrumbs */}
      <div className="ex-basic-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumbs">
                <a href="/homeworks">Homeworks</a>
                <i className="fa fa-angle-double-right"></i>
                <span>{Homework ? Homework.course : ""}</span>
              </div>{" "}
              {/* end of breadcrumbs */}
            </div>{" "}
            {/* end of col */}
          </div>{" "}
          {/* end of row */}
        </div>{" "}
        {/* end of container */}
      </div>{" "}
      {/* end of ex-basic-1 */}
      {/* end of breadcrumbs */}
      <section className="Homework-Questions">
        <div className="container">
          <div className="head-part">
            <table border={2}>
              <tr>
                <td className="f">
                  <h3>REPUBLIC OF RWANDA</h3>
                  <img src="./system/logo.jpg" alt="" />
                  <h3>LA RACINE</h3>
                </td>
                <td>
                  <h3>CLASS HOMEWORK - TERM I REB</h3>
                  <h3>
                    COURSE: <span>{Homework ? Homework.course : ""}</span>
                  </h3>
                  <h3>
                    YEAR: <span>{Homework ? Homework.class : ""}</span>
                  </h3>
                </td>
                <td>
                  <h3>
                    DATE: <span>{Homework ? Homework.pre_date : ""}</span>
                  </h3>
                  <h3>
                    DURATION: <span>1 DAY</span>
                  </h3>
                  <h3>
                    MAX: <span>{Homework ? Homework.marks : ""}</span>
                  </h3>
                </td>
              </tr>
            </table>
            <div className="student-information">
              <h4>
                Names:
                ......................................................................................................
              </h4>
              <h4>Class: ..........</h4>
            </div>
            <div className="intructions">
              <h2>INSTRUCTIONS</h2>
              <ul>
                <li>This Homework contains {questions.length} Questions.</
