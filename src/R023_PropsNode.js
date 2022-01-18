import React, { Component } from 'react';

class R023_PropsNode extends Component {
    render() {
        return (
        <div style={{padding: "0px"}}>
            {/* 상위 컴포넌트에서 전달한 노드는 this.props.children로 사용 가능 */}
            {this.props.children}
        </div>
        )
    }
}

export default R023_PropsNode;