import { connect } from 'react-redux';
import Home_ul from './Home_ui';

// 这是容器组件，也被称为聪明的组件
const mapStateToProps = function(state, props){
    return {

    }
}

const mapDispatchToProps = function(dispatch){
    return {
      upData(item){
          // console.log(item);
        const action = {
          type: 'ADD',
          payload: item
        }
        dispatch(action)
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home_ul);