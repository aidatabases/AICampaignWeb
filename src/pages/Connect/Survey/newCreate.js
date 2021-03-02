import React, {useState} from 'react'
import axios from 'axios'
import {Button, Container, Box} from '@material-ui/core'
import QuestionsTab from './old/QuestionsTab'
import RenderQuestion from './old/RenderQuestion'
import FormCard from './form/FormCard'

const Create = () => {
    const [clicked, setClicked] = useState(false)
    const [create, setCreate] = useState(false)
    const [title, setTitle] = useState()
    const [questions, setQuestions] = useState([{questionText: "Question", options : [{optionText: "Option 1"}], open: false, type: 'text'}])

    

    const addQuestion = () => {
        setQuestions([...questions, {questionText: "Question", options : [{optionText: "Option 1"}], open: false, type: 'text'}])
    }

    const createHandler = async() => {
        let res = await axios.post('http://localhost:5000/create', {title: title})
        setCreate(true)        
    }

    if(!clicked)
    return (
        <div>
            <Button variant='contained' color='primary' onClick={() => setClicked(!clicked)}>
                Create a form
            </Button>
        </div>
    )
    else if(clicked && !create){
        return (
            <div>
            <input type='text' onChange={(e) => setTitle(e.target.value)}/>
            <button onClick={createHandler}>Create</button>
            </div>
        )
    }
    else{
        return(
            <div>
                    <RenderQuestion questions={questions} addQuestion={addQuestion} setQuestions={setQuestions}/>
                    {/* <div>{JSON.stringify(questions)}</div> */}
                {/* <QuestionsTab formData={{}}/> */}
                {/* <FormCard/> */}
            </div>
        )
    }
}

export default Create
