import React, { Component } from 'react';
import './TopicCard.css'
import { Link } from 'react-router-dom';

class TopicCard extends Component {
    render() {
        return (
            <div className="col">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img className="flip-card-image" src={this.props.image} alt="Avatar"/>
                        
                        </div>
                        <div className="flip-card-back">
                            <div className="row">
                                <div className="col mt-5">
                                    <h1>{this.props.name}</h1>
                                    {/* <p>No of question : {this.props.total_questions}</p> */}
                                    {/* <p>No of question solved : {this.props.solved_questions}</p> */}
                                    {/* <div className="btn btn-primary" onClick={() => this.props.changeTopic(this.props.name)}>Solve</div> */}
                                    <Link to="/topic"><div className="btn btn-primary" onClick={() => this.props.changeTopic(this.props.name)}>Solve</div></Link>
                                    {/* <div className="btn btn-primary">Tutorial</div> */}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopicCard;