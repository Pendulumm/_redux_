/* 
    该文件用于汇总所有的reducer为一个总的reducer
*/


// 引入为Count组件服务的reducer
import sum from './count'
// 引入为Person组件服务的reducer
import persons from './person'
// 引入combineReducers用于汇总多个reducer
import { combineReducers } from 'redux'

// 合并各个reducer
// combineReducers传入的对象就是redux里保存的总状态对象
export default combineReducers({
    sum,
    persons
})
