import React from 'react';
import { Typography, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width: 160,
    height: 160,
  },
});


const Header = ({ config: { name, title } }) => {
  const classes = useStyles();

  return (
    <header>
      <Avatar
        src="/images/aleksandr_skoropletov.jpg"
        alt={`${name}, ${title}`}
        className={classes.avatar}
      />
      <Typography variant="h2" component="h1" gutterBottom>
        {name}
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom>
        {title}
      </Typography>
    </header>
  );
};

export default Header;
