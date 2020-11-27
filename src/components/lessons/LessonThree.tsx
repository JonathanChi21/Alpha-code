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

export default function LessonThree() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return(
        <Container maxWidth="sm" style={styles.container}>

            <AppBar position="static" style={styles.bar}>
                <Tabs value={value} onChange={handleChange} TabIndicatorProps={{style: {background:'white'}}}>
                    <Tab label="Functions" {...a11yProps(0)} style={styles.challenge}/>
                    <Tab label="Classes" {...a11yProps(1)} style={styles.challenge}/>
                    <Tab label="Inheritence" {...a11yProps(2)} style={styles.challenge}/>
                </Tabs>
            </AppBar>

            <GridList cellHeight={450}>
                <TabPanel value={value} index={0}>
                    <Typography variant="body1" style={styles.desc}>
                        A Function is a block of code designed to perform a particular task and is executed when something invokes it (calls it). <br/><br/>
                        Example (in Python): <br/><br/>

                        <Typography style={{textAlign: 'center'}}>
                            <i>
                                def my_function(): <br/>
                                /* Code to be executed */
                            </i><br/><br/>
                        </Typography>

                        And we're going to call it below: <br/><br/>

                        <Typography style={{textAlign: 'center'}}>
                            my_function()
                        </Typography><br/>

                        Excercise: <br/><br/>
                        <List>
                            <ListItem>
                                <ListItemText primary="1. Declare a variable with your name on it"/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="2. Declare a function called 'hello' and return 'Hello my name is ' + your name"/>
                            </ListItem>
                        </List>

                    </Typography>
                </TabPanel>
            </GridList>

            <GridList cellHeight={450}>
                <TabPanel value={value} index={1}>
                    <Typography variant="body1" style={styles.desc}>
                        When we talk about Classes we also refer to Objects. An object is an abstract data type created by a developer. 
                        It can include multiple properties and methods and may even contain other objects. <br/><br/>
                        We use the 'class' key word to create a class: <br/><br/>

                        <Typography style={{textAlign: 'center'}}>
                            <i>
                            class MyClass: <br/>
                                // code block to be executed //
                            </i><br/><br/>
                        </Typography>

                        Inside this class we can declare variables and methods. A method is a function inside a Class. <br/><br/>
                        A complete Class declaration in Python should look like this: <br/><br/>

                        <Typography>
                            <i>
                            class MyClass: <br/>
                                name = 'Jonathan' <br/>
                                age = '23' <br/><br/>
                                def greet(): <br/>
                                return name + age
                            </i><br/><br/>
                        </Typography>

                    </Typography>
                </TabPanel>
            </GridList>
            
            <GridList cellHeight={450}>
                <TabPanel value={value} index={2}>
                    <Typography variant="body1" style={styles.desc}>
                        Inheritance allows us to define a class that inherits all the methods and properties from another class: <br/><br/>
                        <List>
                            <ListItem>
                                <ListItemText>
                                    1. Parent class is the class being inherited from, also called base class.
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    2. Child class is the class that inherits from another class, also called derived class.
                                </ListItemText>
                            </ListItem>
                        </List>
                        <Typography style={{textAlign: 'center'}}>
                            <b>Create a parent Class</b><br/><br/>
                        </Typography>
                        <Typography>
                            <i>
                                class Person: <br/>
                                def __init__(self, fname, lname): <br/>
                                self.firstname = fname <br/>
                                self.lastname = lname <br/><br/>

                                def printname(self): <br/>
                                print(self.firstname, self.lastname) <br/><br/>

                                #Use the Person class to create an object, and then execute the printname method: <br/><br/>

                                x = Person("John", "Doe") <br/>
                                x.printname() <br/>
                            </i>
                        </Typography><br/>
                        <Typography style={{textAlign: 'center'}}>
                            <b>Create a child Class</b><br/><br/>
                        </Typography>
                        <Typography>
                            To create a class that inherits the functionality from another class, 
                            send the parent class as a parameter when creating the child class:
                        </Typography><br/><br/>
                        <Typography>
                            <i>
                                class Student(Person): <br/>
                                pass
                            </i>
                        </Typography>
                    </Typography>
                </TabPanel>
            </GridList>
            
        </Container>
    )
}