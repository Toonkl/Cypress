describe('test form', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/')
  })
  
  it('fill in form', () => {
  
	cy.contains('Forms').click()
	cy.contains('Practice').click()
	cy.contains('Student Registration')

	cy.get('#firstName').invoke('val','Test')
	cy.get('#lastName').invoke('val','Tester')
  	
	cy.get('#userEmail').invoke('val','test.tester@testing.com')
 
	cy.contains('Male').click()
  
	cy.get('#userNumber').invoke('val','0499223344')
  
	cy.get('#dateOfBirthInput').click()
	cy.get('.react-datepicker__month-select').select('1')
	cy.get('.react-datepicker__year-select').select('1994')
	cy.get('[aria-label="Choose Friday, February 11th, 1994"]').click()
  
	cy.get('#subjectsContainer').click().type('com{enter}')
  	
	cy.contains('Sports').click()
	cy.contains('Reading').click()
	cy.contains('Music').click()
  
	cy.get('#currentAddress').invoke('val','Kesseldallaan 72\n3010 Kessel-lo')
  	
	cy.viewport(1200,1200)
	cy.wait(150)
	cy.get('#state').click()
	cy.contains('Haryana').click()

	cy.get('#city').click()
	cy.contains('Panipat').click()
  
	cy.get('#submit').click({force: true})
	cy.wait(2000)
	cy.get('#closeLargeModal').click({force: true})
  })  
   
  it('login', () => {
	 cy.contains('Book Store Application').click()
	 cy.wait(500)
	 cy.contains('Login').click()	
     cy.wait(500)
	 
     cy.get('#userName').type('admin')
	 cy.get('#password').type('admin')
	 cy.get('#login').click()
	 
	 cy.contains('Invalid username or password!')  
	})
})