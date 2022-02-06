import React from 'react';

function R030_FunctionComponent(props) { //props를 인자로 받는다
    let { contents } = props;
    return ( // return 문을 사용해 화면에 그려준다
        <h2>{contents}</h2>
    )
}

export default R030_FunctionComponent;