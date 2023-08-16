import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPerson } from '../../redux/actions/person'

import { nanoid } from 'nanoid'

class Person extends Component {

    addPerson = () => {
        const name = this.nameNode.value;
        const age = this.ageNode.value * 1;
        const personObj = {
            id: nanoid(),
            name,
            age
        };
        this.props.addPerson(personObj);
        this.nameNode.value = '';
        this.ageNode.value = '';
    }

    render() {
        console.log('PersontUI props:', this.props);
        return (
            <div>
                <h2>我是Person组件,上方组件求和为{this.props.sum}</h2>
                <input ref={cur => this.nameNode = cur} type="text" placeholder='输入名字' />
                <input ref={cur => this.ageNode = cur} type="text" placeholder='输入年龄' />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.persons.map((person) => {
                            return <li key={person.id}>{person.name}---{person.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({ persons: state.persons, sum: state.sum }),  // 映射状态
    {   //映射操作状态的方法
        addPerson
    }
)(Person)
