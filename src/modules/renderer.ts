export class Renderer {
    constructor(private viewTemplate: HTMLDivElement) {
    }

    render(html: string) {
        this.viewTemplate.innerHTML = html;
    }
}