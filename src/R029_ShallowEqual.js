import React, { Component } from 'react';
import { shallowEqualArrays } from "shallow-equal";

class R029_ShallowEqual extends Component {
    constructor (props) {
        super(props);
        this.state = { StateString: 'react'}
    }
    // props 또는 state가 새로운 값으로 갱신되어서 렌더링이 발생하기 직전에 호출
    shouldComponentUpdate(nextProps, nextState) {
        // this.state 는 기존의 상태변수 값이, nextState는 setState 함수를 통해 바뀌는 상태변수의 값이 들어있다.
        console.log("this.state : ",this.state); // {StateString: 'react'}
        console.log("nextProps : ",nextProps); // {}
        console.log("nextState : ",nextState); // {StateString: '리액트'}
        console.log("StateString 값 체크 : ",shallowEqualArrays(this.state.StateString, nextState.StateString)); // 기존의 StateString과 바뀐 StateString의 값이 같으면 true, 다르면 false

        // return true 일때 화면이 한번 렌더링 된다.
        return !shallowEqualArrays(this.state.StateString, nextState.StateString)
    }

    componentDidMount() {
        const object = { react : '200'};
        const Array1 = ['리액트', object];
        const Array2 = ['리액트', object];
        const Array3 = ['리액트', { react : '200'}];

        console.log('shallowEqualArrays(Array1, Array2) : ' + shallowEqualArrays(Array1, Array2)); // 배열안에 동일한 객체인 object를 포함한 Array1와 Array2를 비교하는데 값이 같으므로 true
        console.log('shallowEqualArrays(Array2, Array3) : ' + shallowEqualArrays(Array2, Array3)); // 배열안에 { react : '200' } 값을 갖는 객체를 Array1, Array2가 둘다 포함하고 있지만 서로 다른 참조값을 가지고 있어서 false
        this.setState({StateString : '리액트'});
    }

    render() {
        console.log('render() 실행');
        return (
            <div>R029_ShallowEqual 예제 추가함</div>
        )
    } 
}

export default R029_ShallowEqual;