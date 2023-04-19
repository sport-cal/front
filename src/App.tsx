import React from "react";
import { css } from "@emotion/react";

function App() {
    return (
        <div>
            <h1
                css={css`
                    color: red;
                `}
            >
                Hello World
            </h1>
        </div>
    );
}

export default App;
