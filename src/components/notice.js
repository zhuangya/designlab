import React from "react";

import "./notice.css";

class Notice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    return (
      <div className={`notice${this.state.isToggleOn ? "" : " notice-active"}`}>
        <h3><i></i> {this.props.TitleH3}</h3>
        <p>{this.props.ContentP}</p>
        <i onClick={this.handleClick} onFocus={() => 0} className="notice-exit">
          {this.state.isToggleOn}
        </i>
      </div>
    );
  }
}
export default Notice;
