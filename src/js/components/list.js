import React from 'react';

import {Whiskey} from './whiskey';

class List extends React.Component {

  showWhiskeys () {
    return this.props.whiskeys.map( w => <Whiskey whiskey={w} />);
  }

  render () {
    return (
      <ul className="whiskey-list">
        { this.showWhiskeys() }
      </ul>
    );
  }
}
export {List};