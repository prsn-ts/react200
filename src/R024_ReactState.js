import React, { Component } from 'react';

class R024_ReactState extends Component {
    constructor (props) {
        super(props);
        // 한 컴포넌트 안에서 전역 변수처럼 사용 가능한 state는 constructor 안에서 초기값 설정
        this.state = {
            StateString: this.props.reactString,
            StateNumber: 200,
        }
    }

    render() {
        return (
            <div style={{padding: "0px"}}>
                {this.state.StateString}{this.state.StateNumber}
            </div>
        )
    }
}

export default R024_ReactState;