export interface IRating {
    rate: number,
    count: number
}

export interface IProduct {
    id: number,
    name: string,
    price: number,
    category: string,
    image: string
    rate: IRating
}