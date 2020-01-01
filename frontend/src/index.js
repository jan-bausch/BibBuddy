import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GroupList from './components/GroupList';
import GroupForm from './components/GroupForm';
import FAQ from './components/FAQ';
import Logo from '../static/logo.svg'
import './css/index.css'

class App extends Component {
   render() {
      return <>
         <section className="section hero is-primary">
            <div className="hero-body">
               <div className="container">
                  <div className="columns is-mobile">
                     <div className="column is-narrow">
                        <img id="logo" src={Logo} />
                     </div>
                     <div className="column is-narrow">
                        <h1 className="title">BibBuddy</h1>
                        <h2 className="subtitle">Finde deine Lerngruppe</h2>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="section">
            <GroupList/>
         </section>
         <section className="section hero is-dark">
            <div className="hero-body">
               <section className="section">
                  <GroupForm/>
               </section>
            </div>
         </section>
         <section className="section">
            <FAQ/>
         </section>
      </>
   }
}

ReactDOM.render(<App/>, document.getElementById('app'));
