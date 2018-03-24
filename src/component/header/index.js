import tmpl from './index.ejs';
import './index.scss'
export default class Header {
    constructor() {
        this.render();
    }

    render() {
        document.querySelector('#header').innerHTML = tmpl();
    }
}