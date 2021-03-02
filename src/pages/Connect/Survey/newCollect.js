import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Collect = () => {
    let initialFormFeed = {};

    const [questions, setQuestions] = useState()
    const [fetched, setFetched] = useState(false)

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const source = axios.CancelToken.source();

        axios.get('http://localhost:5000/collect')
        .then(res => {setQuestions(res.data[0].for_data); setFetched(true) })
        
        return () => {
            source.cancel()
        }
    }, [])
    
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
