import React, { Component } from 'react';
import datatype from 'prop-types';

class R021_PropsRequired extends Component {
    render() {
        let {
            ReactString,
            ReactNumber
        } = this.props
        return (
            <div style={{padding:"0px"}}>
                {ReactString}{ReactNumber}
            </div>
        )
    }
}

R021_PropsRequired.propTypes = {
    //ReactString이라는 props 값을 필수 값으로 지정
    ReactString: datatype.isRequired,
}

export default R021_PropsRequired;