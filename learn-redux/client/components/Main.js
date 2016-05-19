import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxgram</Link>
        </h1>
        {/* Didn't understand why this React.cloneElement (Covered in Video 11)*/}
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
});

export default Main;