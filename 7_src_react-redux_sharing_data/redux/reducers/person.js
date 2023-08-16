import { ADD_PERSON } from '../constant'

// 初始化人的列表
const initState = [{ id: '001', name: 'tom', age: 18 }];

export default function personReducer(prevState = initState, action) {
    // console.log('personReducer>>> ');

    // 这里解构的data来自于该action creator返回的对象中的data属性
    const { type, data } = action;
    switch (type) {
        case ADD_PERSON:    // 若添加一个人
            return [data, ...prevState];
        default:
            return prevState;
    }
}