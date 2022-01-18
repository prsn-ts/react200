import React from 'react';
import './App.css';
import PropsNode from './R023_PropsNode'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <PropsNode>
        {/* 하위 컴포넌트 태그 안에 속성을 넣는 것 말고도 태그 사이에 노드를 선언하여 전달이 가능 */}
        <span>node from App.js</span>
      </PropsNode>
    </div>
  );
}

export default App;