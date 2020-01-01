import React, { Component } from 'react';
import roomPhoto from '../../static/room.jpg';

export default class FAQ extends Component {
   render() {
      return <div className="container">
         <h2 className="title is-4">Hast du Fragen?</h2>
         <div className="columns is-variable is-8">
            <div className="column is-three-fifths">
               <strong>
                  <span class="icon has-text-primary">
                     <i class="oi oi-caret-right"></i>
                  </span>
                  Was ist BibBuddy?
               </strong>
               <p>BibBuddy ist ein Uniprojekt im Rahmen des Praktikum <a href="https://www.edutec.guru/teaching/">Educational Technologies</a> in der Goethe Universität. Das Projekt soll Lernen mithilfe von Technologie unterstützen.</p>
               <br/>
               <strong>
                  <span class="icon has-text-primary">
                     <i class="oi oi-caret-right"></i>
                  </span>
                  Wo finde ich die Lernräume?
               </strong>
               <p>Die Gruppenräume befinden sich in der <a href="https://www.ub.uni-frankfurt.de/bruw/">Bibliothek Recht und Wirtschaft</a> auf dem Campus Westend.</p>
               <br/>
               <strong>
                  <span class="icon has-text-primary">
                     <i class="oi oi-caret-right"></i>
                  </span>
                  Welche Daten werden gespeichert?
               </strong>
               <p>Personenbezogene Daten werden nicht auf dem Server gespeichert, sondern nur im <a href="https://support.mozilla.org/de/kb/cookies-informationen-websites-auf-ihrem-computer">Browser-Cookie</a>. Informationen über Lerngruppen werden nach dem Treffen gelöscht.</p>
               <br/>
               <strong>
                  <span class="icon has-text-primary">
                     <i class="oi oi-caret-right"></i>
                  </span>
                  Wo finde ich weitere Informationen?
               </strong>
               <p>Informationen über BibBuddy und der Quellcode des Projekts sind auf <a href="https://github.com/jfbausch/BibBuddy">Github</a>.</p>
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

