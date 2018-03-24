import tmpl from './index.ejs';
import './index.scss';

export default class Main {
    constructor() {
        this.render();
    }

    render() {
        document.querySelector('#main').innerHTML = tmpl();
    }
}