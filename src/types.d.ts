export interface ISetting {
    title: string
    logo: string
    keyword: string
    description: string
    copyright: string
    copyright_url: string
    about_us: string
    menus: IWebsite[]
}

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
    logoObj?: {
        id: string
    }
}
