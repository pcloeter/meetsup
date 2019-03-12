import React from "react";

class GroupEvents extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchEvents()
  }

  render() {
    return (
      <div className="main-groups-container">
      <div className="find-banner">
        <h1 className="find-title">Find a Meet.Sup?</h1>
      </div>
      </div>
    )
  }


}