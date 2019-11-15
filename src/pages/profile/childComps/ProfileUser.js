import React, {Component} from 'react';

class ProfileUser extends Component {

  async form_submit(e) {
    e.preventDefault()
    
    let fd = new FormData(e.target);
    let {data} = await this.$axios.post(this.$baseurl + '/user', fd);

    console.log(data);
    this.$bus.emit('showToast', data.text);
  }

  async loadCaptCha(){
    let {data} = await this.$axios.get(this.$baseurl+'/svgcaptcha');
    let {text, captcha} = data;

    this.refs.text.value = text;
    this.refs.token.value = captcha;
    this.refs.verification.innerHTML = data.data;
  }

  componentDidMount() {
    this.loadCaptCha();
  }

  render() {
    return (
      <div className='profile-user'>
        <form onSubmit={e => {this.form_submit(e)}}>
          用 户： <input ref="username" type="text" name="username"/><br />
          密 码： <input ref="password" type="password" name="password"/><br />
          手 机： <input ref="phone" type="text" name="tel"/><br />
          头 像： <input type="file" name="file1"/><br />
          验证码：<div ref="verification"></div>
                <input ref="text" name="cap"/>
                <input ref="token" type="hidden" name="cap_token"/><br />
          <input type="submit" value="提交" className='btn' />
        </form>
      </div>
    )
  }
}

export default ProfileUser;