import React from 'react'
import {Button} from '@material-ui/core'
import EachQuestion from './EachQuestion'
import axios from 'axios'

const RenderQuestion = ({questions, addQuestion, setQuestions}) => {
    const saveForm = () => {
        console.log('Let\'s save form')
    }

    return (
        <div>
                {questions.map((question, i) =>
                    <EachQuestion question={question} i={i} questions={questions} setQuestions={setQuestions}/>
                    )}
                    <Button variant='contained' color='tertiary' onClick={addQuestion}>Add Question</Button>
                    <Button variant='contained' color='tertiary' onClick={saveForm}>Save Form</Button>
        </div>
    )
}

export default RenderQuestion
