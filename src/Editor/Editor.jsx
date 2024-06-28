import React, { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import styles from "./Editor.module.css";

function Editor() {

    const defautlCode = `import React from "react";
import ReactDOM from "react-dom";

function App() {
return (
    <h1>Hello world</h1>
);
}

ReactDOM.render(<App />, document.getElementById("root"));`;

    const [code, setCode] = useState(defautlCode);

    

    return (
        <div className={styles.container}>
            <h1>Simple React Code Editor</h1>
            <p>A simple no-frills code editor with syntax highlighting.</p>
          
            {/* div container for code editor */}
            <div className={styles.editorContainer}>
                
                {/* textarea for writing code */}
                <textarea
                    className={styles.editor}
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Type your code here..."
                    spellCheck="false"
                    autoCapitalize="off"
                    autoComplete="off"
                    autoCorrect="off"
                >
                </textarea>
                {/* Prismjs Component for highlighting syntax */}
                <Highlight theme={themes.dracula} code={code} language="jsx">
                    {
                        // Child component for rendering code to hgihtlight syntax
                        ({ style, tokens, getLineProps, getTokenProps }) => (
                            // pre tag for code block, this is where the code will be rendered, and styled
                            
                            // tokens here are the individual words in the code
                            // lines are the lines of code
                            
                            <pre className={` ${styles.highlightedCode}`} style={style} aria-hidden="true">
                                {/* getLineProps and getTokenProps are functions that return props for each line and token */}
                                {/*  here we are mapping through the tokens and lines to render the code */}
                                
                                {tokens.map((line, i) => (
                                    <div key={i} {...getLineProps({ line, key: i })}>
                                        {/*  then we return a span for each token in a line that highlights the token based on the token type */}
                                        
                                        {line.map((token, key) => (
                                            <span key={key} {...getTokenProps({ token, key })} />
                                        ))}
                                    </div>
                                ))}
                            </pre>
                        )
                    }
                </Highlight>
        
            </div>
        </div>
    );
}

export default Editor;
