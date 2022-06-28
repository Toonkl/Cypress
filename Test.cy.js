describe('test form', () => {
  before(() => {
    cy.visit('https://demoqa.com/')
  })
  
  it('go to form', () => {
	cy.contains('Forms').click()
	cy.contains('Practice').click()
	cy.contains('Student Registration')

  })
 
 it('fill in name', () => {
	cy.get('#firstName').invoke('val','Test')
	cy.get('#lastName').invoke('val','Tester')
  })
  
 it('fill in email', () => {	
	cy.get('#userEmail').invoke('val','test.tester@testing.com')
  })
 
 it('choose gender', () => {	
	cy.contains('Male').click()
  })
  
 it('fill in phonenumber', () => {	
	cy.get('#userNumber').invoke('val','0499223344')
  })
  
  it('Select month', () => {	
	cy.get('#dateOfBirthInput').click()
	cy.get('.react-datepicker__month-select').select('1')
  })
  
  it('select year', () => {	
	cy.get('.react-datepicker__year-select').select('1994')
  })
  
  it('select day', () => {	
	cy.get('[aria-label="Choose Friday, February 11th, 1994"]').click()
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
	cy.get('#currentAddress').invoke('val','Kesseldallaan 72\n3010 Kessel-lo')
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
  
})

describe('test login', () => {
  before(() => {
    cy.visit('https://demoqa.com/')
  })  
 
  it('go to page', () => {
	 cy.contains('Book Store Application').click()
	 cy.wait(500)
	 cy.contains('Login').click()
  })	
  
  it('login', () => {  
  	 cy.wait(500)
     cy.get('#userName').type('admin')
	 cy.get('#password').type('admin')
	 cy.get('#login').click()
	 
	 cy.contains('Invalid username or password!')
  }) 
  
  it('login failed', () => {  
	 cy.contains('Invalid username or password!')
  }) 
})
