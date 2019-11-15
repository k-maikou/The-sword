import React, {Component, Fragment, lazy, Suspense} from 'react'
// import Home from '../../pages/home/Home'
// import Collect from '../../pages/collect/Collect'
// import Category from '../../pages/category/Category'
// import Profile from '../../pages/profile/Profile'
// import Push from '../../pages/push/Push'
// import Detail from '../../pages/detail/Detail'
import { Route } from 'react-router-dom'

const Home = lazy(() => import('../../pages/home/Home'));
const Collect = lazy(() => import('../../pages/collect/Collect'));
const Category = lazy(() => import('../../pages/category/Category'));
const Profile = lazy(() => import('../../pages/profile/Profile'));
const Push = lazy(() => import('../../pages/push/Push'));
const Detail = lazy(() => import('../../pages/detail/Detail'));

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path='/' exact component={Home} />
          <Route path='/collect' component={Collect} />
          <Route path='/category' component={Category} />
          <Route path='/profile' component={Profile} />
          <Route path='/push' component={Push} />
          <Route path='/detail' component={Detail} />
        </Suspense>
      </Fragment>
    )
  }
}

export default Main;