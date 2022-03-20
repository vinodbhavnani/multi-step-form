import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Questionnaire from './components/Questionnaire/Questionnaire';
import ThankYouPage from './components/ThankYouPage';

function App() {
  const [questionsData, setQuestionsData] = useState([]);
  const [customQuestionSet, setCustomQuestionSet] = useState([]);
  const [isApplicationSubmitted, setIsApplicationSubmitted] = useState(false);

  useEffect(() => {
    axios.get('./questionnaire.json')
      .then(res => setQuestionsData(res.data.questionnaire))
      .catch(err => console.error(err))
  }, [isApplicationSubmitted]);

  useEffect(() => {
    const newSet = questionsData?.questions?.map(question => {
      return {
        ...question,
        answer: ''
      }
    });
    setCustomQuestionSet(newSet);
  }, [questionsData]);

  return (
    <div className="App">
      <header className="App-header">
        {
          questionsData && (
            <span className='questionnaire-title'>{questionsData.name}</span>
          )
        }
        <div className='questionnaire-description'>
          <span className='desc-text'>
            <i>"{questionsData?.description}"</i>
          </span>
        </div>
      </header>
      <main className="App-main-wrapper">
        {!isApplicationSubmitted && <Questionnaire questions={customQuestionSet} setAnswers={setCustomQuestionSet} submitApp={setIsApplicationSubmitted} />}
        {isApplicationSubmitted && <ThankYouPage submitApp={setIsApplicationSubmitted} />}
      </main>
    </div>
  );
}

export default App;
