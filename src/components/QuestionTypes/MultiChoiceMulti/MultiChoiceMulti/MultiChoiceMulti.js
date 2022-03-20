import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import './MultiChoiceMulti.css'

const MultiChoiceMulti = ({ question, setAnswer }) => {
    const [newSet, setNewSet] = useState([]);

    useEffect(() => {
        setNewSet([ ...question.choices ]);
    }, [question?.identifier]);

    const setValues = (val, checked) => {
        const temp = [ ...newSet ];
        let index = temp.findIndex((choice) => choice.value === val);
        temp[index].selected = checked;
        setNewSet(temp);
    };

    useEffect(() => {
        setAnswer(question.identifier, 'multi', newSet);
    }, [newSet])

    return (
        <>
            {
                question?.choices?.map((choice, index) => {
                    return <Form.Check
                        name={question.identifier}
                        type={'checkbox'}
                        id={choice.value}
                        key={choice.value}
                    >
                        <Form.Check.Input type={'checkbox'} checked={choice.selected} value={choice.value} onChange={(e) => setValues(e.target.value, e.target.checked)}/>
                        <Form.Check.Label className="control-checkbox-label">{choice.label}</Form.Check.Label>
                    </Form.Check>
                })
            }
        </>
    )
};

export default MultiChoiceMulti;