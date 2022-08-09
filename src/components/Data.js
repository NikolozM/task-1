import React, { useEffect } from 'react';

const Data = () => {
  var myHeaders = new Headers();
  myHeaders.append(
    'apikey',
    'JO78rCD6NKqBUzDR6e2GrETChGiSw7G5'
  );

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders,
  };
  useEffect(() => {
    fetch(
      'https://api.apilayer.com/exchangerates_data/latest?symbols=GEL&base=EUR',
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  }, []);

  return <div></div>;
};

export default Data;
