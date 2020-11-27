import * as React from 'react'
import { CSSProperties } from 'react'
import { Button, Typography } from '@material-ui/core'
const logo = require('../../img/logo.png')

export interface StylesDictionary{
    [Key: string]: CSSProperties;
}

const styles:StylesDictionary = {
    general: {
        textAlign: 'center',
        color: '#f1f1f1',
        height: '200%',
    },
    btn: {
        fontFamily: 'Red Hat Display, sans-serif',
        fontSize: '20px',
        backgroundColor: '#8C52FF',
        border: '0px',
        borderRadius: '4px',
        color: '#fff',
        padding: '10px 15px',
        marginTop: '35px',
        textTransform: 'none',
        width: '150px',
    },
    logo: {
        float: 'left',
        marginTop: '10px',
        transform: 'translateX(-300px)',
    },
    title: {
        paddingRight: '150px',
        transform: 'translateY(250px)',
    }
}

export default class Title extends React.Component{
    public render(){
        return(
            <div style={styles.general} className='main-page'>
                <img style={styles.logo} src={logo} alt='logo' width='700' height='700'/>
                <div style={styles.title}>
                    <Typography variant='h1' style={{fontFamily: 'Red Hat Display, sans-serif'}}>Alpha-code</Typography>
                    <Typography variant='h4' style={{fontFamily: 'Red Hat Display, sans-serif'}}>Take the next step and prove yourself</Typography>
                    <Button style={styles.btn}><a href="/difficulty" style={{textDecoration: 'none', color: '#fff'}}>Start</a></Button>
                </div>
            </div>
        )
    }
}