import React, { useState } from 'react'
import data from './data'
import Question from './Question'
import './Accordion.scss'

const Accordion = () => {
  const [questions, setQuestions] = useState(data)

  return (
    <div className="container">
      <div className="questions">
        {
          questions.map(question => (
            <Question key={question.id} {...question} />
          ))
        }
      </div>
    </div>
  )
}

export default Accordion