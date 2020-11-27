import * as React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import Languages from './Languages'
import logo2 from '../../img/logo2.png'

const styles = {
    marginLeft: "15px", 
    fontFamily: 'Red Hat Display, sans-serif',
    color: '#f1faee'
}

export default class Navbar extends React.Component{
    public render(){
        return(
            <AppBar style={{backgroundColor: '#3a0ca3'}}>
                <Toolbar>
                    <IconButton edge="start">
                        <a href="/difficulty"><img src={logo2} alt="logo" width="50" height="50"/></a>
                        <Typography variant='body1' style={styles}>Alpha-code</Typography>
                    </IconButton>
                    <Languages />
                </Toolbar>
            </AppBar>
        )
    }
}