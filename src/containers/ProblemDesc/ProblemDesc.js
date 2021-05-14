import React from 'react';
import ReactMarkdown from 'react-markdown';
import problemData from '../../assets/tempJsonData/final_problems_data.json';
import AceEditor from 'react-ace';

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-latex";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

const ProblemDesc = (props) => {
    const problem = problemData[props.problemId];
    function onChange(newValue) {
        console.log("change", newValue);
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <ReactMarkdown source={problem.statement} />
                </div>
                <div className="col">
                    {/* <AceEditor 
                        placeholder="Start typing your code here"
                        // mode={problem.languages[0].language}
                        mode="cpp"
                        theme="monokai"
                        onChange={onChange}
                        name="UNIQUE_ID_OF_DIV"
                        value={problem.languages[0]['starter code']}
                        editorProps={{ $blockScrolling: true }}
                    /> */}
                    <AceEditor
                        placeholder="Placeholder Text"
                        mode={problem.languages[0].language}
                        // mode="c_cpp"
                        theme="monokai"
                        name="blah2"
                        // onLoad={this.onLoad}
                        onChange={onChange}
                        fontSize={14}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        // value={`function onLoad(editor) {
                        // console.log("i've loaded");
                        // }`}
                        value={problem.languages[0]['starter code']}
                        setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true,
                        showLineNumbers: true,
                        tabSize: 2,
                        }}
                    />
                        {/* <ReactAce
                            mode="c_cpp"
                        /> */}
                </div>
            </div>
        </div>
    );
}

export default ProblemDesc;