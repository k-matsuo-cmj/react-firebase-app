import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Avatar, Typography } from '@material-ui/core';

const styles = theme => ({
  root: { flexGrow: 1, },
  flex: { flexGrow: 1, },
  button: { margin: theme.spacing() },
});

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.flex}>
              Firebase video
            </Typography>
            <Button color="inherit" className={classes.button} onClick={this.googleLogin}>
              Login with Google
            </Button>
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