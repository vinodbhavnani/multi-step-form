import React from 'react';
import { Card } from 'react-bootstrap';
import { MULTI, TEXT } from '../../constants/constants';
import Freetext from '../QuestionTypes/Freetext/Freetext';
import MultiChoiceMulti from '../QuestionTypes/MultiChoiceMulti/MultiChoiceMulti';
import MultiChoiceSingle from '../QuestionTypes/MultiChoiceSingle/MultiChoiceSingle';
import './QuestionCard.css';

const QuestionCard = ({ question, setAnswer, type }) => {
    const renderControl = () => {
        if (type === TEXT) {
            return <Freetext question={question} setAnswer={setAnswer} />
        } else {
            if (type === MULTI) {
                return <MultiChoiceMulti question={question} setAnswer={setAnswer} />
            } else {
                return <MultiChoiceSingle question={question} setAnswer={setAnswer} />
            }
        }
    }
    return (<div key={question?.identifier}>
        <Card className='cards'>
            <Card.Header className="label">
                {question?.required && <span className='required-mark'>{'* '}</span>  }
                {question?.headline}
            </Card.Header>
            <Card.Body>
                { renderControl() }
            </Card.Body>
        </Card>
    </div>)
};

export default QuestionCard;
