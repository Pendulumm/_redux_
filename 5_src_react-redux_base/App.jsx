import React, { Component } from 'react'
import Count from './containers/Count'

// 引入redux中的store
// 而不是在容器组件中引入
import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 给容器组件传递store */}
        {/* <Count store={store} testOwnProps={"ownProp"} />  */}
        <Count store={store} />
      </div>
    )
  }
}

