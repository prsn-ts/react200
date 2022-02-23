import React, { Component } from 'react';
import { InputGroup, InputGroupText, Input, Button } from 'reactstrap';

class R045_ReactstrapInputGroup extends Component {
    render() {
        return (
            <>
                <InputGroup style={{padding: "0px"}}>
                    <Input placeholder='userid'>Left</Input>
                    <InputGroupText>@reactmail.com</InputGroupText>
                </InputGroup>
                <InputGroup>
                    <Button>버튼</Button>
                    <Input />
                </InputGroup>
            </>
        )
    }
}

export default R045_ReactstrapInputGroup;