import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import React from 'react';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      monsters:[],
      search:''
    }

    //this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }

  handleChange = (e) =>{
    this.setState({search:e.target.value })
  }

  render(){
    const {monsters,search} = this.state;
    const filteredMonsters = monsters.filter(monster=> monster.name.toLowerCase().includes(search.toLowerCase()));
    return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder="search monster" handleChange={ this.handleChange} />
        <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
  }
}

export default App;
