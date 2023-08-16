/*
    1.该文件是用于为Count组件服务的reducer，reducer的本质就是一个函数,负责初始化和加工状态
    2.reducer函数会接到两个参数，分别为：之前的状态(prevState)，动作对象(action)
*/

import { INCREMENT, DECREMENT } from '../constant';

const initState = 0;    // 初始化状态
export default function countReducer(prevState = initState, action) {
    // console.log('in countReducer, prevState:', prevState);
    // console.log('in countReducer, action:', action);
    // console.log('--------------------------------------------------------');
    // 从action对象中获取:type,data
    const { type, data } = action;

    let incrementReturn = prevState + data
    let decrementReturn = prevState - data

    // 根据type决定如何加工数据
    switch (type) {
        case INCREMENT:   // 如果是.. 加
            // console.log('countReducer handling..., Increment Success!');
            // console.log('current value: ', incrementReturn);
            // console.log('--------------------------------------------------------');
            return incrementReturn;
        case DECREMENT:   // 如果是.. 减
            // console.log('countReducer handling..., Decrement Success!');
            // console.log('current value: ', decrementReturn);
            // console.log('--------------------------------------------------------');
            return decrementReturn;
        // 初始化的时候
        default:
            return prevState;
    }
}