import ai from '@/website/ai.json';
import design from '@/website/design.json';
import fe from '@/website/fe.json';
import funny from '@/website/funny.json';
import learn from '@/website/learn.json';
import other from '@/website/other.json';
import util from '@/website/util.json';

export interface ICategory {
    title: string
    description?: string
    icon: string
    classifies?: IClassify[]
    expand?: boolean
}

export interface IClassify {
    title: string
    description?: string
    icon?: string
    websites: IWebsite[]
}

export interface IWebsite {
    title: string
    url: string
    description: string
    logo?: string
}

export const Catogories: ICategory[] = [
    ai,
    util,
    fe,
    design,
    learn,
    funny,
    other,
    {
        title: '关于本站',
        icon: 'fa fa-heart',
        description: '本站由腾讯云开发者先锋运营并维护，包含各类开发者工具网址。',
    }
];

export const Setting = {
    title: '开发者导航',
    keywords: '开发者,工具,导航',
    description: '本站由腾讯云开发者先锋运营并维护，包含各类开发者工具网址。',
    copyright: '腾讯云开发者先锋',
    url: 'https://tdp.fan/#About',
};
