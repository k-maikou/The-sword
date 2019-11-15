import React, {Component} from 'react'

class Collect extends Component {

  constructor(props) {
    super(props)

    this.state = this.props.state;
    
  }

  render() {
    console.log(this.state.arr)
    return (
      <div className='main'>
        {this.state.arr.map((item) => (
          <li key={item._id}>{item.content}</li>
        ))}
      </div>
    )
  }
}

export default Collect