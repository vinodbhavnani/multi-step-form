import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

const Freetext = ({ question, setAnswer }) => {
    const [value, setValue] = useState('');
    useEffect(() => {
        setValue(question?.answer)
    }, [question?.identifier])
    const setValueAndAnswer = (val) => {
        setValue(val);
        setAnswer(question.identifier, 'text', val);
    }
    return (
        <Form.Group className="mb-3" controlId={question?.identifier}>
            <Form.Control as="textarea" value={value} onChange={(e) => setValueAndAnswer(e.target.value)} rows={3} />
        </Form.Group>
    )
};

export default Freetext;