import React, { Component } from 'react';
import { CardList } from './componennts/card-list/card-list.component';
import { SearchBox } from './componennts/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField: ''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }
  render() {
    const { monsters, searchField} = this.state;
    const filterdMonsters =  monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className='App'>
        <h1>Monster Rolodex</h1>
        <SearchBox 
          placeholder='serach monsters'
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <br></br>
        <CardList monsters={filterdMonsters} />
      </div>
    );
  }
}

export default App;
