import React, { Component } from "react";
import Quote from "./quote";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  state = {
    quotes: [
      {
        text:
          "The greatest glory in living lies not in never falling, but in rising every time we fall",
        auth: "Nelson Mandela",
      },
      {
        text: "The way to get started is to quit talking and begin doing.",
        auth: "Walt Disney",
      },
      {
        text:
          "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        auth: "Oprah Winfrey",
      },
      {
        text: "Life is what happens when you're busy making other plans",
        auth: "John Lennon",
      },
    ],
    currentQuoteindex: Math.floor(Math.random() * 4),
  };
  handleNext() {
    const length = this.state.quotes.length;
    var index = Math.floor(Math.random() * length);
    while (index === this.state.currentQuoteindex) {
       index = Math.floor(Math.random() * length);
    }
    console.log(index);
    this.setState({ currentQuoteindex: index });
  }

  render() {
    const { currentQuoteindex, quotes } = this.state;
    return (
      <Quote
        text={quotes[currentQuoteindex].text}
        handleNext={() => this.handleNext()}
        auth={quotes[currentQuoteindex].auth}
      ></Quote>
    );
  }
}

export default App;
