import React from 'react';

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      users: 0,
    };
  }
  joinMeeting = () => {
    this.setState({
      users: this.state.users + 1,
    });
  };
  render() {
    return (
      <div>
        <h1>Online Users: {this.state.users}</h1>
        <button onClick={this.joinMeeting}>Join Meeting</button>
        <h1>Statefull Component</h1>
      </div>
    );
  }
}

export default Demo;
