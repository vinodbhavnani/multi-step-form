import { useState, useEffect } from 'react'
import { Form, Button } from "react-bootstrap"
import ProgressBar from '../ProgressBar';
import QuestionCard from '../QuestionCard';
import { MULTICHOICE, PREV, NEXT, MULTI, SINGLE, TEXT } from '../../constants/constants';
import { handleNavigation } from '../../utils/helpers';
import './Questionnaire.css'

const Questionnaire = ({ questions, setAnswers, submitApp }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    const currentQuestion = questions?.[currentStep];
    if (currentQuestion?.required && (!currentQuestion?.answer || currentQuestion?.answer === '')) {
      setIsBlocked(true);
    } else {
      setIsBlocked(false);
    }
  }, [questions])

  const setAnswer = (qid, type, answer) => {
    const newSet = questions.map(question => question);
    if (type === TEXT) {
      newSet.map((question) => {
        if (question.identifier === qid) {
          question.answer = answer;
        }
        return true;
      })
    } else {
      newSet.map((question) => {
        if (question.identifier === qid) {
          question.choices = [...answer];
          let selected = question.choices.find((choice) => choice.selected);
          question.answer = selected?.value;
        }
        return true;
      })
    }
    setAnswers(newSet);
  }

  const renderQuestion = () => {
    const currentQuestion = questions?.[currentStep];
    let type = '';
    if (currentQuestion?.question_type === MULTICHOICE) {
      if (currentQuestion.multiple === 'true') {
        type = MULTI;
      } else {
        type = SINGLE;
      }
    } else {
      type = TEXT
    }
    return <QuestionCard question={currentQuestion} setAnswer={setAnswer} type={type} />  
  }

  return (
    <>
      <div className="progress-indicator">
        <ProgressBar
          width={100}
          percent={(currentStep + 1) / questions?.length * 100}
        />
        <div>
          <span className="progress-status-text">Question {currentStep + 1} of { questions?.length }</span>
        </div>
      </div>
      <Form>
        <Form.Group className="form-group mb-3" controlId={questions?.[currentStep]?.identifier}>
          { renderQuestion() }
        </Form.Group>
        <Button variant="outline-info" className="navigate-button" disabled={currentStep === 0} onClick={() => handleNavigation(PREV, questions, currentStep, setCurrentStep)}>Previous</Button>
        <Button variant="primary" className="navigate-button" disabled={currentStep === questions?.length - 1 || isBlocked} onClick={() => handleNavigation(NEXT, questions, currentStep, setCurrentStep)}>Next</Button>
      </Form>
      {currentStep === questions?.length - 1 && (
        <Button variant="success" size="lg" className="submit-button" onClick={() => submitApp(true)}>Submit</Button>
      )}
    </>
  )
}

export default Questionnaire