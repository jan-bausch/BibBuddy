import React, { Component } from 'react';
import Group from './Group';
import API from '../helpers/API';

export default class GroupList extends Component {
   constructor(props) {
      super(props);
      this.state = { groups: [] };
   }
   componentDidMount() {
      let self = this;
      API.fetch('/calendar').then(data => 
         this.setState({groups: data.groups})
      ).catch(console.log)
   }
   createList() {
      return this.state.groups.map(group =>
         <Group/>
      );
   }
   render() {
      return <div>
         { this.createList() }
      </div>
   }
}
