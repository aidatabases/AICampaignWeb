import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

const Collect = () => {
    let initialFormFeed = {};
    const { form_id } = useParams()
    const [questions, setQuestions] = useState()
    const [fetched, setFetched] = useState(false)
    const [title, setTitle] = useState('')
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const axiosCancel = axios.CancelToken.source()
        axios.get(`http://localhost:5000/create/question/${form_id}`)
            .then(res => {
                let q = res.data
                if(q.length === 0){
                    setQuestions([{questionText: "Question", options : [{optionText: "Option 1"}], open: true, type: 'text', id: null}])
                }
                else if(q[0].question_id !== null){
                    //Object.entries is not supported in Internet Explorer
                    let r = q.map(x => ({questionText: x.question_text, options: Object.entries(x.options.options).map(([key, value]) => ({optionText: value})), open: false, type: x.type, id: x.question_id}))
                    setTitle(q[0].form_title)
                    setQuestions(r)
                }
                else {
                    setTitle(q[0].form_title)
                    setQuestions([{questionText: "Question", options : [{optionText: "Option 1"}], open: true, type: 'text', id: null}])
                }
                setFetched(true)
            })
            .catch(err => console.log(err))
        return () => {
            axiosCancel.cancel()
        }
    }, [form_id])
    
    useEffect(() => {
        if(fetched){
        questions.forEach((q, i) => {
            if(q.type === 'checkbox'){
                let helperFeed = {}
                q.options.forEach((op, j) => {
                    helperFeed[j] = false
                })
                initialFormFeed[i] = helperFeed
            }
            else {
                initialFormFeed[i] = null
            }
            setFormFeed(initialFormFeed)
            setLoaded(true)
        });
        }
    }, [fetched])

    const [formFeed, setFormFeed] = useState(initialFormFeed)

    const changeHandler = (e, i, j) => {
        let q = {...formFeed}
        if(j === null){
            q[i] = e.target.value
            setFormFeed(q)
        }
        else {
            q[i][j] = !q[i][j];
            setFormFeed(q)
        }
    }
    if(!loaded){
        return(
            <div>Loading</div>
        )
    }
    else{
    return (
        <div>
            <h1>{title}</h1>
            {questions.map((question, i) => 
                <div>
                    <p style={{display: 'flex'}}>{question.questionText}</p>
                    {question.type === 'text' ?
                    <input type='text' value={formFeed[i]} onChange={(e) => changeHandler(e, i, null)}/> 
                    : 
                    // <div>Option</div>
                    
                    question.options.map((option, j) => 
                    question.type === 'radio' ?
                    <div style={{display: 'flex'}}><input type={question.type} value={option.optionText} checked={formFeed[i] === option.optionText} onClick={(e) => changeHandler(e, i, null)}/><label>{option.optionText}</label></div> 
                    : 
                    <div style={{display: 'flex'}}><input type={question.type} value={option.optionText} checked={formFeed[i][j]} onClick={(e) => changeHandler(e, i, j)}/><label>{option.optionText}</label></div>)
                    }
                </div>
            
            )}
            <div style={{display: 'flex', marginTop: '30px'}}>
                {JSON.stringify(formFeed)}
            </div>
        </div>
    )
                }
}

export default Collect
