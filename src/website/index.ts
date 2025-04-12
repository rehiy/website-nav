import ai from './ai.json';
import design from './design.json';
import fe from './fe.json';
import funny from './funny.json';
import learn from './learn.json';
import other from './other.json';
import util from './util.json';

export interface ICategory {
    title: string
    icon: string
    classifies?: IClassify[]
    expand?: boolean
}

export interface IClassify {
    title: string
    top?: boolean
    websites: IWebsite[]
}

export interface IWebsite {
    title: string
    description: string
    url: string
    logo?: string
}

export const menus: ICategory[] = [
    ai,
    util,
    fe,
    design,
    learn,
    funny,
    other,
];
