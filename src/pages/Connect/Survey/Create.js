import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Button, Container, Box, Card} from '@material-ui/core'
import FormCreator from './form/FormCreator'
import SurveyCard from './SurveyCard'

const Create = () => {
    const [clicked, setClicked] = useState(false)
    const [create, setCreate] = useState(false)
    const [title, setTitle] = useState()
    const [questions, setQuestions] = useState([{questionText: "Question", options : [{optionText: "Option 1"}], open: false, type: 'text'}])
    const [availableForms, setAvailableForms] = useState([])
    const [modified, setModified] = useState(true)
    

    const addQuestion = () => {
        setQuestions([...questions, {questionText: "Question", options : [{optionText: "Option 1"}], open: false, type: 'text'}])
    }

    // const createHandler = async() => {
    //     let res = await axios.post('http://localhost:5000/create', {title: title})
    //     setCreate(true)        
    // }

    useEffect(() => {
        const source = axios.CancelToken.source();

        axios.get('http://localhost:5000/create/forms')
        .then(forms => setAvailableForms(forms.data.rows))
        .catch(err => console.log(err))
        return () => {
            source.cancel()
        }
    }, [modified])

    if(availableForms === null)
    return (
        <div>
            <SurveyCard setModified={setModified}/>
        </div>
    )
    else{
        return(
            <div>
                <SurveyCard formId={null} setModified={setModified}/>
                {availableForms.map((f, i) => (
                    <SurveyCard formId={f.form_id} formTitle={f.form_title} key={i} setModified={setModified}/>
                ))}
            </div>
        )
    }
}

export default Create
