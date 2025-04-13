import { gql, request } from 'graphql-request';

import { ISetting, ICategory } from '@/types';
import * as config from '@/helper/config';

const GQL_ENDPOINT = `${location.origin}/api/graphql`;

export function getSetting(): Promise<ISetting> {
    const query = gql`
        query Datasets {
            navSetting {
                title
                keywords
                description
                copyright
                url
                nav_menu
                about_us
            }
        }
    `;

    return request<{ navSetting: ISetting }>(GQL_ENDPOINT, query).then((data) => {
        config.updateMeta(data.navSetting);
        return config.setting;
    });
}

export function getCategories(): Promise<ICategory[]> {
    const query = gql`
        query Datasets(
            $sort: [String] = ["sort:asc"]
            $pagination: PaginationArg = { pageSize: 1000 }
            $filter1: NavCategoryFiltersInput = { valid: { eq: true } }
            $filter2: NavClassifyFiltersInput = { valid: { eq: true } }
            $filter3: NavWebsiteFiltersInput = { valid: { eq: true } }
        ) {
            navCategories(filters: $filter1, pagination: $pagination, sort: $sort) {
                title
                icon
                description
                classifies(filters: $filter2, pagination: $pagination, sort: $sort) {
                    title
                    icon
                    description
                    websites(filters: $filter3, pagination: $pagination, sort: $sort) {
                        title
                        url
                        logo {
                            url
                        }
                        description
                        director
                        squad
                    }
                }
            }
        }
    `;

    return request<{ navCategories: ICategory[] }>(GQL_ENDPOINT, query).then((data) => {
        return data.navCategories;
    });
}
