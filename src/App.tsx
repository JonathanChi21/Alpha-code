import * as React from 'react'
import { Route } from 'react-router'
import Title from './components/main-components/Title'
import Difficulty from './components/main-components/Difficulty'
import Begining from './components/playgrounds/Begining'
import Medium from './components/playgrounds/Medium'
import Advanced from './components/playgrounds/Advanced'

export default class App extends React.Component{
    public render(){
        return(
            <div>
                <Route exact={true} path='/' component={Title}/>
                <Route exact={true} path='/difficulty' component={Difficulty} />
                <Route exact={true} path='/begining' component={Begining}/>
                <Route exact={true} path='/medium' component={Medium}/>
                <Route exact={true} path='/advanced' component={Advanced}/>
            </div>
        )
    }
}