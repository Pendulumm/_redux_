// 引入Count的UI组件
import CountUI from '../../components/Count'

// 引入 action creator
import { createIncrementAction, createDecrementAction } from '../../redux/count_action'

// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

// mapStateToProps函数的返回值作为状态传递给了UI组件
// mapStateToProps函数返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value----->状态
const mapStateToProps = (state) => {
    // console.log('state', state);
    return {
        count: state
    };
}
// mapDispatchToProps函数的返回值作为操作状态的方法传递给了UI组件
// mapDispatchToProps函数返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value----->操作状态的方法
const mapDispatchToProps = (dispatch) => {
    // console.log('dispatch', dispatch);
    return {
        increment: (number) => {
            // 通知redux执行加法
            dispatch(createIncrementAction(number))
        }
    };
}

// 使用connect()() 创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
