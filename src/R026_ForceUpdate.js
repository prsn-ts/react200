import React, { Component } from 'react';

class R026_ForceUpdate extends Component {
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
        this.state.StateString = '리액트';
        // 강제로 화면을 새로 고침하기 위해 render() 함수 호출(state 값도 바뀌고 화면 적용 O)
        this.forceUpdate();
        // StateString의 상태값 변경 후 확인
        console.log("StateString 상태값 변경 후 확인 : ",this.state.StateString);
    }

    render() {
        return (
            <div style={{padding: "0px"}}>
                <button onClick={(e) => this.StateChange('direct', e)}>state 직접 변경</button><br/>
                [state 변경하기] StateString : {this.state.StateString}
            </div>
        )
    }
}

export default R026_ForceUpdate;