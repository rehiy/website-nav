import { gql, request } from 'graphql-request';

import { ISetting, ICategory } from '@/types';

const filesURL = `${location.origin}/api/assets/`;
const queryURL = `${location.origin}/api/graphql`;

export function getSetting() {
    const query = gql`
        query {
            nav_setting {
                title
                logo
                keyword
                description
                copyright
                copyright_url
                about_us
                menus
            }
        }
    `;

    return request<{ nav_setting: ISetting }>(queryURL, query).then((data) => {
        return data.nav_setting;
    });
}

export function getCategories() {
    const query = gql`
        query {
            nav_category(filter: { status: { _eq: "published" } }, limit: 1000) {
                title
                icon
                description
                classifies(filter: { status: { _eq: "published" } }, limit: 1000) {
                    title
                    icon
                    description
                    websites(filter: { status: { _eq: "published" } }, limit: 1000) {
                        title
                        url
                        description
                        logoObj: logo {
                            id
                        }
                    }
                }
            }
        }
    `;

    return request<{ nav_category: ICategory[] }>(queryURL, query).then((data) => {
        data.nav_category.map((category) => {
            category.classifies && category.classifies.map((classify) => {
                classify.websites && classify.websites.map((website) => {
                    if (website.logoObj) {
                        website.logo = filesURL + website.logoObj.id;
                        delete website.logoObj;
                    }
                });
            });
        });
        return data.nav_category;
    });
}
