import  classes from './Header.module.css';
import React from 'react'

const Header = ()=>{
    return(
        <React.Fragment>
            <div className={classes.main}>
            <h1>
                Contact Manager
            </h1>
            </div>
        </React.Fragment>
    )
};
export default Header;