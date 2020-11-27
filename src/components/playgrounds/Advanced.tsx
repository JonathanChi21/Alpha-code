import * as React from 'react'
import Navbar from '../main-components/Navbar'
import Editor from '../main-components/Editor'
import LessonThree from '../lessons/LessonThree'

export default class Advanced extends React.Component{
    public render(){
        return(
            <div>
                <Navbar />
                <LessonThree />
                <Editor />
            </div>
        )
    }
}