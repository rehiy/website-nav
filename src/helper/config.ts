import { ISetting, ICategory } from '@/types';
import * as adapter from '@/helper/graphql';

export const setting: ISetting = {
    title: '开发者导航',
    keyword: '开发者,工具,导航',
    description: '本站由腾讯云开发者先锋运营并维护，包含各类开发者工具网址。',
    copyright: '腾讯云开发者先锋',
    copyright_url: 'https://tdp.fan/#About',
    about_us: '本站由腾讯云开发者先锋运营并维护，包含各类开发者工具网址。',
    nav_menu: [
        {
            title: '开发者导航',
            url: '#',
            description: ''
        },
        {
            title: '站长工具箱',
            url: 'https://tool.tdp.fan',
            description: ''
        },
        {
            title: '腾讯云TDP',
            url: 'https://tdp.fan',
            description: ''
        }
    ]
};

export async function getSetting(): Promise<ISetting> {
    const data = await adapter.getSetting();
    Object.assign(setting, data);
    updateMeta(setting);
    return setting;
}

export function getCategories(): Promise<ICategory[]> {
    const data = adapter.getCategories();
    return data;
}

export function updateMeta(data: ISetting) {
    Object.assign(setting, data);
    document.title = setting.title;
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', setting.keyword);
    document.querySelector('meta[name="description"]')?.setAttribute('content', setting.description);
}
