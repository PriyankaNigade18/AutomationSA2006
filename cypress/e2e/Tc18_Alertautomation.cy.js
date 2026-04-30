/*


Alert get handle automatically by cypress
1.Simple alert(OK)


Types
=======
1.Simple alert 
2.Confirmation alert
3.prompt alert(stub)


*/

describe("Test for Alerts",()=>{

it("Test for Simple alert",()=>{

cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

cy.get("button").first().click();
//alert will appear but it get handled automatically by cypress

//event: for alert validation
cy.on("window:alert",(alt1)=>{

    expect(alt1).equal("I am a JS Alert");
})


//validation
cy.get("#result").should("have.text","You successfully clicked an alert");



})

it("Test for Confirmation alert",()=>{

cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

cy.get("button").eq(1).click();
//alert will appear but it get handled automatically by cypress(Ok )


//cancel
cy.on("window:confirm",()=>false)


//validation
//cy.get("#result").should("have.text","You clicked: Ok");
cy.get("#result").should("have.text","You clicked: Cancel");


})


it.only("Test for Prompt alert",()=>{

cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

/*
for prompt alert take first control of window before actual alert window appears on screen
*/

cy.window().then((win)=>{
cy.stub(win,"prompt").returns("Bye Everyone");
})

cy.get("button").last().click();//appear alert 


//validation

cy.get("#result").should("have.text","You entered: Bye Everyone");


})

})