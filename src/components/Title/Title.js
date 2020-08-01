import React from "react";

class Title extends React.Component {
  render() {
    const title = this.props.title;
    console.log(title);
    return <div>{title}</div>;
  }
}

export default Title;
