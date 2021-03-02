import React from "react";
//import QuestionHeader from './QuestionHeader';
import { Grid } from "@material-ui/core";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import { Paper, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ImageUplaodModel from "./ImageUplaodModel";
// import formService from '../../services/formService';
import CircularProgress from "@material-ui/core/CircularProgress";
import SaveIcon from "@material-ui/icons/Save";
import QuestionsUI from './QuestionsUI'

function QuestionsTab(props) {
  const [questions, setQuestions] = React.useState([]);
  const [formData, setFormData] = React.useState({});
  const [openUploadImagePop, setOpenUploadImagePop] = React.useState(false);
  const [imageContextData, setImageContextData] = React.useState({
    question: null,
    option: null,
  });
  React.useEffect(() => {
    if (props.formData.questions !== undefined) {
      //console.log(props.formData.questions.length);
      if (props.formData.questions.length === 0) {
        setQuestions([
          {
            questionText: "Question",
            options: [{ optionText: "Option 1" }],
            open: false,
          },
        ]);
      } else {
        setQuestions(props.formData.questions);
      }
      setLoadingFormData(false);
    }
    setFormData(props.formData);
  }, [props.formData]);
  const [loadingFormData, setLoadingFormData] = React.useState(true);

  function saveQuestions() {
    console.log("auto saving questions initiated");
    var data = {
      formId: formData._id,
      name: formData.name,
      description: formData.description,
      questions: questions,
    };
    //Temporary commenting
    // formService.autoSave(data)
    // .then((result) => {
    //      console.log(result);
    //      setQuestions(result.questions)
    //     },
    //     error => {
    //     const resMessage =
    //         (error.response &&
    //         error.response.data &&
    //         error.response.data.message) ||
    //         error.message ||
    //         error.toString();
    //         console.log(resMessage);
    //     }
    // );
  }

  function updateImageLink(link, context) {
    var optionsOfQuestion = [...questions];
    var i = context.question;

    if (context.option == null) {
      optionsOfQuestion[i].questionImage = link;
    } else {
      var j = context.option;
      optionsOfQuestion[i].options[j].optionImage = link;
    }
    setQuestions(optionsOfQuestion);
  }  

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }
    var itemgg = [...questions];

    const itemF = reorder(
      itemgg,
      result.source.index,
      result.destination.index
    );

    setQuestions(itemF);
  }

  function addMoreQuestionField() {
    expandCloseAll(); //I AM GOD

    setQuestions((questions) => [
      ...questions,
      {
        questionText: "Question",
        options: [{ optionText: "Option 1" }],
        open: true,
      },
    ]);
  }
  function expandCloseAll() {
    let qs = [...questions];
    for (let j = 0; j < qs.length; j++) {
      qs[j].open = false;
    }
    setQuestions(qs);
  }
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  return (
    <div
      style={{ marginTop: "15px", marginBottom: "7px", paddingBottom: "30px" }}
    >
      <Grid container direction="column" justify="center" alignItems="center">
        {loadingFormData ? <CircularProgress /> : ""}

        <Grid item xs={12} sm={5} style={{ width: "100%" }}>
          <Grid style={{ borderTop: "10px solid teal", borderRadius: 10 }}>
            <div>
              <div>
                <Paper elevation={2} style={{ width: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      marginLeft: "15px",
                      paddingTop: "20px",
                      paddingBottom: "20px",
                    }}
                  >
                    <Typography
                      variant="h4"
                      style={{
                        fontFamily: "sans-serif Roboto",
                        marginBottom: "15px",
                      }}
                    >
                      {formData.name}
                    </Typography>
                    <Typography variant="subtitle1">
                      {formData.description}
                    </Typography>
                  </div>
                </Paper>
              </div>
            </div>
          </Grid>

          <Grid style={{ paddingTop: "10px" }}>
            <div>
              <ImageUplaodModel
                handleImagePopOpen={openUploadImagePop}
                handleImagePopClose={() => {
                  setOpenUploadImagePop(false);
                }}
                updateImageLink={updateImageLink}
                contextData={imageContextData}
              />

              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided, snapshot) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      <QuestionsUI formData={formData} questions={questions} setQuestions={setQuestions} expandCloseAll={expandCloseAll} setOpenUploadImagePop={setOpenUploadImagePop} setImageContextData={setImageContextData} updateImageLink={updateImageLink}/>

                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
              <div>
                <Button
                  variant="contained"
                  onClick={addMoreQuestionField}
                  endIcon={<AddCircleIcon />}
                  style={{ margin: "5px" }}
                >
                  Add Question
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={saveQuestions}
                  style={{ margin: "15px" }}
                  endIcon={<SaveIcon />}
                >
                  Save Questions
                </Button>
              </div>
              <div>Questions: {JSON.stringify(questions)}</div>
              <div>FormData: {JSON.stringify(formData)}</div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default QuestionsTab;
