console.log("rodou");

function injectCSS() {
    const style = document.createElement("style");
    style.textContent = `
        html, body {
            background-color: oklch(0.18 0.02 240) !important;
            color: oklch(0.92 0.02 240) !important;
        }
        a,
        .fa {
            transition: all 0.3s ease-in-out !important;
            color: oklch(0.72 0.14 250) !important;
        }
        a:not([id*="message-drawer-toggle-"]):hover, .fa:hover {
            background-color: oklch(0.27 0.02 240) !important;
            color: oklch(0.80 0.12 250) !important;
        }
        #region-main,
        .course-content,
        .card,
        #page,
        #topofscroll,
        nav,
        #usernavigation,
        #user-action-menu {
            background-color: oklch(0.22 0.02 240) !important;
            border-color: oklch(0.32 0.02 240) !important;
        }
        input, select, textarea {
            background-color: oklch(0.22 0.02 240) !important;
            color: oklch(0.92 0.02 240) !important;
            border: 1px solid oklch(0.32 0.02 240) !important;
        }
        .categoryname {
            color: oklch(0.92 0.02 240) !important;
        }
    `;
    document.head.appendChild(style);
};

injectCSS();