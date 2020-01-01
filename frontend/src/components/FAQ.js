import React, { Component } from 'react';
import roomPhoto from '../../static/room.jpg';

export default class FAQ extends Component {
   render() {
      return <div className="container">
         <div className="columns is-variable is-8">
            <div className="column is-three-fifths">
               <h2 className="title is-4">Hast du Fragen?</h2>
               <p>
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
               </p>
            </div>
            <div className="column">
               <figure className="image is-4by3">
                 <img src={roomPhoto}/>
               </figure>
            </div>
         </div>
      </div>
   }
}

