import React, {Component} from 'react';
import {EventEmitter} from 'events'
import ReactDOM from 'react-dom';
import App from './App';
import store from './store/index'
import { Provider } from 'react-redux'

const bus = new EventEmitter();
Component.prototype.$bus = bus;

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
