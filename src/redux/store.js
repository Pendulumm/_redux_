/*
    该文件专门用于暴露一个store对象，整个应用只有一个store对象 
*/

// 引入createStore,专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware, combineReducers } from 'redux'
// 引入为Count组件服务的reducer
import countReducer from './reducers/count'
// 引入为Person组件服务的reducer
import personReducer from './reducers/person'
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'

// 合并各个reducer
// combineReducers传入的对象就是redux里保存的总状态对象
const reducers = combineReducers({
    sum: countReducer,
    persons: personReducer
})

// 暴露store
export default createStore(reducers, applyMiddleware(thunk))