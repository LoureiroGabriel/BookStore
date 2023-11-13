const Product = require("./Product");


module.exports = class Book extends Product {
    constructor(title, synopsis, gender, pages, author, description, price, inStock) { 
        super(`Nome: ${title}`,description, price, inStock = 0)
        this.title = title
        this.synopsis = synopsis
        this.gender = gender
        this.pages = pages
        this.author = author
    }
}