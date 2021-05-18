import React from 'react'
import { makeStyles, withStyles } from "@material-ui/core";

// withStyles & makeStyles

const style1 = {
    rightMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        right: '0px',
        width: '220px',
        height: '100%',
        backgroundColor: '#253053'
    }
}

const RightMenu = (props) => {
    const { classes } = props;
    return (
        <div className={classes.rightMenu}>

        </div>
    )
}

export default withStyles(style1)(RightMenu);
