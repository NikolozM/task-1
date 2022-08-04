import React from 'react';
import { useParams, Link } from 'react-router-dom';

const DetailsPage = ({ content }) => {
  const { id } = useParams();
  const arr = content.filter((item) =>
    item.id.includes(id)
  );

  console.log(arr);

  return <div>{arr[0].text}</div>;
};

export default DetailsPage;
