var Renderer = /** @class */ (function () {
    function Renderer(viewTemplate, html) {
        this.viewTemplate = viewTemplate;
        this.viewTemplate.innerHTML = html;
    }
    Renderer.prototype.render = function (html) {
        this.viewTemplate.innerHTML = html;
    };
    Renderer.prototype.renderError = function (message) {
        this.viewTemplate.innerHTML += "<br /><br /><div class=\"alert alert-danger\">" + message + "</div>";
    };
    return Renderer;
}());
export { Renderer };
//# sourceMappingURL=renderer.js.map