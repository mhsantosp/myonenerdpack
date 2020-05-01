import React from 'react';

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class MyonenerdpackNerdletNerdlet extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      clase: "green",
    };
  }
  
  componentDidMount () {
    setInterval( () => {
      var color = this.state.clase;

      if (color == "green") {
        color = "yellow"
      }
      else if (color == "yellow") {
        color = "red"
      }
      else if (color == "red") {
        color = "green"
      }

      this.setState ({
        clase: color
      })
    },2000)
  }

  render() {
    return <div className="box">
      <div className={"state-"+this.state.clase}></div>
      <div className="box-content">
        <div className="msg">
          <label>Message to Update</label>
        </div>
      </div>
    </div>;
  }
}
