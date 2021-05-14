import React from 'react';
import { useState } from 'react';
import Tutorials from '../../assets/tempJsonData/tutorials.json';
import './TopicTutorials.css'
import TopicProblems from '../TopicProblems/TopicProblems';

const TopicTutorials = (props) => {
    const [vidSrcState, setVidSrcState] = useState({
        vidSrc: ''
    })
    // let currentSrc = '';
    const changeSrc = (newSrc) => {
        // currentSrc = newSrc;
        console.log(newSrc);
        setVidSrcState({
            vidSrc: newSrc
        })
    }
    // useEffect = () => {
    //     fetch()
    // }
    const tutorials = Tutorials[props.name].map((tutorial, index) => {
        return (
            <li key={index}>
                <div className="container">
                    <button className="btn btn-primary" onClick={() => changeSrc(tutorial.src)}>
                        {tutorial.name}
                    </button>
                </div>
            </li>
        )
    });
    return (
        <div className="container">
            <h1 className="tutorial-row"style={{textAlign: "center"}}>{props.name}</h1>
            <h2 className="tutorial-row"style={{textAlign: "center"}}>Tutorials</h2>
            <div className="row tutorial-row">
                <div className="col">
                    <ol>
                        {tutorials}
                    </ol>
                </div>
                <div className="col">
                    <div>
                        <iframe title={props.name + 'Tut'} src={vidSrcState.vidSrc} style={{width: "420px", height: "315px"}}></iframe>
                    </div>
                </div>
            </div>
            <TopicProblems problemSelect={props.problemSelect}/>
        </div>
        
    )
}

export default TopicTutorials;