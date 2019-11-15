import React , { Component } from 'react'
import { NavLink } from 'react-router-dom'

class TabBar extends Component {
  render() {
    return (
      <div className='tab-bar'>
        <div>
          <NavLink to='/' exact>
            <font className='fa fa-home'></font>
            首页
          </NavLink>
        </div>
        <div>
          <NavLink to='/collect'>
            <font className='fa fa-indent'></font>
            收藏
          </NavLink>
        </div>
        <div>
          <NavLink to='/category'>
            <font className='fa fa-align-left'></font>
            分类
          </NavLink>
        </div>
        <div>
          <NavLink to='/push'>
            <font className='fa fa-arrow-up'></font>
            发布
          </NavLink>
        </div>
        <div>
          <NavLink to='/profile'>
            <font className='fa fa-user-circle'></font>
            我的
          </NavLink>
        </div>
      </div>
    )
  }
}

export default TabBar