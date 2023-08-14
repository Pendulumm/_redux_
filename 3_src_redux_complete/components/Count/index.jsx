import React, { Component } from 'react'
// 引入store，用于获取redux中保存的状态
import store from '../../redux/store';
// 引入actionCreator,专门用于创建action对象
import { createIncrementAction, createDecrementAction } from '../../redux/count_action'


export default class Count extends Component {
    state = { carName: '奔驰c63' }

    /*
        componentDidMount() {
        // 监测redux中状态的变化，只要变化，就调用render
        store.subscribe(() => {
            // 只要redux中任何一个状态发生改变就会调用该回调
            // console.log('state changed');

            // setState有效率问题
            this.setState({});
        })
    }
    */

    // 加法
    increment = () => {
        const { value } = this.selectedNumber;
        // 通知redux 加 value
        // dispatch() 的参数是 action，返回值是 参数action
        const dispatchReturn = store.dispatch(createIncrementAction(value * 1))
        // console.log('dispatchReturn:', dispatchReturn);
        console.log('--------------------------------------------------------');
        // redux只能管理状态，redux中状态的更改不会引起页面更新
    }
    // 减法
    decrement = () => {
        const { value } = this.selectedNumber;
        store.dispatch(createDecrementAction(value * 1))
    }
    // 奇数再加
    incrementIfOdd = () => {
        const { value } = this.selectedNumber;
        const count = store.getState();
        if (count % 2 !== 0) {
            store.dispatch(createIncrementAction(value * 1))
        }
    }
    incrementIfAsync = () => {
        const { value } = this.selectedNumber;
        setTimeout(() => store.dispatch(createIncrementAction(value * 1)), 500);
    }
    render() {
        // console.log(store);

        return (
            <div>
                {/* getState() 拿到的是redux保存的状态，redux里是reducer专门负责初始化和加工状态 */}
                {/* 页面上能有数据说明，countReducer被调用，Count组件当前并没有通知store处理state，这是因为store调用的为了拿到初始值 */}
                <h1>当前求和为:{store.getState()}</h1>
                <select ref={currentNode => this.selectedNumber = currentNode}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incrementIfAsync}>异步加</button>&nbsp;
            </div>
        )
    }
}
