import React, {Component, Fragment} from 'react'
import ProfileLogin from './ProfileLogin'
import ProfileUser from './ProfileUser'
import { Route } from 'react-router-dom'

class ProfileTab extends Component {
  render() {
    return (
      <Fragment>
        <Route path='/profile/user' exact component={ProfileUser} />
        <Route path='/profile/login' exact component={ProfileLogin} />
      </Fragment>
    )
  }
}

export default ProfileTab