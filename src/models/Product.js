export default class Product {
  /**
   * @param {String} name 
   * @param {Double} price 
   * @param {String} description 
   * @param {String} imageUrl 
   */
  constructor(name, price, description, imageUrl) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;

    this.addToCart = (amount) => ({
      name,
      price,
      description,
      imageUrl,
      amount,
      subtotal: amount * price,
    })
  }

}