import React, { useState } from 'react';
import SurveyAnswers from './SurveyAnswers';
import { Typography } from '@mui/material';
const Survey = () => {
  const [vote, setVote] = useState(0);

  const poll = [
    {
      question: 'how many sisters do you have?',
      answers: [
        {
          answer: 'one',
        },
        {
          answer: 'two',
        },
        {
          answer: 'three',
        },
      ],
    },
  ];

  function incrementVote() {
    setVote(vote + 1);
  }

  return (
    <div
      style={{
        border: '1px solid black',
        position: 'relative',
      }}
    >
      {poll.map((item) => {
        return (
          <ul style={{ padding: '5px' }}>
            <Typography
              fontSize='14px'
              fontWeight='500'
              pb='10px'
            >
              {item.question}
            </Typography>
            {item.answers.map((answer) => {
              return (
                <li
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <SurveyAnswers
                    answer={answer}
                    vote={vote}
                    incrementVote={incrementVote}
                  />
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
};

export default Survey;
