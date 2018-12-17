import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Wrapper from "./components/Wrapper/Wrapper";
import Footer from "./components/Footer/Footer";
import HeroCard from "./components/HeroCard/HeroCard";
import heros from "./heros.json";
import "./App.css";

function shuffleHeros(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  state = {
    heros,
    currentScore: 0,
    topScore: 0,
    trueFalse: "Click an image to begin!",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.setState({
        trueFalse: "Darn, this hero was already selected!"
      });
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      trueFalse: "Nice choice! Select another hero!"
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ trueFalse: "You've defeated Sauron!" });
      this.handleReset();
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      trueFalse: "Click an image to begin!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledHeros = shuffleHeros(heros);
    this.setState({ friends: shuffledHeros });
  };

  render() {
    return (
      <div>
        <Navbar 
        score={this.state.currentScore}
        topScore={this.state.topScore}
        trueFalse={this.state.trueFalse}
        />
        <Jumbotron />
        <Wrapper>
          {this.state.heros.map(hero => ( 
            <HeroCard
            handleClick={this.handleClick}
            handleShuffle={this.handleShuffle}
            handleReset={this.handleReset}
            handleIncrement={this.handleIncrement}
            id={hero.id}
            key={hero.id}
            name={hero.name}
            image={hero.image}
            race={hero.race}
            realm={hero.realm}
          />
          ))}
          </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
