import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Avatar, Typography } from '@material-ui/core';
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { getAuth, GoogleAuthProvider, signInWithRedirect, signOut } from 'firebase/auth';

const styles = theme => ({
  root: { flexGrow: 1, },
  flex: { flexGrow: 1, },
  button: { margin: theme.spacing() },
  rightIcon: { marginLeft: theme.spacing() },
  avatar: { margin: 10, backgroundColor: 'white' },
});

class Header extends Component {
  constructor() {
    super();
    this.state = { isLogin: false, username: '', profilePicUrl: '' }
  }

  componentDidMount() {
    getAuth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ isLogin: true, username: user.displayName, profilePicUrl: user.photURL });
      } else {
        this.setState({ isLogin: false, username: '', profilePicUrl: '' });
      }
    });
  }

  googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(getAuth(), provider)
  }
  googleSignOut() {
    signOut(getAuth());
  }

  renderLoginComponent = classes => {
    return (
      <Button color="inherit" className={classes.button} onClick={this.googleLogin}>
        Login with Google
      </Button>
    )
  }
  renderLoginedComponent = classes => {
    return (
      <div>
        <Button color="inherit" className={classes.button}>
          <Avatar alt="profile image" src={`${this.state.profilePicUrl}`} className={classes.avator} />
        </Button>
        {this.state.username}
        <Button color="inherit" className={classes.button} onClick={this.googleSignOut}>
          Sign Out
        </Button>
      </div>
    )
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.flex}>
              Firebase video
            </Typography>
            {this.state.isLogin ? this.renderLoginedComponent(classes) : this.renderLoginComponent(classes) }
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
Header.propTypes = {
  classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(Header);