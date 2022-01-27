import React, { Component } from 'react';

class R027_ComponentClass extends Component {
    constructor (props) {
        super(props);
        this.state = {
            StateString: 'react',
            StateArrayObj: ['react', { react: '200' }]
        }
    }

    buttonClick = (type) => {
        if(type === "String") {
            this.setState({ StateString: 'react'});
        }else{
            this.setState({ StateArrayObj: ['react', { react: '200' }] });
        }
    }

    render() {
        /* 
            Component를 상속받아 생성한 R027_ComponentClass 컴포넌트에서 setState() 함수로 기존의 상태 변수를
            다시 선언 또는 초기화 할 시 값이 변경 되었다고 간주하고 다시 렌더링 된다.
        */
        console.log('render() 실행')
        return (
            <div>
                <button onClick={e => this.buttonClick('String')}> 문자열 변경</button>
                <button onClick={e => this.buttonClick('ArrayObject')}> 객체 배열 변경</button>
            </div>
        )
    }
}

export default R027_ComponentClass;