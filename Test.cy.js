describe('open website', () => {
  before(() => {
    cy.visit('https://demoqa.com/')
  })
  
  it('go to form', () => {
	cy.contains('Forms').click()
	cy.contains('Practice').click()
	cy.contains('Student Registration')

  })
 
 it('fill in name', () => {
	cy.get('#firstName').type('Test')
	cy.get('#lastName').type('Tester')
  })
  
 it('fill in email', () => {	
	cy.get('#userEmail').type('test.tester@testing.com')
  })
 
 it('choose gender', () => {	
	cy.contains('Male').click()
  })
  
 it('fill in phonenumber', () => {	
	cy.get('#userNumber').type('0499223344')
  })
  
 it('fill in date of birth', () => {	
	cy.get('#dateOfBirthInput').click({force: true}).invoke('val','11 feb 1994').type('{enter}')
	
  })
  
 it('Choose Subjects', () => {	
	cy.get('#subjectsContainer').click().type('com{enter}')
  })
  
 it('choose hobbies', () => {	
	cy.contains('Sports').click()
	cy.contains('Reading').click()
	cy.contains('Music').click()
  })
  
 it('fill in address', () => {	
	cy.get('#currentAddress').type('Kesseldallaan 72\n3010 Kessel-lo')
  })
  
 it('choose state and city', () => {	
	cy.viewport(1200,1200)
	cy.wait(150)
	cy.get('#state').click()
	cy.contains('Haryana').click()

	cy.get('#city').click()
	cy.contains('Panipat').click()
  })
  
 it('submit form', () => {
	cy.get('#submit').click({force: true})
	cy.wait(2000)
	cy.get('#closeLargeModal').click({force: true})
  })  
  
 it('login', () => {
	 cy.contains('Book Store').click()
	 cy.contains('Login').click()
	 cy.wait(500)
	 
	 cy.get('#userName').type('admin')
	 cy.get('#password').type('admin')
	 cy.get('#login').click()
	 
	 cy.contains('Invalid username or password!')
  })	 
})