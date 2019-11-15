import React, { Component } from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group';

class Toast extends Component {

  constructor(props) {
    super(props)

    this.state = {
      str: '',
      arr: []
    }
    
  }

  showToast(str) {
    this.setState({
      arr: [...this.state.arr, {text: str, id: new Date().getTime()}]
    })

    setTimeout(() => {
      this.setState((prevState) => {
        prevState.arr.splice(0, 1,);
        return prevState;
      })
    }, 2000)
  }

  componentDidMount() {
    this.$bus.on('showToast', this.showToast.bind(this));
  }

  render() {
    return (
        <div className="toast">
          <TransitionGroup>
            {this.state.arr.map((item) => (
              <CSSTransition
              key={item.id}
              timeout={1000}
              classNames={{
                  enterActive:'fadeIn',
                  exitActive:'fadeOut',
              }}
              >
                <li className="animated">
                  { item.text }
                </li>
              </CSSTransition>
            ) )}
          </TransitionGroup>
        </div>
    )
  }
}

export default Toast;
