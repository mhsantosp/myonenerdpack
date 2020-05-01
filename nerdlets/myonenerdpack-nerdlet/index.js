import React from 'react';

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class MyonenerdpackNerdletNerdlet extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      verde: "green",
      amarillo: "yellow",
      rojo: "red"
    };
    console.debug("Nerdlet constructor", this.state); //eslint-disable-line
  }

  render() {
    return <div className="box">
      <div className={"state-"+this.state.verde}></div>
      <div className="box-content">
        <div className="msg">
          <label>Message to Update</label>
        </div>
      </div>
    </div>;
  }
}
