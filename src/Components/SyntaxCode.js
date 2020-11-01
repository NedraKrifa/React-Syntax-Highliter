import React from 'react'
import detectLang from "lang-detector"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

function SyntaxCode({textCode}) {
/*const codeString = `public class AddTwoNumbers {

    public static void main(String[] args) {
         
       int num1 = 5, num2 = 15, sum;
       sum = num1 + num2;
 
       System.out.println("Sum of these numbers: "+sum);
    }
 }`;*/
    const language= detectLang(textCode).toLowerCase(); 
    console.log(language);

    return (
      <>
        <span>Programming Languge: {language}</span>
        <SyntaxHighlighter language={language} style={prism} showLineNumbers >
          {textCode}
        </SyntaxHighlighter>
      </>
    );
}
export default SyntaxCode;