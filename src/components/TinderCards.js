import React,{ useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import CardButtons from './CardButtons'

function TinderCards() {
    const [pepoles,setPepoles] = useState([]);
    useEffect(()=>{
        fetch('https://tinderclonemren.herokuapp.com/tinder/card')
        .then(response=>response.json())
        .then(results=>setPepoles(results))
    },[])
    return (
        <div>
            <div className="tinderCards_container">
                {
                    pepoles.map((person)=>(
                        <TinderCard 
                            className="swipe"
                            key={person.name}
                            preventSwipe={["up", "down"]}
                        >
                            <div style={{
                                backgroundImage:`url(${person.imgUrl})`}}
                                className="card">
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                    ))
                }
            </div>
            <CardButtons/>
        </div>
    )
}

export default TinderCards
