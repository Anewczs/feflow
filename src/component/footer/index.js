import tmpl from './index.ejs';
import './index.scss';

export default class Footer {
    constructor() {
        this.render();
    }

    render() {
        document.querySelector('#footer').innerHTML = tmpl({
            navUrl: [{
                text: 'Feflow社区',
                url: 'https://github.com/feflow'
            }, {
                text: '腾讯IVWEB',
                url: 'https://ivweb.io/'
            }, {
                text: 'NOW直播',
                url: 'https://now.qq.com/'
            }],
            currYear: new Date().getFullYear()
        })
    }
}