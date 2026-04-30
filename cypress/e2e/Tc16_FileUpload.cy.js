

describe("Test for file upload",()=>{

it("Test for File upload using fixture",()=>{

cy.visit("https://the-internet.herokuapp.com/upload");

//attach file
cy.get("#file-upload").selectFile("cypress/fixtures/Appiumsetup.txt")

//upload
cy.get("#file-submit").click();

//assertion
cy.get("h3").should("have.text","File Uploaded!");

})


})