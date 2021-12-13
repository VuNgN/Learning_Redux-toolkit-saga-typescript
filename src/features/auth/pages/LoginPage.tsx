import {Box, Button, CircularProgress, makeStyles, Paper, Typography} from '@material-ui/core';
import {useAppDispatch, useAppSelector} from 'app/hooks';
import React from 'react'
import {authAction} from '../authSlice';

interface LoginPageProps {

}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh'
  },
  box: {
    padding: theme.spacing(3)
  }
}));

const LoginPage = (props: LoginPageProps) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(state => state.auth.logging);

  const handleLoginClick = () => {
    dispatch(
      authAction.login({
        username: '',
        password: '',
      })
    );
  }
  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant='h5' component='h1'>
          Student Management
        </Typography>
        <Box mt={4} display="flex" justifyContent="center" alignItems="center">
          <Button fullWidth variant='contained' color='primary' onClick={handleLoginClick}>
            {isLoggedIn ? <CircularProgress size={20} color='inherit' /> : "Fake LogIn"} &nbsp;
          </Button>
        </Box>
      </Paper>
    </div>
  )
}

export default LoginPage

