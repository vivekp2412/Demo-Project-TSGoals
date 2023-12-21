export interface Product {
    id:string,
    name:string,
    amount:number,
    quantity:number,
    image:string
}
export interface CartState {
    products:Product[]
}
