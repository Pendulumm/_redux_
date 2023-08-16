import React, { Component } from 'react'

// 引入 action creator
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/actions/count'

// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

// 定义UI组件
class Count extends Component {
    state = { carName: '奔驰c63' }

    // 加法
    increment = () => {
        const { value } = this.selectedNumber;
        this.props.increment(value * 1);
    }
    // 减法
    decrement = () => {
        const { value } = this.selectedNumber;
        this.props.decrement(value * 1);
    }
    // 奇数再加
    incrementIfOdd = () => {
        const { value } = this.selectedNumber;
        if (this.props.count % 2 !== 0) {
            this.props.increment(value * 1);
        }
    }
    // 异步加
    incrementIfAsync = () => {
        const { value } = this.selectedNumber;
        this.props.incrementAsync(value * 1, 500)
    }
    render() {
        // console.log('CountUI props:', this.props);
        return (
            <div>
                {/* getState() 拿到的是redux保存的状态，redux里是reducer专门负责初始化和加工状态 */}
                {/* 页面上能有数据说明，countReducer被调用，Count组件当前并没有通知store处理state，这是因为store调用的为了拿到初始值 */}
                <h2>我是Count组件,下方组件总人数为:{this.props.personNum}</h2>
                <h4>当前求和为:{this.props.count}</h4>
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


// 使用connect()() 创建并暴露一个Count的容器组件
export default connect(
    // 当合并了reducers，也就意味着合并了各个reducer使用的state，现在的state是总状态
    state => ({ count: state.sum, personNum: state.persons.length }),
    {
        increment: createIncrementAction,
        /* 
            increment: (...args) => dispatch(createIncrementAction(...args));
        */
        decrement: createDecrementAction,
        incrementAsync: createIncrementAsyncAction
    }

)(Count)
