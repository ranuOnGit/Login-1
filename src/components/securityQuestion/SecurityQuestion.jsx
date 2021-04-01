import React, { useState } from 'react';
import './SecurityQuestion.css';
import { useHistory } from 'react-router';

const SecurityQuestion = () => {
  const userName = JSON.parse(sessionStorage.getItem('userName')) || 'User';
  const [question, setQuestion] = useState('');
  const [ answer, setAnswer ] = useState( '' );
  const [modal, setModal] = useState('');

  let history = useHistory();

  const handleQuestion = (e) => {
    setQuestion(e.target.value);
  };

  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question || !answer) {
      setModal('All fields are required');
    } else {
      console.log('Question: ' + question + ' ,', 'Answer: ' + answer);
      sessionStorage.removeItem('userName');
      history.push('/');
    }
  };

  return (
    <div className='security-div'>
      {modal && <div className='alert'>{modal}</div>}
      <h2>
        Hello {userName}, please answer a question of your choice from the given
        options
      </h2>
      <form className='security-form'>
        <label htmlFor='question'>question</label>
        <select value={question} onChange={handleQuestion}>
          <option>Choose your question</option>
          <option value='What is the name of your pet'>
            What is the name of your pet?
          </option>
          <option value='In which city were you born'>
            In which city were you born?
          </option>
          <option value="What is your best friend's name">
            What is your best friend's name?
          </option>
        </select>
        <label htmlFor='answer'>answer</label>
        <input
          type='text'
          value={answer}
          onChange={handleAnswer}
          placeholder='enter your answer'
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default SecurityQuestion;
