import * as React from 'react'
import { CSSProperties } from 'react'
import { AppBar, Container, GridList, Tab, Tabs, Typography} from '@material-ui/core'
import { List, ListItem, ListItemText } from '@material-ui/core'
import TabPanel from '../main-components/TabPanel'



export interface StylesDictionary{
    [Key: string]: CSSProperties;
}

const styles:StylesDictionary = {
    container: {
        float: 'left',
        transform: 'translateY(100px)',
    },
    bar: {
        backgroundColor: '#5e60ce',
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
}



function a11yProps(index: any) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function LessonTwo() {
    const [value, setValue] = React.useState(0);

    const statement = "year <= 2000";
    const f = "for (var i = 0; i < 5; i++):";
    const w = "while (i < 10):";

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return(
        <Container maxWidth="sm" style={styles.container}>

            <AppBar position="static" style={styles.bar}>
                <Tabs value={value} onChange={handleChange} TabIndicatorProps={{style: {background:'white'}}}>
                    <Tab label="If/else statement" {...a11yProps(0)} style={styles.challenge}/>
                    <Tab label="For loops" {...a11yProps(1)} style={styles.challenge}/>
                    <Tab label="While loops" {...a11yProps(2)} style={styles.challenge}/>
                </Tabs>
            </AppBar>
            
            <GridList cellHeight={450}>
                <TabPanel value={value} index={0}>
                    <Typography variant="body1" style={styles.desc}>
                        Very often when you write code, you want to perform different actions for different decisions. <br/>
                        You can use conditional statements in your code to do this: <br/><br/>

                        <List>
                            <ListItem>
                                <ListItemText primary="Use 'if' to specify a block of code to be executed, if a specified condition is true"/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Use 'else' to specify a block of code to be executed, if the same condition is false"/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Use 'else-if' to specify a new condition to test, if the first condition is false"/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Use 'switch' to specify many alternative blocks of code to be executed"/>
                            </ListItem>
                        </List><br/>

                        Example: <br/><br/>
                        <Typography>
                            <i>if ({statement}) <br/>
                                print("You can drive")<br/>
                                else <br/>
                                print("Sorry you can't drive")</i>
                        </Typography><br/>

                        Excercise: <br/><br/>
                        Use the same variables you declared before and make the following validation: 
                        if the year is less than or equal to 2002, print: "Welcome to the bar"; if it's not just print: "Get out of here, kid!"
                    </Typography>
                </TabPanel>
            </GridList>

            <GridList cellHeight={450}>
                <TabPanel value={value} index={1}>
                    <Typography variant="body1" style={styles.desc}>
                        'for' - loops through a block of code a number of times and it has the following sintax: <br/><br/>
                        <Typography style={{textAlign: 'center'}}>
                            <i>
                            for (statement 1; statement 2; statement 3): <br/>
                                // code block to be executed //
                            </i><br/><br/>
                        </Typography>

                        <List>
                            <ListItem>
                                <ListItemText primary="Statement 1: is executed (one time) before the execution of the code block."/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Statement 2: defines the condition for executing the code block."/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Statement 3: is executed (every time) after the code block has been executed."/>
                            </ListItem>
                        </List><br/>

                        Example: <br/><br/>
                        <Typography>
                            <i>
                                {f} <br/>
                                text += "The number is " + i;
                            </i>
                        </Typography><br/>

                        Excercise: <br/><br/>
                        <List>
                            <ListItem>
                                <ListItemText primary="1. Declare a variable called 'myAge' and assign it your age"/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="2. With a for-loop print all the numbers until variable ' i ' is less than your age."/>
                            </ListItem>
                        </List>

                    </Typography>
                </TabPanel>
            </GridList>
            
            <GridList cellHeight={450}>
                <TabPanel value={value} index={2}>
                    <Typography variant="body1" style={styles.desc}>
                        The while loop loops through a block of code as long as a specified condition is true. <br/><br/>
                        Syntax: <br/><br/>
                        <Typography style={{textAlign: 'center'}}>
                           <i>
                                while (condition): <br/>
                                // code block to be executed //
                           </i>
                        </Typography><br/>

                        Example: <br/>
                        In the following example, the code in the loop will run, over and over again, as long as a variable (i) is less than 10: <br/><br/>
                        <Typography style={{textAlign: 'center'}}>
                           <i>
                                {w} <br/>
                                text += "The number is " + i; <br/>
                                i++;
                           </i>
                        </Typography><br/>

                        The do/while loop is a variant of the while loop. This loop will execute the code block once, 
                        before checking if the condition is true, then it will repeat the loop as long as the condition is true. <br/><br/>
                        Syntax: <br/><br/>
                        <Typography style={{textAlign: 'center'}}>
                           <i>
                                do: <br/>
                                // code block to be executed // <br/>
                                while (condition);
                           </i>
                        </Typography><br/>

                        Excercise: <br/><br/>
                        <List>
                            <ListItem>
                                <ListItemText primary="1. Declare a variable called 'myAge' and assign it your age"/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="2. With a do-while loop print all the numbers while variable i is less than your age."/>
                            </ListItem>
                        </List>

                    </Typography>
                </TabPanel>
            </GridList>

        </Container>
    )
}