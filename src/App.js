import React from 'react';
import './App.css';
import LifecycleEx from './R007_LifecycleEx'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>HTML 적용하기</p>
      {/* 
          아래에 LifecycleEx 태그가 컴포넌트가 사용되는 부분
          LifecycleEx 컴포넌트에 'FromApp.js'라는 값을 가지는 prop_value 변수를 전달한다. 
       */}
      <LifecycleEx prop_value = 'FromApp.js'/>
    </div>
  );
}

export default App;
