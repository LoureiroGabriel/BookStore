const Product = require("./Product");


module.exports = class Posters extends Product{
    constructor(name, description, height, width, price, inStock){
        super(name, description, price, inStock = 0)
        this.height = height
        this.width = width
    }
}