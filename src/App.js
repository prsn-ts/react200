import React from 'react';
import './App.css';
import LifecycleEx from './R005_LifecycleEx'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>HTML 적용하기</p>
      {/* 
          아래에 LifecycleEx 태그가 컴포넌트가 사용되는 부분
       */}
      <LifecycleEx></LifecycleEx>
    </div>
  );
}

export default App;
