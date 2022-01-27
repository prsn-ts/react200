import React, { PureComponent } from 'react';
//PureComponent 상속
class R028_PureComponentClass extends PureComponent {
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
            PureComponent를 상속받아 생성한 R028_PureComponentClass 컴포넌트에서 setState() 함수로 기존의 상태 변수를 다시 선언 또는 초기화 할 시
            PureComponent의 경우 객체에 대해서는 객체의 참조값을 비교하기 때문에 StateArrayObj 배열 객체의 값이 바뀌지 않았다해도 변경 되었다고 간주하고 다시 렌더링 된다.
            반면, StateString 변수는 객체가 아니므로 StateString 변수가 갖고있는 문자열은 값이 바뀌지 않아서 동일하다고 간주한다
        */
        console.log('render() 실행');
        return (
            <div>
                <button onClick={e => this.buttonClick('String')}> 문자열 변경</button>
                <button onClick={e => this.buttonClick('ArrayObject')}> 객체 배열 변경</button>
            </div>
        )
    }
}

export default R028_PureComponentClass;