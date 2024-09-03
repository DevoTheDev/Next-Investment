export interface StylesSuite {
    container: string,
    itemContainer: string,
    key: string,
    value: string
}
export interface ImageSuite {
    imgUrl: string,
    dimensions: { h: number, w: number },
    alt: string,
}

export type Detail = {
    [key: string]: any;
}

export type DetailStyle = {
    key: string,
    value: string,
    kv_container: string,
    container: string,
}

export type Checklist<T extends Detail, CheckLabel extends string> = {
    [K in keyof T as `${CheckLabel}${K extends string ? Capitalize<K> : never}`]: boolean
}
