console.log("rodou");

function injectCSS() {
    const style = document.createElement("style");
    style.textContent = `
        html, body {
            background-color: #121212 !important;
            color: #e0e0e0 !important;
        }
    `;
    document.head.appendChild(style);
};

injectCSS();