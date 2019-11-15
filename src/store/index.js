import {  createStore } from 'redux'

const defaultState = {
  arr: []
}

const reducers = (state = defaultState, action) => {

  switch (action.type) {
    case 'ADD':
      if (state.arr.indexOf(action.payload) !== -1) {
        console.log('你已收藏过该商品~');
      }else{
        state.arr.push(action.payload);
        console.log(state.arr);
      }

      // let pal = state.arr.find(item => item._id === action.payload._id);
      // if (pal) {
      //   console.log('你已收藏过该商品！')
      //   return
      // }else{
      //   state.arr.push(action.payload);
      //   console.log(state.arr)
      // }

      
      // if (state.arr.includes(action.payload)) {
      //   console.log('你已收藏过该商品！')
      //   return;
      // }else{
      //   state.arr.push(action.payload);
      //   console.log(state.arr)
      // }
      break;
    default:
  }

  return state;
}


const store = createStore(reducers);

export default store;
