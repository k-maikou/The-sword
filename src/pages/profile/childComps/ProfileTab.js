import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

class ProfileTab extends Component {
  render() {
    return (
      <div className='profile-btn'>
          <NavLink className='user' exact to='/profile/user'>注册</NavLink>
          <NavLink className='login' exact to='/profile/login'>登录</NavLink>
      </div>
    )
  }
}

export default ProfileTab