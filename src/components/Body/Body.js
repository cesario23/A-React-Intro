import React, { Component } from 'react'
import "./Body.css"
import horse from './images/horse-6276602_1920.jpg'
import Square from '../Square/Square'
import city from './images/city.jpeg'
import houses from './images/houses.jpeg'

export class Body extends Component {
    render() {
        return (
            <div className="body">
                <div>
                    <p>
                        <img src= {horse} alt="horse"/>
                        <p>
                        Horses are muscular animals with a long tail made up of coarse hair, a long, thick neck draped with a mane down the midline, and an elongated head and skull. Humans have created hundreds of different horse breeds through selective breeding, which has resulted in many different horse coat colors, including chestnut, gold with a white mane and tail (palomino), spotted, completely black and more, according to Oklahoma State University. 
                        </p>
                    </p>
                    <div style={{display: "flex"}}>
                    <Square name="city" images={city}/>
                    <Square name="houses" images={houses}/>
                    <Square name="horse" images={horse}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body
