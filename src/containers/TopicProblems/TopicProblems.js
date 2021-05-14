import React from 'react';
import problemData from '../../assets/tempJsonData/final_problems_data.json';
import { Link } from 'react-router-dom';

const TopicProblems = (props) => {
    const problems = problemData.map((problem, index) => {
        if(index <= 20) {
            return (
                <div key={index}>
                    <Link to="/problem">
                        <button class="btn btn-primary" onClick={() => props.problemSelect(index)}>{problem.name}</button>
                    </Link>
                </div>
            );
        }
    })
    return (
        <div>
            <h2 style={{textAlign: "center"}}>Problems</h2>
            {problems}
        </div>
    );
}

export default TopicProblems;