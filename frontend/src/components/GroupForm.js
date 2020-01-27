import React, { Component } from 'react';
import API from '../helpers/API';
import { hoursToTime, hoursOfTheDay } from '../helpers/Hours';

export default class GroupList extends Component {
   constructor(props) {
      super(props);
      this.state = { 
         description: '',
         date: new Date().toISOString().slice(0, 10),
         start: 0,
         end: 1
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
      this.setState({ 
         start: parseInt(e.target.value, 10), 
         end: parseInt(e.target.value, 10) + 1
      });
   }
   handleEndChange(e) {
      this.setState({ end: parseInt(e.target.value, 10) });
   }
   handleSubmitButtonClick() {
      // TODO: Redux
      API.post(`/groups`, this.state).then(() => window.location.reload());
   }
   range(start, end) {
      const count = end - start;
      return Array.apply(0, Array(count))
         .map((element, index) => index + start);
   }
   createStartTimeList() {
      const date = new Date(this.state.date);
      const hoursOfThisDate = hoursOfTheDay(date);
      const hours = this.range(0, hoursOfThisDate);
      return hours.map(hour =>
         <option value={hour}>{hoursToTime(hour)}</option>
      );
   }
   createEndTimeList() {
      const maxDuration = 6;
      const date = new Date(this.state.date);
      const hoursOfThisDate = hoursOfTheDay(date) + 1;
      const hours = this.range(
         this.state.start + 1, 
         Math.min(this.state.start + 1 + maxDuration, hoursOfThisDate)
      );
      return hours.map(hour =>
         <option value={hour}>{hoursToTime(hour)}</option>
      );
   }
   render() {
      return <div className="container">
         <div className="columns is-variable is-8">
            <div className="column is-three-fifths">
               <h2 className="title is-4">Eine neue Lerngruppe erstellen</h2>
               <div className="field is-horizontal">
                  <div className="field-label is-normal">
                     <label className="label has-text-white">Beschreibung</label>
                  </div>
                  <div className="field-body">
                     <div className="field">
                        <div className="control">
                           <input value={this.state.description} onChange={this.handleDescriptionChange} className="input" type="text" placeholder="Mathe III für Informatiker"/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="field is-horizontal">
                  <div className="field-label is-normal">
                     <label className="label has-text-white">Datum</label>
                  </div>
                  <div className="field-body">
                     <div className="field">
                        <div className="control">
                           <input value={this.state.date} onChange={this.handleDateChange} className="input" type="date" min="2020-01-01"/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="field is-horizontal">
                  <div className="field-label is-normal">
                     <label className="label has-text-white">Von</label>
                  </div>
                  <div className="field-body">
                     <div className="field">
                        <div className="control">
                           <div className="select is-fullwidth">
                              <select value={this.state.start} onChange={this.handleStartChange}>
                              {this.createStartTimeList()}
                              </select>
                           </div>
                        </div>
                     </div>
                     <div className="field-label is-normal">
                        <label className="label has-text-white">Bis</label>
                     </div>
                     <div className="field">
                        <div className="control">
                           <div className="select is-fullwidth">
                              <select value={this.state.end} onChange={this.handleEndChange}>
                              {this.createEndTimeList()}
                              </select>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="field is-horizontal">
                  <div className="field-label">
                  </div>
                  <div className="field-body">
                     <div className="field">
                        <div className="control">
                           <button onClick={this.handleSubmitButtonClick} className="button is-primary">
                              <span className="icon"><i className="oi oi-plus"></i></span>
                              <span>Erstellen</span>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   }
}

