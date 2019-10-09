import React, { Component } from "react"

// Imported screen
import SplashScreen from "./src/screens/SplashScreen"
import LoginScreen from "./src/screens/LoginScreen"
import ForYouScreen from "./src/screens/ForYouScreen"

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
      <ForYouScreen />
    )
  }

  onLoading = () => {
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 3500)
  }

  // Life cycle function
  componentDidMount() {
    if(this.state.isLoading) {
      this.onLoading()
    }
  }
}

export default App