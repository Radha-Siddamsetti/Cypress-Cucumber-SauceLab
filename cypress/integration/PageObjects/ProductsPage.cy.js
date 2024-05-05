export class ProductsPage {

    static addBackpack()
    { 
        return cy.get((".btn_inventory").eq(1))
    }

    static addBikeLight()
    { 
        return cy.get((".btn_inventory").eq(2))
    }
    static addBolttShirt()
    { 
        return cy.get((".btn_inventory").eq(3))
    }
    static ckShopCart()
    { 
        return cy.get(".fa-shopping-cart")
    }
    static btnCheckOut()
    { 
        return cy.get(".checkout_button")
    }

}