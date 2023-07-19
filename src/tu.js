/**
Requirements

- Show title "Today Cat Fact!" at the center on the first line of the page.
- When the page first loaded, fetch a random cat fact from `https://catfact.ninja/fact` and display in green color on the 2nd line, also align text with center.
- There is "Get New Cat Fact" button on the third line. When click, fetch a new random cat fact from `https://catfact.ninja/fact` and display in green color on the 2nd line, also align text with center.
- Show "Hide Cat Fact" on the 4th line which hide the cat fact text and "Get New Cat Fact" button when click. Then the button change to "Show Cat Fact" which when click, show 2nd and 3rd line back and also fetch a new random cat fact.
- Note that, while loading a cat fetch, show "Loading..." in blue and with animated "." with length 1 - 5 dots.
- In case of fetching error, show '<error message>' text in red on the 2nd line, center aligned.

example: https://cat-fact.boostlabs.tech
 */


import { StrictMode } from "react";
import ReactDOM from "react-dom";

function App() {
    return (
        <div className="App">
            <h1>Hello LeetCoder</h1>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    rootElement
);