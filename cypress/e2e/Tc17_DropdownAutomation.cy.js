/*
1.Select tag based dropdown
2.Bootstrap/autosuggestion dropdown
*/

describe("Test for Dropdowns",()=>{

it("Test for Select tag based dropdown",()=>{

cy.visit("https://formy-project.herokuapp.com/form");

//select by index
cy.get("#select-menu").select(4);//index 3

cy.wait(1000);
//select by visible text
cy.get("#select-menu").select("2-4");
cy.wait(1000);
//select by value
cy.get("#select-menu").select("3");

})


it.only("Test for bootstrap dropdown",()=>{

//open application
cy.visit("https://www.booking.com/");

cy.get("input[name='ss']").click();
cy.get("input[name='ss']").type("Pune");

cy.get("ul[role='group']>li div.b08850ce41").each(($option)=>{


cy.log($option.text());

if($option.text().includes("Pune"))
{
    cy.wrap($option).click();
}


})

})







})
