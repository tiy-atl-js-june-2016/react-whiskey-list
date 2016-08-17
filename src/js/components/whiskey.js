import React from 'react';

class Whiskey extends React.Component {

  constructor () {
    super();
    this.state = { score: 0 };
  }

  updateScore () {
    this.state.score = this.state.score + 1;
    this.setState({ score: this.state.score });
  }

  render () {
    return (
      <div className="card" onClick={ this.updateScore.bind(this) }>
        <div className="card-content">
          <div className="content">
            <h3 className="title">{ this.props.whiskey.name }</h3>
            <p>Type: { this.props.whiskey.type }</p>
            <p>Score: { this.state.score }</p>
          </div>
        </div>
      </div>
    );
  }


}
export {Whiskey};