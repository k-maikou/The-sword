import React, { Component } from 'react';
import querystring from 'querystring';

class Detail extends Component {

  constructor(props) {
    super(props)

    this.state = {
      list: {
        file:''
      }
    }
  }

  render() {

    return (
      <div className='main'>
        详情<br/>
        {this.state.list._id}<br/>
        {this.state.list.file && <img src={this.$baseurl + '/' + this.state.list.file} alt="" className='detail-img' />} <br/>
        {this.state.list.content}<br/>
      </div>
    )

  }

  async componentDidMount() {
    let query = querystring.parse(this.props.location.search.substring(1));

    let {data} = await this.$axios.get(this.$baseurl + '/topics?page=1&num=10&topicid=' + query.id);
    console.log(data);

    this.setState({
      list: {...data.data[0]}
    })
  }

}

export default Detail