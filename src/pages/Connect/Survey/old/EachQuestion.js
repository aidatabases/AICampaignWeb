import React, { useState } from "react";
import {
  Button,
  Radio,
  Typography,
  FormControlLabel,
  TextField,
  AccordionDetails,
  AccordionActions,
  AccordionSummary,
  Accordion,
  IconButton,
  Divider
} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import "./EachQuestion.scss";
const EachQuestion = ({ question, i, questions, setQuestions }) => {
  const changeOptions = (e) => {
    let q = [...questions];
    q[i].type = e.target.value;
    if (e.target.value === "text") q[i].options = [q[i].options[0]];
    setQuestions(q);
  };
  const addOptions = (i) => {
    let q = [...questions];
    q[i].options.push({ optionText: `Option ${q[i].options.length + 1}` });
    // setQuestions([...questions, questions[i].options.push({optionText: `Option ${i+1}`})])
    setQuestions(q);
  };
  //   const deleteOptions = (i) => {
  //     let q = [...questions];
  //     q[i].options.splice(q[i].options.length - 1, 1);
  //     setQuestions(q);
  //   };

  const deleteOptions = (i, j) => {
    let q = [...questions];
    q[i].options.splice(j, 1);
    setQuestions(q);
  };

  const deleteQuestion = () => {
    let q = [...questions];
    q.splice(i, 1);
    setQuestions(q);
  };

  const handleQuestionValue = (text, i) => {
    let q = [...questions];
    q[i].questionText = text;
    setQuestions(q);
  };

  const handleOptionValue = (text, i, j) => {
    let q = [...questions];
    q[i].options[j].optionText = text;
    //newMembersEmail[i]= email;
    setQuestions(q);
  };

  function handleExpand(i) {
    let qs = [...questions];
    for (let j = 0; j < qs.length; j++) {
      if (i === j) {
        qs[i].open = true;
      } else {
        qs[j].open = false;
      }
    }
    setQuestions(qs);
  }

  return (
    <div className="question-card">
      <Accordion
        onChange={() => {
          handleExpand(i);
        }}
        expanded={question.open}
      >
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          elevation={1}
          style={{ width: "100%" }}
        >
          {!question.open ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginLeft: "3px",
                paddingTop: "15px",
                paddingBottom: "15px",
              }}
            >

              <Typography variant="subtitle1" style={{ marginLeft: "0px" }}>
                {i + 1}. {question.questionText}
              </Typography>
              {question.options.map((op, j) => (
                <div key={j}>
                  <div style={{ display: "flex" }}>
                    <FormControlLabel
                      disabled
                      control={<Radio style={{ marginRight: "3px" }} />}
                      label={
                        <Typography style={{ color: "#555555" }}>
                          {question.options[j].optionText}
                        </Typography>
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </AccordionSummary>

        <AccordionDetails>
        <div className="question-card">
        <div className="question-container">
          <div style={{ display: "flex", alignItems: "center", width: "80%" }}>
            <Typography>{i + 1}.</Typography>
            <TextField
              fullWidth={true}
              placeholder="Question Text"
              style={{ marginLeft: "10px" }}
              rows={2}
              rowsMax={20}
              multiline={true}
              value={question.questionText}
              variant="filled"
              onChange={(e) => {
                handleQuestionValue(e.target.value, i);
              }}
            />
          </div>
          <select
            value={question.type}
            onChange={changeOptions}
            className="question-type"
          >
            <option value="text">Text</option>
            <option value="radio">Radio</option>
            <option value="checkbox">CheckBox</option>
          </select>
        </div>
        <div className="question-options">
          {question.options.map((option, j) => (
            <div className="option-container" style={{ display: "flex" }}>
              {question.type !== "text" ? (
                <input type={question.type} disabled />
              ) : null}
              <TextField
                fullWidth={true}
                disabled={question.type === "text"}
                placeholder="Option text"
                style={{ marginLeft: "20px" }}
                value={option.optionText}
                onChange={(e) => {
                  handleOptionValue(e.target.value, i, j);
                }}
              />
              {question.type !== "text" ? (
                <DeleteOutlineIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteOptions(i, j)}
                />
              ) : null}
            </div>
          ))}
        </div>

        <div className="options-select">
          {question.type !== "text" ? (
            <>
              <div style={{ display: "flex" }}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => addOptions(i)}
                >
                  <AddCircleOutlineIcon />
                </Button>
              </div>
            </>
          ) : null}
          </div>
          </div>
          </AccordionDetails>
          <Divider />

          <AccordionActions>
            {/* <IconButton
              aria-label="View"
              onClick={() => {
                showAsQuestion(i);
              }}
            >
              <VisibilityIcon />
            </IconButton> */}

            {/* <IconButton
              aria-label="Copy"
              onClick={() => {
                copyQuestion(i);
              }}
            >
              <FilterNoneIcon />
            </IconButton> */}
            {/* <Divider orientation="vertical" flexItem /> */}

            <IconButton
              aria-label="delete"
              onClick={() => {
                deleteQuestion();
              }}
            >
              <DeleteOutlineIcon />
            </IconButton>
            {/* 
          <IconButton aria-label="Image">
            <MoreVertIcon />
          </IconButton> */}
          </AccordionActions>
          </Accordion>
          {/* <div>
          <Button variant="contained" color="primary" onClick={deleteQuestion}>
            <DeleteOutlineIcon />
          </Button>
        </div> */}
        {/* </div> */}
      </div>
    // </div>
  );
};

export default EachQuestion;
