import * as React from 'react'
import { CSSProperties } from 'react'
import { Card, CardContent, CardMedia, CardActions, Button, Typography } from '@material-ui/core'

export interface StylesDictionary{
    [Key: string]: CSSProperties;
}

const styles:StylesDictionary = {
    root: {
        border: '1px solid #5e60ce',
        borderRadius: '25px',
        textAlign: 'center',
        height: '400px',
        width: '345px',
    },
    title:{
        fontFamily: 'Red Hat Display, sans-serif',
        fontSize: '30px',
        color: '#4361ee',
    },
    chooseBtn:{
        backgroundColor: '#4361ee',
        padding: '10px 20px 10px 20px',
        textTransform: 'none',
        width: '200px',
        transform: 'translateX(50px)', 
    },
    link:{
        color: '#fff',
        textDecoration: 'none',
    },
    media:{
        height: '250px',
        width: '200px',
        marginTop: '10px',
        transform: 'translateX(60px)',
    }
}

interface IDifficultyProps {
    title: string
    difficulty: string
    level: string
}

export default class DifficultyCard extends React.Component<IDifficultyProps>{
    public render(){

        const { title, difficulty, level } = this.props

        return (
            <Card style={styles.root}>
                <CardContent>
                    <Typography style={styles.title}>{title}</Typography>
                    <CardMedia style={styles.media} image={difficulty} title="Choose"/>
                    <CardActions>
                        <Button style={styles.chooseBtn}><a href={"/" + level} style={styles.link}>Choose</a></Button>
                    </CardActions>
                </CardContent>
            </Card>
        )
    }
}

