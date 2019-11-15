import React, {Component} from 'react';
import PushInfo from './childComps/PushInfo'

class Push extends Component {
  render() {
    return (
      <div className='main'>
        <PushInfo />
      </div>
    )
  }
}

export default Push;