import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      arr: []
    }
  }

  save(item) {
    this.props.upData(item);
    // console.log(this.props)
    
  }

  render() {
    return (
      <div className='main'>
        首页
        {this.state.arr.map((item, index) => (
          <li key={item._id}>
            <Link to={"/detail?id=" + item._id}>
              {item.content}
            </Link>
            <button onClick={e => this.save(item)}>收藏</button>
          </li>
        ))}
      </div>
    )
  }

  async componentDidMount() {
    let {data} = await this.$axios.get(this.$baseurl + '/topics?page=1&num=10');
    this.setState({
      arr: [...data.data]
    })
  }

}

export default Home