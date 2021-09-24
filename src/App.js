
import './App.css';
import { React, Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
class App extends Component {
  constructor () {
    super();
    this.state = {
      monsters : [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://raw.githubusercontent.com/NayHtwe24/NayHtwe24.github.io/master/united/players.json')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filterdMonsters = monsters.filter(monster=> 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      );
    return (
      <div className="App">
        <h1>Manchester United Teams (2021/2022) </h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList monsters={filterdMonsters}/>
    </div>
    );
  }
}

export default App;
