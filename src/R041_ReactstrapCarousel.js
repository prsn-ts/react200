import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
    {
        src: '/image/a house in the forest.jpg',
        altText: '슬라이드1 이미지 대체 문구',
        caption: '숲속에 있는 집',
        header: 'A house in the forest'
    },
    {
        src: '/image/sunset.jpg',
        altText: '슬라이드2 이미지 대체 문구',
        caption: '노을 지는 모습',
        header: 'sunset'
    },
    {
        src: '/image/winter mountain.jpg',
        altText: '슬라이드3 이미지 대체 문구',
        caption: '겨울산',
        header: 'winter mountain'
    },
];

class R041_ReactstrapCarousel extends Component {
    render() {
        return (
            <UncontrolledCarousel items={items} />
        )
    }
}

export default R041_ReactstrapCarousel;