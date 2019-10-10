import React, { Component } from "react"

// Navigator
import AppNavigator from "./src/routes/AppNavigator";

// Imported screen
import SplashScreen from "./src/screens/SplashScreen"

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
      <AppNavigator />
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