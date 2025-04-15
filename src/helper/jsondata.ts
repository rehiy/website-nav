import { ISetting, ICategory } from '@/types';

import ai from '@/website/ai.json';
import design from '@/website/design.json';
import fe from '@/website/fe.json';
import funny from '@/website/funny.json';
import learn from '@/website/learn.json';
import other from '@/website/other.json';
import util from '@/website/util.json';

export async function getSetting(): Promise<ISetting> {
    return {} as ISetting;
}

export async function getCategories(): Promise<ICategory[]> {
    return [ai, util, fe, design, learn, funny, other];
}
