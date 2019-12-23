import React, { Component } from 'react';
import API from '../helpers/API';

export default class GroupList extends Component {
   constructor(props) {
      super(props);
      this.state = { 
         description: '',
         date: new Date().toISOString().slice(0, 10),
         start: 1,
         end: 2
      };
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this)  
      this.handleDateChange = this.handleDateChange.bind(this)  
      this.handleStartChange = this.handleStartChange.bind(this)  
      this.handleEndChange = this.handleEndChange.bind(this)  
      this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this)  
   }
   handleDescriptionChange(e) {
      this.setState({ description: e.target.value });
   }
   handleDateChange(e) {
      this.setState({ date: e.target.value });
   }
   handleStartChange(e) {
      this.setState({ start: parseInt(e.target.value, 10) });
   }
   handleEndChange(e) {
      this.setState({ end: parseInt(e.target.value, 10) });
   }
   handleSubmitButtonClick() {
      API.fetch(`/groups`, {
         method: 'POST',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(this.state)
      }).then(data => 
         console.log(data)
      );
   }
   render() {
      return <div className="container">
         <div className="field">
            <label className="label">Beschreibung</label>
            <div className="control">
               <input value={this.state.description} onChange={this.handleDescriptionChange} className="input" type="text" placeholder="Mathe III für Informatiker"/>
            </div>
         </div>
         <div className="field">
            <label className="label">Datum</label>
            <div className="control">
               <input value={this.state.date} onChange={this.handleDateChange} className="input" type="date" min="2020-01-01"/>
            </div>
         </div>
         <div className="field is-grouped">
            <label className="label">Zeit</label>
            <div className="control">
               <div className="select">
                  <select value={this.state.start} onChange={this.handleStartChange}>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                  </select>
               </div>
            </div>
            <div className="control">
               <div className="select">
                  <select value={this.state.end} onChange={this.handleEndChange}>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                  </select>
               </div>
            </div>
         </div>
         <div className="field">
            <div className="control">
               <button onClick={this.handleSubmitButtonClick} className="button">Erstellen</button>
            </div>
         </div>
      </div>
   }
}

