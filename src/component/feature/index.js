import tmpl from './index.ejs';
import './index.scss';

export default class Feature {
    constructor() {
        this.data = [{
            img: 'https://qpic.url.cn/feeds_pic/Q3auHgzwzM7TvX6wybdlHZ34DDTyiascyvwRWt3Yicy0MNibJRGFmTYlg/',
            text: '集成Yeoman'
        }, {
            img: 'https://qpic.url.cn/feeds_pic/ajNVdqHZLLDJxuOWCYaOCAggicG9Vaph93iaHzgZJHa3bXAsasBuYoyQ/',
            text: '插件机制'
        }, {
            img: 'https://qpic.url.cn/feeds_pic/Q3auHgzwzM6bUMh4dUgwzhHiaf6euX3Wtlym59OxDGYM4o3PfnQibcLw/',
            text: '开发规范'
        }, {
            img: 'https://qpic.url.cn/feeds_pic/Q3auHgzwzM7ckrQk7BnxBLKCsuwJxZLrMdAicVic9Vl3T8U0Njq9RPSA/',
            text: '主流构建支持'
        }]
        this.render();
    }

    render() {
        document.querySelector('#feature').innerHTML = tmpl({
            item: this.data
        });
    }
}