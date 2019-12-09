import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GroupList from './components/GroupList';
import Logo from '../static/logo.svg'

class App extends Component {
   render() {
      return <>
         <section className="section hero is-primary">
            <div className="hero-body">
               <div className="container">
                  <img src={Logo} />
                  <h1 className="title">BibBuddy</h1>
                  <h2 className="subtitle">Finde deine Lerngruppe</h2>
               </div>
            </div>
         </section>
         <section className="section">
            <GroupList/>
         </section>
      </>
   }
}

ReactDOM.render(<App/>, document.getElementById('app'));
