import { connect } from 'react-redux';
import Collect_ui from './Collect_ui'

const mapStateToProps = (state, props) => {
  console.log(props)
  return{
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return{

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Collect_ui);