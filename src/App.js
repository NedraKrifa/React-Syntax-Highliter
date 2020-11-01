import React,{useState} from 'react'
import "./App.css";
import Form from './Components/Form';
import SyntaxCode from './Components/SyntaxCode';

function App() {
  const [textCode, setTextCode] = useState("")
  return (
    <div className="app">
      <h1>React Code Syntax</h1>
      <Form setTextCode={setTextCode} textCode={textCode} />
      <div style={{width:'600px'}}>
        <SyntaxCode textCode={textCode} />
      </div>
    </div>
  )
}
export default App;