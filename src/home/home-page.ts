import { Counter } from '../core/components/counter/counter2';

export class HomePage extends HTMLElement {
    static #selector = 'app-home-page';
    static render() {
        customElements.define(HomePage.#selector, HomePage);
        Counter.render();
    }
    #template!: string;

    constructor() {
        super();
        this.#setTemplate();
        this.#setElement();
    }

    #setTemplate() {
        this.#template = /*html*/ `
                <h2>Uso de componentes y web components</h2>
                <app-counter counterId="1" ></app-counter>
                <app-counter counterId="2"></app-counter>
                <app-counter counterId="3"></app-counter>
            `;
    }
    #setElement() {
        this.innerHTML = this.#template;
    }
}
