const getCursorEnterDirection = (element, event) => {
    if (!element) return null;

    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const edges = {
        top: y,
        bottom: rect.height - y,
        left: x,
        right: rect.width - x
    };

    return Object.keys(edges).reduce((a, b) => edges[a] < edges[b] ? a : b);
};







document.getElementById("yourElement").addEventListener("mouseenter", function(event) {
    const direction = getCursorEnterDirection(this, event);
    console.log("Cursor entered from:", direction);
});
