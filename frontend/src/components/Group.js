import React, { Component } from 'react';
import API from '../helpers/API';

export default class Group extends Component {
   handleJoinButtonClick(id) {
      API.fetch(`/groups/${id}/join`, {method: 'PUT'}).then(data => 
         console.log(data)
      );
   }
   render() {
      return <div className="box">
         <p><b>{this.props.group.description}</b></p>
         <p>{this.props.group.date}, {this.props.group.start} - {this.props.group.end} Uhr</p>
         <p>{this.props.group.members} Teilnehmer</p>
         <button 
            onClick={() => this.handleJoinButtonClick(this.props.group.id)} 
            className="button is-link is-small"
            disabled={ this.props.group.is_member }
         >
            Beitreten
         </button>
      </div>
   }
}
