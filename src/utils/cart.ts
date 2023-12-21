import { Product } from "src/Types";
/**
 *calculates the total order Quantity based on the items in the cart.
 *
 * @param {Product[]} items - An array of product items in the cart.
 * @returns {number} - The total order Quantity.
 */
export const calculateTotalQuantity = (cart:Product[])=>{
   return cart.reduce((quantity,curr)=>{
       return quantity+curr.quantity 
    },0)
}
/**
 *calculates the total order Amount based on the items in the cart.
 *
 * @param {Product[]} items - An array of product items in the cart.
 * @returns {number} - The total order Amount.
 */
export const calculateTotalAmount =(cart:Product[])=>{
    return cart.reduce((amount,curr)=>{
        return amount + (curr.quantity*curr.amount) 
    },0)
}