import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list-component";
import { Search } from "./components/search/search-component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFilter: "",
    };
    //this.handleInput = this.handleInput.bind();
  }

  //Life Cycle
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState({
          monsters: users,
        })
      );
  }

  //use arrow functions to call the function.
  handleInput = (e) => {
    this.setState({ searchFilter: e.target.value });
  };

  render() {
    //object destructuring.
    const { monsters, searchFilter } = this.state;
    const filterMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFilter.toLowerCase())
    );
    //
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search placeholder="search monsters" handleInput={this.handleInput} />
        <CardList monsters={filterMonster} />
      </div>
    );
  }
}

export default App;
