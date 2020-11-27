
import * as React from 'react'
import { CSSProperties } from 'react'
import ReactAce from 'react-ace';
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-javascript"
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-xcode"

export interface StylesDictionary{
    [Key: string]: CSSProperties;
}

const styles:StylesDictionary = {
    editor: {
        float: 'right',
        height: '500px',
        marginRight: '50px',
        width: '800px',
    },
}

export default class Editor extends React.Component {
    
    onChange(newValue: any, e: any) {
        console.log(newValue, e);
    }
    
    public render(){
        return(
            <div id="editor" style={{transform: 'translate(25px, -390px)'}}>
                <ReactAce style = {styles.editor}
                    mode="javascript"
                    theme="xcode"
                    onChange={this.onChange}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: true }}
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true
                    }}
                />
            </div>
        )
    }
}
