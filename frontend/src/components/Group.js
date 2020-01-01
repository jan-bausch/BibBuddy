import React, { Component } from 'react';
import API from '../helpers/API';
import { hoursToTime } from '../helpers/Hours';

export default class Group extends Component {
   handleJoinButtonClick(id) {
      API.put(`/groups/${id}/join`);
   }
   render() {
      return <div className="box">
         <p><b>{this.props.group.description}</b></p>
         <p>
            <span className="icon"><i className="oi oi-calendar"></i></span>
            {new Date(this.props.group.date).toLocaleDateString('de-DE', { weekday: 'short', month: 'long', day: 'numeric' })}
         </p>
         <p>
            <span className="icon"><i className="oi oi-clock"></i></span>
            {hoursToTime(this.props.group.start)} - {hoursToTime(this.props.group.end)}
         </p>
         <p>
            <span className="icon"><i className="oi oi-people"></i></span>
            {this.props.group.members} Teilnehmer
         </p>
         <div className="buttons is-right" style={{'marginTop': '.5rem'}}>
            <button 
               onClick={() => this.handleJoinButtonClick(this.props.group.id)} 
               className="button is-primary is-small"
               disabled={ this.props.group.is_member }
            >
               <span className="icon"><i className={`oi oi-${this.props.group.is_member ? 'check' : 'chevron-right'}`}></i></span>
               <span>{this.props.group.is_member ? 'Beigetreten' : 'Beitreten'}</span>
            </button>
         </div>
      </div>
   }
}
