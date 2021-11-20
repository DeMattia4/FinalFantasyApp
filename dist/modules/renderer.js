var Renderer = /** @class */ (function () {
    function Renderer(viewTemplate) {
        this.viewTemplate = viewTemplate;
    }
    Renderer.prototype.render = function (html) {
        this.viewTemplate.innerHTML = html;
    };
    return Renderer;
}());
export { Renderer };
//# sourceMappingURL=renderer.js.map