import tmpl from './index.ejs';
import './index.scss';

export default class User {
    constructor() {
        this.data = [{
            img: 'https://qpic.url.cn/feeds_pic/Q3auHgzwzM7V1vPRHVGgUpn0ybcv1yibsq3l6E5T8MyluoRGVTibfGPg/'
        }, {
            img: 'https://qpic.url.cn/feeds_pic/ajNVdqHZLLDJ6PV59GoGcJZ7Il5kZFOBQhKzJ3xdTY6aqIV0Bciaobw/'
        }];
        this.render();
    }

    render() {
        document.querySelector('#user').innerHTML = tmpl({
            item: this.data
        });
    }
}