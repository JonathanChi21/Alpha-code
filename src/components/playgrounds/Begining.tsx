import * as React from 'react'
import Navbar from '../main-components/Navbar'
import Editor from '../main-components/Editor'
import LessonOne from '../lessons/LessonOne'

export default class Begining extends React.Component{
    public render(){
        return(
            <div>
                <Navbar />
                <LessonOne />
                <Editor />
            </div>
        )
    }
}