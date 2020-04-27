import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// import Logo from '../images/tbMainLogoWood.png'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: 'url(https://i.imgur.com/qtUpRvX.png)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

// TEXT ANIMATION
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  var css = document.createElement('style');
  css.type = 'text/css';
  css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #666 }';
  document.body.appendChild(css);
};
// END TEXT ANIMATION

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LocalBarIcon />
          </Avatar>
          <Typography component='h1' variant='h6'>
            Sign Up
          </Typography>
          <p className='signInText'>
            Remember that incredible{' '}
            <span
              className='txt-rotate'
              data-period='2000'
              data-rotate='[ "bottle of wine ", "IPA ","cocktail ", "stout ", "brand of whiskey "]'
            ></span>
            you tried that one time? <br />
            You remember, right? It started with an "S" I think? It had a red
            label...or was it green?
          </p>
          <br />
          <p className='signInText'>
            With Tasting Board you can log, track, and rate all the drinks
            you'll never forget again!
          </p>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete='fname'
                  name='firstName'
                  variant='outlined'
                  required
                  fullWidth
                  id='firstName'
                  label='First Name'
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='current-password'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='reEnterPassword'
                  label='Re-enter Password'
                  type='reEnterPassword'
                  id='reEnterPassword'
                  autoComplete='current-password'
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify='flex-end'>
              <Grid item>
                <Link href='#' variant='body2'>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

// async function handleSubmit(event) {
//   event.preventDefault();

//   try {
//     await Auth.signIn(email, password);
//     alert("Logged in");
//   } catch (e) {
//     alert(e.message);
//   }
// }