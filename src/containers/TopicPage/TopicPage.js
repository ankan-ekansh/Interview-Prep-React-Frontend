import React from 'react';
import TopicCard from '../../components/TopicCard/TopicCard';
import './TopicPage.css';
import { useState, useEffect } from 'react';

const TopicPage = (props) => {
  const [topicDataState, setTopicDataState ] = useState();
  useEffect(() => {
    const fetchTopics = async () => {
      const response = await fetch('http://localhost:8888/api/topics')
      const data = await response.json();
      console.log(data[0]);
      let levels = data[0].levels;
      const topics = levels.map((level, levelIndex) => {
        return data[0][level];
      })
      const cards = topics.map((level, index) => {
        return (
          <div className="container" key={index}>
            <h2 className="level">Level {index+1}</h2>
            <div className="row">
            {
              level.map((topic, idx) => {
                return (
                  <TopicCard 
                    className="row" 
                    key={topic.name + idx} 
                    name={topic.name} 
                    image={topic.image} 
                    changeTopic={props.changeTopic}
                  />
                )
              })
            }
            </div>
          </div>
        )
      })
      setTopicDataState(cards)
    }
    fetchTopics()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
      return (
          <div className="row">
              {topicDataState}
          </div>
      )
}

export default TopicPage;