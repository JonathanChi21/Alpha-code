import * as React from 'react'
import { Typography } from '@material-ui/core'
import DifficultyCard from './DifficultyCard'
import easy from '../../img/Easy.png'
import medium from '../../img/Medium.png'
import hard from '../../img/Hard.png'
import { CSSProperties } from '@material-ui/core/styles/withStyles'

const styles = {
    textAlign: 'center', 
    marginTop: '25px', 
    color: '#f1f1f1',
    fontFamily: 'Red Hat Display, sans-serif',
} as CSSProperties


export default class Difficulty extends React.Component{
    public render(){
        return(
            <div>
                <Typography variant="h3" style={styles}>Choose a entry level</Typography>
                <div className='container-fluid d-flex justify-content-center' style={{marginTop: '70px'}}>
                    <div className="row">
                        <div className="col-md-4">
                            <DifficultyCard title="Begining" difficulty={easy} level="begining"/>
                        </div>
                        <div className="col-md-4">
                            <DifficultyCard title="Medium" difficulty={medium} level="medium"/>
                        </div>
                        <div className="col-md-4">
                            <DifficultyCard title="Advanced" difficulty={hard} level="advanced"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}