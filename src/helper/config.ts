import { ISetting } from '@/types';

export const setting:ISetting ={
    title: '开发者导航',
    keywords: '开发者,工具,导航',
    description: '本站由腾讯云开发者先锋运营并维护，包含各类开发者工具网址。',
    copyright: '腾讯云开发者先锋',
    url: 'https://tdp.fan/#About',
    about_us: '本站由腾讯云开发者先锋运营并维护，包含各类开发者工具网址。',
};

export function updateMeta(data: ISetting) {
    Object.assign(setting, data);
    document.title = setting.title;
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', setting.keywords);
    document.querySelector('meta[name="description"]')?.setAttribute('content', setting.description);
}
