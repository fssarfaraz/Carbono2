import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet, Image, Pressable } from 'react-native';
import { Provider as PaperProvider, Appbar } from 'react-native-paper';
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      mode: 'vsComp',
    };
  }

  // Function to handle clicks on the squares
  handleClick(i) {
  const squares = this.state.squares.slice();
  if (calculateWinner(squares) || squares[i]) {
    return;
  }

  const playerSymbol = this.state.xIsNext ? 'X' : 'O';
  squares[i] = playerSymbol;

  this.setState({
    squares: squares,
    xIsNext: !this.state.xIsNext,
  });

  if (this.state.mode === 'vsComp') {
    // Check for winner
    const winner = calculateWinner(squares);
    if (!winner) {
      // Delay computer's move by 1 second
      setTimeout(() => {
        if (this.state.squares.some(square => square === null)) {
          let computerMove;
          do {
            computerMove = Math.floor(Math.random() * 9);
          } while (squares[computerMove] !== null);

          squares[computerMove] = this.state.xIsNext ? 'X' : 'O';

          this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
          });
        }
      }, 500);
    }
  }
}

  // Function to restart the game
  restartGame() {
    this.setState({
      // Set default values to reset the game
      squares: Array(9).fill(null),
      xIsNext: true,
    });
  }

  toggleMode() {
    if (this.state.mode === 'vsComp') {
      this.setState({
        mode: 'vsPlayer',
      });
    } else {
      this.setState({
        mode: 'vsComp',
      });
    }
    this.restartGame();
  }

  // Function to render the squares while playing
  renderSquare(i) {
    const content = this.state.squares[i];
    let imageSource;

    if (content === 'X') {
      imageSource = require('../assets/X.png');
    } else if (content === 'O') {
      imageSource = require('../assets/O.png');
    }

    return (
      // render individual squares with images
      <TouchableOpacity
        style={styles.square}
        onPress={() => this.handleClick(i)}
      >
        {content && (
          <Image source={imageSource} style={styles.squareImage} />
        )}
      </TouchableOpacity>
    );
  }

  // Function to render everything inside the component
  render() {
  const winner = calculateWinner(this.state.squares);
  let status;
  if (winner) {
    if (winner === 'X') {
      this.state.mode === 'vsComp' ? status = 'You win!' : status = 'Player 1 wins!'
    } else {
      this.state.mode === 'vsComp' ? status = 'You lose! :(' : status = 'Player 2 wins!'
    }
  } else if (this.state.squares.every((square) => square !== null)) {
    status = 'Draw!';
  } else {
    status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
  }

  // Rest of the render() function


    // return the entire game screen
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Eco Tac Toe
        </Text>
        <View style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 20,
        }}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </View>
        <View style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </View>
        <View style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </View>
        <Text style={styles.status}>
          {status}
        </Text>
        <Button
          title="Restart Game"
          onPress={() => this.restartGame()}
          style={styles.restartButton}
        />
        <Button
          title={this.state.mode === 'vsComp' ? 'Switch to 2 player mode' : 'Switch to 1 player mode'}
          onPress={() => this.toggleMode()}
          style={{backgroundColor:'#223824', borderRadius: 8}}
        />
      </View>
    );
  }
}

// Stylings
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFE0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  square: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareText: {
    fontSize: 40,
  },
  status: {
    marginVertical: 20,
    fontSize: 20,
  },
  restartButton: {
    marginTop: 10,
    // marginBottom: 40,
    backgroundColor: '#223824',
    borderRadius: 8,
  },
  modeButton: {
    marginVertical: 40,
  },
  squareImage: {
    width: 55,
    height: 55,
  },
});

// Function to determine the winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// Return the entire component
export default function TicTac() {
  const navigation = useNavigation();

  return (
    <PaperProvider>
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome5 name="chevron-left" size={30} color="#01427A" />
        </Pressable>
      </View>
      <TicTacToe />
    </PaperProvider>
  );
}
