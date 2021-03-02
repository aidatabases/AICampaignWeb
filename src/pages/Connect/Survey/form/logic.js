import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const [allQ, setAllQ] = useState([
  {
    questionText: "Question",
    options: [{ optionText: "Option 1" }],
    open: false,
    type: "text",
    id: null,
  }
]);

const [newQ, setNewQ] = useState({
  quetionText: "Question",
  options: [{ optionText: "Option" }],
  open: false,
  type: "text",
  id: null,
});

const commonLogic = async() => {
    if (newQ !== null) {
        if (newQ.id === null) {
          let saveQ = await axios.post(
            "http://localhost:5000/create/question",
            newQ
          );
          //Update the id in allQ corresponding to this
          console.log(saveQ);
        } else {
          let updateQ = await axios.put(
            `http://localhost:5000/create/question/${newQ.id}`,
            newQ
          );
        }
    }
}

function closeAll() {
  let qs = [...allQ];
  for (let j = 0; j < qs.length; j++) {
    qs[j].open = false;
  }
  setAllQ(qs);
}

// const onCloseAll = async() => {
//   commonLogic()
//   closeAll()
// }

const onHandleEdit = async(i) => {
  commonLogic()
  let qs = [...allQ];
  for (let j = 0; j < qs.length; j++) {
    qs[j].open = false;
  }
  qs[i].open = true;
  setNewQ(qs[i]);
  setAllQ(qs);
}

const onAddQuestion = async () => {
  commonLogic();
  closeAll()
  setNewQ({
    quetionText: "Question",
    options: [{ optionText: "Option" }],
    open: true,
    type: "text",
    id: null,
  });
  setAllQ([
    ...allQ,
    {
      quetionText: "Question",
      options: [{ optionText: "Option" }],
      open: true,
      type: "text",
      id: null,
    }
  ]);
};

const {form_id} = useParams()
const onSaveForm = async () => {
  commonLogic();
  let notDraft = await axios.put(`http://localhost:5000/create/${form_id}`, {title: title});
};

const deleteQuestionLocally = (i) => {
  let q = [...allQ];
  q.splice(i, 1);
  setAllQ(q);
  setNewQ(null);
};

const onDeleteQuestion = (id, i) => {
  if(id !== null){
    let delQ = await axios.delete(`http://localhost:5000/create/question/${id}`)
    //If successful then delete the same from allQ and newQ
      //deleteQuestionLocally(i)
  }
  else {
    deleteQuestionLocally(i)
  }
}


//form creation
const onCreateForm = async() => {
  let newForm = await axios.post('http://localhost:5000/create', {title: title})
  //If successful then store the created form id and push it in the nav bar
}

const onDeleteForm = async() => {
  let form = await axios.delete(`http://localhost:5000/create/${form_id}`)
}

//each question
const addOptions = (i) => {
  let q = [...allQ];
  let r = {...newQ};
  q[i].options.push({ optionText: `Option` });
  r.options.push({ optionText: `Option` })
  // setQuestions([...questions, questions[i].options.push({optionText: `Option ${i+1}`})])
  setAllQ(q);
  setNewQ(r)
};

const changeOptions = (e) => {
  let q = [...allQ];
  let r = {...newQ};
  q[i].type = e.target.value;
  r.type = e.target.value;
  if (e.target.value === "text") {
    q[i].options = [q[i].options[0]];
    r.options = [r.options[0]];
  }
  setAllQ(q);
  setNewQ(r);
};

const deleteOptions = (i, j) => {
  let q = [...allQ];
  let r = {...newQ};
  q[i].options.splice(j, 1);
  r.options.splice(j,1);
  setAllQ(q);
  setNewQ(r);
};

const handleQuestionValue = (text, i) => {
  let q = [...allQ];
  let r = {...newQ}
  q[i].questionText = text;
  r.quetionText = text;
  setAllQ(q);
  setNewQ(r);
};

const handleOptionValue = (text, i, j) => {
  let q = [...allQ];
  let r = {...newQ};
  q[i].options[j].optionText = text;
  r.options[j].optionText = text;
  //newMembersEmail[i]= email;
  setAllQ(q);
  setNewQ(r);
};