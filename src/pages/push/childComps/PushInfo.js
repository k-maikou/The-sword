import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'

class ProfileUser extends Component {

  async form_submit(e) {
    e.preventDefault();
    let fd = new FormData(e.target);
    fd.append('token', localStorage.getItem('token'));

    let {data} = await this.$axios.post(this.$baseurl + '/topic', fd);
    this.$bus.emit('showToast', data.text);
    
    if (data.code === 1) {
      this.props.history.push({pathname: '/'});
    }
    console.log(data)
  }

  render() {
    return (
        <div className='push-info'>
          <form onSubmit={e => {this.form_submit(e)}}>
            上传文件：<input type="file" name="file1" /> <br />
            填写内容：<br/>
            <textarea name="content" id="push-text" cols="30" rows="10"></textarea><br/>
            <input type="submit" value="提交" className='btn' />
          </form>
        </div>
    )
  }
}

export default withRouter(ProfileUser);