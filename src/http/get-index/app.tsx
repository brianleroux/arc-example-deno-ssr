import React, { Component } from 'https://unpkg.com/es-react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any
      h1: any
      h2: any
      p: any
    }
  }
}

type ClockState = {
  time: Date
}

// Clock has no properties, but the current state is of type ClockState
// The generic parameters in the Component typing allow to pass props
// and state. Since we don't have props, we pass an empty object.
export class App extends Component<{}, ClockState> {

  // The tick function sets the current state. TypeScript will let us know
  // which ones we are allowed to set.
  tick() {
    //@ts-ignore
    this.setState({
      time: new Date()
    });
  }

  // Before the component mounts, we initialise our state
  componentWillMount() {
    this.tick();
  }

  // After the component did mount, we set the state each second.
  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  // render will know everything!
  render() {
    //@ts-ignore
    return <p>The current time is {this.state.time.toLocaleTimeString()}</p>
  }
}
