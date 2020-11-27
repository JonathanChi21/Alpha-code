import * as React from 'react'
import Navbar from '../main-components/Navbar'
import Editor from '../main-components/Editor'
import LessonTwo from '../lessons/LessonTwo'

export default class Medium extends React.Component{
    public render(){
        return(
            <div>
                <Navbar />
                <LessonTwo />
                <Editor />
            </div>
        )
    }
}