import Header from '../header';
import Main from '../main';
import Feature from '../feature';
import User from '../user';
import Footer from '../footer';

import './index.scss';
export default class Container {
    constructor() {
        new Header();
        new Main();
        new Feature();
        new User();
        new Footer();
    }

    render() {

    }
}