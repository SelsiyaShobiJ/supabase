
/**
 * @typedef {Object} ProductType
 * @property {number} id
 * @property {string} name
 * @property {number} price
 */

export class Product {
    /**
     * @param {ProductType} product
     */
    #id;
    #name;
    #price;
    constructor(product) {
        this.id = Number(product.id);
        this.name = product.name;
        this.price = Number(product.price);
    }
}
