import React, { Component } from 'react';
import Group from './Group';
import API from '../helpers/API';

export default class GroupList extends Component {
   constructor(props) {
      super(props);
      this.state = { groups: [] };
   }
   componentDidMount() {
      API.get('/groups').then(response => 
         this.setState({groups: response.data.groups})
      );
   }
   createList() {
      return this.state.groups.map(group =>
         <div className="column is-one-third">
            <Group key={group.id} group={group} />
         </div>
      );
   }
   render() {
      return <div className="container">
         <div className="columns is-multi-line">
         { this.createList() }
         </div>
      </div>
   }
}
