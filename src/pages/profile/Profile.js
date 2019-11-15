import React, {Component} from 'react'
import Toast from '../../components/common/toast/Toast'
import ProfileTab from './childComps/ProfileTab'
import ProfileMain from './childComps/ProfileMain'

class Profile extends Component {

  render() {
    return (
      <div className='main'>
        <ProfileTab />
        <ProfileMain />
        <Toast />
      </div>
    )
  }
}

export default Profile
