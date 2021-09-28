import logo from './logo.svg';
import './App.css';
import ImportConponent from './R003_ImportConponent'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>HTML 적용하기</p>
      {/* 
          아래에 ImportConponent 태그가 컴포넌트가 사용되는 부분
       */}
      <ImportConponent></ImportConponent>
    </div>
  );
}

export default App;
