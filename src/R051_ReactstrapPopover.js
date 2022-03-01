import React, { Component } from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

class R051_ReactstrapPopover extends Component {
    render() {
        return (
            <>
                <Button type='button' id='Popover_id'>
                    Popover button
                </Button>
                <UncontrolledPopover placeholder='right' target="Popover_id">
                    <PopoverHeader>React 200</PopoverHeader>
                    <PopoverBody>
                        Aenean id magna id risus congue ornare.
                        Vestibulum sed diam et mi pulvinar facilisis sed eu risus.
                    </PopoverBody>
                </UncontrolledPopover>
            </>
        )
    }
}

export default R051_ReactstrapPopover;