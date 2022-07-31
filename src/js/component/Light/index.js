import React from 'react';
import './Light.css';
import Circle from '../Circle';

const colors = {
  red: {
    backgroundColor: "#cc3232"
  },
  yellow: {
    backgroundColor: "#e7b416"
  },
  green: {
    backgroundColor: "#2dc937"
  },
  greenOff: {
    backgroundColor: "#203d01"
  },
  yellowOff: {
    backgroundColor: "#8a8e02"
  },
  redOff: {
    backgroundColor: "#3f0000"
  }
};

class Light extends React.Component {
  state = {
      red: colors.redOff,
      yellow: colors.yellowOff,
      green: colors.greenOff,
      next: 'yellow'
    }
    handeLightChange = () => {
      switch (this.state.next) {
        case "red":
          this.setState({
            red: colors.redOff,
            yellow: colors.yellowOff,
            green: colors.green,
            next: 'green'
          });
          break;
        case "yellow":
          this.setState({
            red: colors.redOff,
            yellow: colors.yellow,
            green: colors.greenOff,
            next: 'red'
          });
          break;
        case "green":
          this.setState({
            red: colors.red,
            yellow: colors.yellowOff,
            green: colors.greenOff,
            next: 'yellow'
          });
          break;
      }
    }

    componentDidMount() {
      setInterval(() => { 
        this.handeLightChange();
      }, 2000)
    }
  
  render() {
    return (
      <div class="light">
        <Circle color={this.state.red}/>
        <Circle color={this.state.yellow}/>
        <Circle color={this.state.green}/>
      </div>
    )
  }
}

export default Light;