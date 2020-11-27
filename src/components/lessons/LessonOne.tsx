import * as React from 'react'
import { CSSProperties } from 'react'
import { AppBar, CardMedia, Container, GridList, Tab, Tabs, Typography} from '@material-ui/core'
import TabPanel from '../main-components/TabPanel'
import dataTypes from '../../img/data-types.png'


export interface StylesDictionary{
    [Key: string]: CSSProperties;
}

const styles:StylesDictionary = {
    container: {
        float: 'left',
        transform: 'translateY(100px)',
    },
    bar: {
        backgroundColor: '#8C52FF',
        width: '480px',
    },
    challenge: {
        outline: 'none',
        fontFamily: 'Red Hat Display, sans-serif',
    },
    desc: {
        width: '470px', 
        color: '#f1f1f1', 
        fontFamily: 'Red Hat Display, sans-serif'
    },
    media: {
        height: '400px',
        width: '400px',
        marginLeft: '30px',
    },
}



function a11yProps(index: any) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function LessonOne() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return(
        <Container maxWidth="sm" style={styles.container}>

            <AppBar position="static" style={styles.bar}>
                <Tabs value={value} onChange={handleChange} TabIndicatorProps={{style: {background:'white'}}}>
                    <Tab label="Variables" {...a11yProps(0)} style={styles.challenge}/>
                    <Tab label="Constants" {...a11yProps(1)} style={styles.challenge}/>
                    <Tab label="Data types" {...a11yProps(2)} style={styles.challenge}/>
                </Tabs>
            </AppBar>

            <GridList cellHeight={450}>
                <TabPanel value={value} index={0}>
                    <Typography variant="body1" style={styles.desc}>
                        A variable is a little space of memory where you can save data and use it along your program.<br/><br/>
                        This is the common way to declare a simple variable:<br/><br/>

                        <i>var number = 1 </i><br/><br/>
                    
                        As you can see in the example above, we used the reserved word 'var' (this word may change in others programming languages),
                        followed by the variable name of your choice.<br/>
                        The name of your variables always need to start with lowercase letters.<br/><br/>

                        At the end of the declaration we put an equal sign followed by a number; 
                        this means that the data type (the information that our variable will store) will be a number.
                        You'll see another data types later.<br/><br/>

                        <b>Excercise</b><br /><br />
                        Declare three variables: day, month and year respectively and give them the value of your birthdate. Example:<br /><br/>
                        <i>var day = 2</i><br />
                        <i>var month = 10</i><br />
                        <i>var year = 1996</i><br />
                    </Typography>
                </TabPanel>
            </GridList>

            <GridList cellHeight={450}>
                <TabPanel value={value} index={1}>
                    <Typography variant="body1" style={styles.desc}>
                        We declare constants when we know that the information we keep will not be modified throughout the program.<br/><br/>

                        The way to declare a constant is pretty similar to declare a variable; we only need to change the reserved word 'var' for 'const' 
                        (you'll find that in other programming lenguages you can use the 'let' word instead):<br/><br/>

                        <i>const pi = 3.141592</i><br/>
                        or <br/>
                        <i>let pi = 3.141592</i><br/><br/>

                        <b>Excercise</b><br/><br/>
                        Modify the same variables that you did before and turn them into a constants. Example: <br/><br/>
                        <i>const day = 2</i><br />
                        <i>const month = 10</i><br />
                        <i>const year = 1996</i><br />
                    </Typography>
                </TabPanel>
            </GridList>

            <GridList cellHeight={450}>
                <TabPanel value={value} index={2}>
                    <Typography variant="body1" style={styles.desc}>
                        All right, until now you've only seen the numeric data type, but: ¿what about the others? Let me show you: <br/><br/>
                    </Typography>
                    <CardMedia style={styles.media} image={dataTypes}/>
                </TabPanel>
            </GridList>

        </Container>
    )
}