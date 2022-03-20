import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import './MultiChoiceSingle.css'

const MultiChoiceSingle = ({ question, setAnswer }) => {
   const [newSet, setNewSet] = useState([]);

    useEffect(() => {
        setNewSet([ ...question.choices ]);
    }, [question?.identifier]);

    const setValues = (val, checked) => {
        const temp = [ ...newSet ];
        let index = temp.findIndex((choice) => choice.value === val);
        temp.forEach((choice, idx) => {
            if (idx === index) {
                choice.selected = true;
            } else {
                choice.selected = false;
            }
        })
        setNewSet(temp);
    };

    useEffect(() => {
        setAnswer(question.identifier, 'single', newSet);
    }, [newSet])

    return (
        <>
            {
                question?.choices.map((choice, index) => {
                    return <Form.Check
                        name={question.identifier}
                        type={'radio'}
                        id={choice.value}
                        key={choice.value}
                    >
                        <Form.Check.Input type={'radio'} checked={choice.selected} name={question.identifier} value={choice.value} onChange={(e) => setValues(e.target.value, e.target.checked)}/>
                        <Form.Check.Label className="control-radio-label">{choice.label}</Form.Check.Label>
                    </Form.Check>
                })
            }
        </>
    )
};

export default MultiChoiceSingle;