import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GroupList from './components/GroupList';

class App extends Component {
   render() {
      return <div>
         <GroupList/>
      </div>
   }
}

ReactDOM.render(<App/>, document.getElementById('app'));
