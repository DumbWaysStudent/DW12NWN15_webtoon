import React, { Component } from "react"

// Imported screen
import SplashScreen from "./src/screens/SplashScreen"
import LoginScreen from "./src/screens/LoginScreen"

class App extends Component {
  constructor() {
    super() 
    this.state = {
      isLoading: true
    }
  }
  
  render() {
    const { isLoading } = this.state

    // If is loading
    if(isLoading) {
      return(
        <SplashScreen />
      )
    }
    
    return(
      <LoginScreen />
    )
  }

  onLoading = () => {
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 3500)
  }

  // Life cycle function
  componentDidMount() {
    this.onLoading()
  }
}

export default App