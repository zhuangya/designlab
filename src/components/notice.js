import React from "react";

import "./notice.css";

// const Notice = () => (
//   <div className="notice">
//     <i></i>
//     <h3>通知</h3>
//     <p>通知输出的内容</p>
//   </div>
// );

// export default Notice;

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
        <i></i>
        <h3>通知</h3>
        <p>通知输出的内容</p>
        <i onClick={this.handleClick} onFocus={() => 0} className="notice-exit">
          {this.state.isToggleOn}
        </i>
      </div>
    );
  }
}

export default Notice;
