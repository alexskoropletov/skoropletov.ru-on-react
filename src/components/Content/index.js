import React from 'react'
import { Link } from '@material-ui/core';

const Content = (props) => {
  const { started, remotely, stack, contacts } = props.config;
  return (
    <div variant="body1">
      <p>I'm a professional developer since {started} and I'm working remotely since {remotely}.</p>
      <p>I have on-hand experience with {stack.join(', ')} and many more.</p>
      {contacts.map((data, index) => (
        <p key={index}>
          {data.name}: <Link color="inherit" href={data.link}>{data.address}</Link>
        </p>
      ))}
    </div>
  );
};

export default Content;
