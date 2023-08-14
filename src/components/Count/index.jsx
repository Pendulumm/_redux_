import React, { Component } from 'react'


export default class Count extends Component {
    state = { carName: '奔驰c63' }

    // 加法
    increment = () => {
        const { value } = this.selectedNumber;
        this.props.increment(value * 1);
    }
    // 减法
    decrement = () => {
        const { value } = this.selectedNumber;
    }
    // 奇数再加
    incrementIfOdd = () => {
        const { value } = this.selectedNumber;
    }
    // 异步加
    incrementIfAsync = () => {
        const { value } = this.selectedNumber;
    }
    render() {
        console.log('CountUI props:', this.props);
        return (
            <div>
                {/* getState() 拿到的是redux保存的状态，redux里是reducer专门负责初始化和加工状态 */}
                {/* 页面上能有数据说明，countReducer被调用，Count组件当前并没有通知store处理state，这是因为store调用的为了拿到初始值 */}
                <h1>当前求和为:{this.props.count}</h1>
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
