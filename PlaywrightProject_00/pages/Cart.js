exports.Carts = class Carts{

    constructor(page){
        this.page=page
        this.noOfProducts='//tbody[@id="tbodyid"]/tr/td[2]';

    }
    async checkProductsInCart(productName){
        const productInCart=await this.page.$$(this.noOfProducts)
        for(const product of productInCart){
            console.log(await product.textContent()) 
             
            if(product ==await product.textContent){
                return true;
                break;
            }
        }

    }
}



