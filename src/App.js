import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import Main from './components/content/Main'
import TabBar from './components/common/tabbar/TabBar'

import './network/axios'
import './assets/css/style.scss'
import './assets/css/animate.min.css'
import './assets/font-awesome-4.7.0/css/font-awesome.min.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Main />
          <TabBar />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
