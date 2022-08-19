import React, { useState } from 'react';
import { Typography } from '@mui/material';
const SurveyAnswers = ({ answer, vote, incrementVote }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Typography
        onClick={() => {
          setCount(count + 1);
          incrementVote();
          console.log(count);
        }}
        pb='5px'
        fontSize='14px'
        fontWeight='500'
        sx={{
            cursor:"pointer"
        }}
      >
        {answer.answer}
      </Typography>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          paddingBottom: '10px',
        }}
      >
        <div>
          <Typography
            fontSize='16px'
            fontWeight='500'
            mr='10px'
          >{vote > 0 ? `${Math.floor(
            100 / (vote / count)
          )}%` : "0%"}</Typography>
        </div>
        <div
          className='progressbar'
          style={{
            width: `${100 / (vote / count)}%`,
            height: '6px',
          }}
        ></div>
      </div>
    </div>
  );
};

export default SurveyAnswers;
