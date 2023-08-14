/*
    该文件专门为Count组件生成action对象
    action creator
*/

import { INCREMENT, DECREMENT } from './constant';

// 同步action
// 同步action，就是指action的值为为Object类型的一般对象 
export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })

// 异步action
// 异步action，就是指action的值为函数；异步action中一般都会调用同步action，异步action不是必须要用的
export const createIncrementAsyncAction = (data, time) => {
    // store调用的该函数
    // each middleware will be given the `dispatch` and `getState` functions as named arguments.
    return (dispatch) => {
        console.log(dispatch);
        setTimeout(() => {
            // 通知redux加data
            dispatch(createIncrementAction(data));
        }, time);
    }
}


