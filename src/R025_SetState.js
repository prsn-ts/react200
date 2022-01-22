import React, { Component } from 'react';

class R025_SetState extends Component {
    constructor (props) {
        super(props);
        this.state = {
            StateString: 'react',
        }
        // StateString 초깃값 확인
        console.log("StateString 초깃값 : ",this.state.StateString);
    }

    StateChange = (flag) => {
        // state 변수 직접 변경(state 값은 바뀌지만 화면 적용 X)
        if(flag === 'direct') this.state.StateString = '리액트';
        // state 변수를 setState로 변경(state 값도 바뀌고 화면 적용 O)
        if(flag === 'setState') this.setState({StateString: '리액트'});
        // StateString의 상태값 변경 후 확인
        console.log("StateString 상태값 변경 후 확인 : ",this.state.StateString);
    }

    render() {
        return (
            <div style={{padding: "0px"}}>
                <button onClick={(e) => this.StateChange('direct', e)}>state 직접 변경</button>
                <button onClick={(e) => this.StateChange('setState', e)}>setState로 변경</button>
                [state 변경하기] StateString : {this.state.StateString}
            </div>
        )
    }
}

export default R025_SetState;