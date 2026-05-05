(function injectCSS() {
    const style = document.createElement("style");
    style.textContent = `
        #page {
            padding: 0 !important;
        }
        #page-header {
            border-radius: 8px 8px 0 0 !important;
        }
        #page-content {
            border-radius: 0 0 8px 8px !important;
        }
        html, body, .login-container, .drag-container, .drag-container * {
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
        .navbar,
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
        .categoryname,
        .navbar-light {
            color: oklch(0.92 0.02 240) !important;
        }
        .secondary-navigation {
            display: flex !important;
            justify-content: center !important;
        }
        .activity-icon, .activityicon {
            background: transparent !important;
        }
        .moremenu {
            width: fit-content !important;
            padding: 0 !important;
            display: flex !important;
            justify-content: center;
        }
    `;
    document.head.appendChild(style);
})()