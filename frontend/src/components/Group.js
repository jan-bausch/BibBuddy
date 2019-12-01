import React, { Component } from 'react';

export default class Group extends Component {
   render() {
      return <div className="box">
         <p><b>{this.props.group.description}</b></p>
         <p>{this.props.group.date}, {this.props.group.start} - {this.props.group.end} Uhr</p>
         <p>{this.props.group.members} Teilnehmer</p>
         <button className="button is-link is-small">Beitreten</button>
      </div>
   }
}
