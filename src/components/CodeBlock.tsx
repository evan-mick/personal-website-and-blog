'use client'


import React, { useEffect } from 'react';
import hljs from 'highlight.js';
// import 'highlight.js/styles/github.css'; // Choose a style or use custom CSS
import '../app/brighttheme.css';
import cpp from 'highlight.js/lib/languages/cpp';

interface CodeBlockProps {
  language: string; // Type for language prop
  value: string;    // Type for value prop
}


const CodeBlock: React.FC<CodeBlockProps> = ({ language, value }) => {
  hljs.registerLanguage('cpp', cpp);
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre>
      <code className={`language-${language}`}>
        {value}
      </code>
    </pre>
  );
};


export default CodeBlock; 
