import { useEffect, useState } from "react";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { unique_id } from "../auth/session";
import axios from "axios";

function Homework() {
  const homework_id = window.localStorage.getItem("homework_id");

  if (homework_id?.length == 0 || typeof homework_id == null) {
    window.location.href = "/homeworks";
  }
  // if(!unique_id?.length > 0 || typeof(unique_id) == null){
  //     window.location.href = "/homeworks";
  // }

  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const Fetch = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/homework/" + homework_id
        );
        setQuestions(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    setInterval(() => {
      Fetch();
    }, 300);
  }, []);

  const [Homework, setHomework] = useState([]);
  useEffect(() => {
    const Fetch = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/homeworks/" + homework_id
        );
        setHomework(res.data[0]);
        // console.log(res.data[0])
      } catch (err) {
        console.log(err);
      }
    };
    Fetch();
  }, []);

  const [inputs, setInputs] = useState({
    question: "",
    marks: "",
    homework_id: homework_id,
  });

  const [updateData, setUpdateData] = useState({
    question: "",
    marks: 0,
  });

  const HandleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
    setUpdateData((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };
  const [error, setError] = useState([]);

  const HandleSubmit = (e) => {
    e.preventDefault();

    try {
      const a = async () => {
        const data = await axios.post(
          "http://localhost:8000/question/add",
          inputs
        );

        var values = data.data;
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
          setError(values);
        }
      };
      a();
    } catch (err) {
      console.log(err);
    }
  };

  const HandleUpdateSubmit = (e) => {
    e.preventDefault();

    var Qid = window.localStorage.getItem("Question_id");
    try {
      const a = async () => {
        const data = await axios.post(
          "http://localhost:8000/question/update/" + Qid,
          inputs
        );
        var values = data.data;
        if (values.status) {
          setDisplay({
            condition: false,
          });
          document.querySelector(".login-form")!.style.display = "none";
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
  const HandleUpdate = (e, index) => {
    window.localStorage.setItem("Question_number", index);
    try {
      const a = async () => {
        const data = await axios.get("http://localhost:8000/question/" + e);
        var values = data.data;
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
      };
      a();
    } catch (error) {
      console.log(error);
    }
  };

  const HandleAdd = () => {
    setDisplay({
      condition: false,
    });
    document.querySelector(".login-form")!.style.display = "flex";
  };
  window.onclick = (e) => {
    if (e.target!.matches(".login-form")) {
      if (!e.target!.matches(".main-form")) {
        document.querySelector(".login-form")!.style.display = "none";
      }
    }
  };

  const HandleDelete = (e, index) => {
    window.localStorage.setItem("Delete_Question_Number", index);
    window.localStorage.setItem("DeleteQuestion_id", e);
    document.querySelector(".alert-delete")!.style.display = "flex";
  };

  const DeleteQuestion = () => {
    var Dquestion_id = window.localStorage.getItem("DeleteQuestion_id");
    try {
      const a = async () => {
        const data = await axios.get(
          "http://localhost:8000/question/delete/" + Dquestion_id
        );
        var values = data.data;
        if (values.status) {
          document.querySelector(".alert-delete")!.style.display = "none";
        } else {
          console.log(values);
        }
      };
      a();
    } catch (error) {
      console.log(error);
    }
  };

  const CancelDelete = () => {
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
            <button onClick={DeleteQuestion}>Yes</button>
            <button onClick={CancelDelete}>Cancel</button>
          </div>
        </div>
      </div>
      <div className="login-form">
        <form method="POST">
          <div className="login-details">
            <span>
              {display.condition == false
                ? "ADD QUESTION"
                : "UPDATE QUESTION " +
                  localStorage.getItem("Question_number")}{" "}
            </span>
          </div>
          <div className="error">{error.length > 0 ? error : ""}</div>
          <div className="form">
            <label htmlFor="question">Question</label>

            <textarea
              onChange={HandleChange}
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
              onChange={HandleChange}
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
              <button type="submit" onClick={HandleSubmit}>
                ADD NEW QUESTION
              </button>
            ) : (
              <button type="submit" onClick={HandleUpdateSubmit}>
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
              <h1 className="white">{Homework.course}</h1>
              <div className="detail-s">
                <h3 className="class">{Homework.class}</h3>
                <span className="author">Prepared by {Homework.names}</span>
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
                <span>{Homework.course}</span>
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
                    COURSE: <span>{Homework.course}</span>
                  </h3>
                  <h3>
                    YEAR: <span>{Homework.class}</span>
                  </h3>
                </td>
                <td>
                  <h3>
                    DATE: <span>{Homework.pre_date}</span>
                  </h3>
                  <h3>
                    DURATION: <span>1 DAY</span>
                  </h3>
                  <h3>
                    MAX: <span>{Homework.marks}</span>
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
                <li>This Homework contains {questions.length} Questions.</li>
                <li>
                  Make sure you rewrite well and fill your names and class as
                  how it specified
                </li>
                <li>Answer all the Questions ({Homework.marks} Marks)</li>
              </ul>
            </div>
            <div className="dates">
              <span>Date: {Homework?.pre_date}</span>
              <span>SubmitDate: {Homework.sub_data}</span>
            </div>
            <div className="intro">
              <span>All</span>
              <p>
                Questions: {questions.length} // {Homework.marks} Marks
              </p>
            </div>
          </div>
          <div className="body-questions">
            {questions.map((question, index) => (
              <div className="single-question">
                <div className="head">
                  <h4>Question: {index + 1}</h4>{" "}
                  <span>{question.marks} Mark</span>{" "}
                </div>
                <p>{question.question}</p>
                {Homework.author == unique_id ? (
                  <div className="modify">
                    <button
                      className="upd"
                      onClick={() => HandleUpdate(question.id, index + 1)}
                    >
                      Upd
                    </button>
                    <button
                      className="del"
                      onClick={() => HandleDelete(question.id, index + 1)}
                    >
                      Remove Question
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
          {Homework.author == unique_id ? (
            <div className="Add-new-question">
              <div className="new-question-tag" onClick={HandleAdd}>
                <HiOutlinePlusCircle />
                &nbsp;New Question
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
      {/* Breadcrumbs */}
      <div className="ex-basic-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumbs">
                <a href="/homeworks">Homeworks</a>
                <i className="fa fa-angle-double-right"></i>
                <span>{Homework.course}</span>
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
    </>
  );
}

export default Homework;
