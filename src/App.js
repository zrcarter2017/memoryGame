import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";




class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clicked: [],
    wins: 0,
    losses: 0
  };

  shuffleCards = friends => {
      let i = this.state.friends.length - 1;
      for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = this.state.friends[i];
        this.state.friends[i] = this.state.friends[j];
        this.state.friends[j] = temp;
      }
      console.log(this.state.friends);
    }


  clickedFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    this.state.clicked.push(id);
    console.log(this.state.clicked);
    var counts = {};
    this.state.clicked.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
    console.log(counts);
    Object.entries(counts).forEach(
      ([key, value]) => {if (parseInt(value)>1) { console.log("You lose")}
      });
    this.shuffleCards();
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Don't touch a jellyfish more than once or you'll get stung</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            shuffleCards={this.shuffleCards}
            clickedFriend={this.clickedFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
