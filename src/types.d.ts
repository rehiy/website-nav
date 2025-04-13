export interface ISetting {
    title: string
    keywords: string
    description: string
    copyright: string
    url: string
    about_us: string
    nav_menu: IWebsite[]
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
}
