import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.components';
import { SearchBox } from './components/SearchBox/Search-box.component';

class App extends Component 
{
  constructor() {
    super();
    
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
 
  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render() {

    const { monsters,searchField } = this.state;

    const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField))

    return (
      <div className="App">
         <h1>Monsters Rolodex</h1>
         <SearchBox
           placeholder = 'Search Monster'
           handleChange = {this.handleChange}
         />
         <CardList monsters = {filteredMonster}>
         </CardList>
      </div>
    );   
  }
}

export default App;
