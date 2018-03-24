import tmpl from './index.ejs';
import './index.scss';

export default class Footer {
    constructor() {
        this.render();
    }

    render() {
        document.querySelector('#footer').innerHTML = tmpl({
            navUrl: [{
                text: 'hdhd',
                url: 'http://www.alloyteam.com/'
            }, {
                text: 'hdhd',
                url: 'http://www.alloyteam.com/'
            }, {
                text: 'hdhd',
                url: 'http://www.alloyteam.com/'
            }, {
                text: 'hdhd',
                url: 'http://www.alloyteam.com/'
            }, {
                text: 'hdhd',
                url: 'http://www.alloyteam.com/'
            }, {
                text: 'hdhd',
                url: 'http://www.alloyteam.com/'
            }, {
                text: 'hdhd',
                url: 'http://www.alloyteam.com/'
            }],
            currYear: new Date().getFullYear()
        })
    }
}