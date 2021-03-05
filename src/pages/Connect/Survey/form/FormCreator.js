import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router';
import {Button, TextField} from '@material-ui/core'
import EachQuestion from './EachQuestion'

const FormCreator = () => {

    const { form_id } = useParams()
    const [allQ, setAllQ] = useState([])
    const [newQ, setNewQ] = useState([])
    const [title, setTitle] = useState()

    useEffect(() => {
        const axiosCancel = axios.CancelToken.source()
        axios.get(`http://localhost:5000/create/question/${form_id}`)
            .then(res => {
                let q = res.data
                console.log("THIS IS q[0]", q[0])
                if(q.length === 0){
                    setAllQ([{questionText: "Question", options : [{optionText: "Option 1"}], open: true, type: 'text', id: null}])
                    setNewQ({questionText: "Question", options : [{optionText: "Option 1"}], open: true, type: 'text', id: null})
                }
                else if(q[0].question_id !== null){
                    //Object.entries is not supported in Internet Explorer
                    let r = q.map(x => ({questionText: x.question_text, options: Object.entries(x.options.options).map(([key, value]) => ({optionText: value})), open: false, type: x.type, id: x.question_id}))
                    console.log('Notice!!!',q[0])
                    setTitle(q[0].form_title)
                    setAllQ(r)
                    setNewQ(null)
                }
                else {
                    setTitle(q[0].form_title)
                    setAllQ([{questionText: "Question", options : [{optionText: "Option 1"}], open: true, type: 'text', id: null}])
                    setNewQ({questionText: "Question", options : [{optionText: "Option 1"}], open: true, type: 'text', id: null})
                }
            })
            .catch(err => console.log(err))
        return () => {
            axiosCancel.cancel()
        }
    }, [form_id])

    const commonLogic = async() => {
        if (newQ !== null) {
            if (newQ.id === null) {
              let saveQ = await axios.post(
                `http://localhost:5000/create/question/${form_id}`,
                newQ
              );
              //Update the id in allQ corresponding to this
              let questionID = saveQ.data[0].question_id
              let q = [...allQ]
              let r = {...newQ}
              for(let t = 0; t< q.length; t++){
                if(q[t].id === null){
                    q[t].id = questionID
                }
              }
              r.id = questionID
              setAllQ(q);
              setNewQ(r)
            } else {
              let updateQ = await axios.put(
                `http://localhost:5000/create/question/${newQ.id}`,
                newQ
              );
              console.log(updateQ.data)
            }
        }
    }

    const addNewQuestionLocally = () => {
        let q = [...allQ, {
            questionText: "Question",
            options: [{ optionText: "Option" }],
            open: true,
            type: "text",
            id: null,
          }]
        setNewQ({
          questionText: "Question",
          options: [{ optionText: "Option" }],
          open: true,
          type: "text",
          id: null,
        });
        setAllQ(q);
    }
    const onAddQuestion = async() => {
        await commonLogic()
        closeAll()
        addNewQuestionLocally()
      };

      const onSaveForm = async () => {
        commonLogic();
        let notDraft = await axios.put(`http://localhost:5000/create/forms/${form_id}`, {title: title});
        console.log(notDraft.data)
      };

      const deleteQuestionLocally = (i) => {
        let q = [...allQ];
        q.splice(i, 1);
        setAllQ(q);
        setNewQ(null);
      };

      const onDeleteQuestion = async(id, i) => {
        if(id !== null){
          let delQ = await axios.delete(`http://localhost:5000/create/question/${id}`)
          console.log(delQ)
          if(delQ.status === 200){
              deleteQuestionLocally(i)
          }
          //If successful then delete the same from allQ and newQ
            //deleteQuestionLocally(i)
        }
        else {
          deleteQuestionLocally(i)
        }
      }
      
      
      function closeAll() {
        let qs = [...allQ];
        for (let j = 0; j < qs.length; j++) {
          qs[j].open = false;
        }
        setAllQ(qs);
      }      

    return (
        <div>
            <TextField value={title} onChange={(e) => setTitle(e.target.value)}/>
            {allQ.map((q,i) => <div key={i}><EachQuestion question={q} i={i} allQ={allQ} setAllQ={setAllQ} newQ={newQ} setNewQ={setNewQ} commonLogic={commonLogic} onDeleteQuestion={onDeleteQuestion} commonLogic={commonLogic}/></div>)}
            <Button variant='contained' color='tertiary' onClick={onAddQuestion}>Add Question</Button>
            <Button variant='contained' color='tertiary' onClick={onSaveForm}>Save Form</Button>
        </div>
    )
}

export default FormCreator
