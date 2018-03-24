import Header from '../header';
import Main from '../main';
import Feature from '../feature';
import Footer from '../footer';


import './index.scss';
export default class Container {
    constructor() {
        new Header();
        new Main();
        new Feature();
        new Footer();
    }

    render() {

    }
}