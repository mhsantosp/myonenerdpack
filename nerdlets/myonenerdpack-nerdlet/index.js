import React from 'react';

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class MyonenerdpackNerdletNerdlet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clase: "green",
      message: "Message to Update",
    };
  }

  componentDidMount() {
    setInterval(() => {
      var color = this.state.clase;
      var message = this.state.message;

      if (color == "green") {
        color = "yellow"
        message = "Message State 2"
      }
      else if (color == "yellow") {
        color = "red"
        message = "Message State 3"
      }
      else if (color == "red") {
        color = "green"
        message = "Message to Update"
      }

      this.setState({
        clase: color,
        message: message
      })
    }, 2000)
  }

  render() {
    return <div className="box">
      <div className={"state-" + this.state.clase}></div>
      <div className="box-content">
        <div className="msg">
          <label>{this.state.message}</label>
        </div>
      </div>
    </div>;
  }
}
