export class PerInfoPage {

    static input_FirstName()
    { 
            return cy.get("#first-name")
    }

    static input_LastName()
    { 
        return cy.get("#last-name")
    }
    static input_Zip()
    { 
        return cy.get("#postal-code")
    }
    static btn_Continue()
    { 
        return cy.get(".cart_button")
    }


}