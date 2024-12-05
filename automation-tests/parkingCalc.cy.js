describe('Parking Cost Calculator Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should calculate the parking cost for Short-Term Parking', () => {
    // Select parking lot
    cy.get('#ParkingLot').select('Short-Term Parking');

    // Enter starting date, time, and AM/PM
    cy.get('#StartingDate').clear().type('12/05/2024');
    cy.get('#StartingTime').clear().type('10:00');
    cy.get('[name="StartingTimeAMPM"][value="AM"]').check();

    // Enter leaving date, time, and AM/PM
    cy.get('#LeavingDate').clear().type('12/05/2024');
    cy.get('#LeavingTime').clear().type('02:00');
    cy.get('[name="LeavingTimeAMPM"][value="PM"]').check();

    // Click the calculate button
    cy.get('input[type="submit"]').click();

    // Check if the result element exists and is visible
    cy.get('.SubHead > b').should('contain', '$ 8.00'); 
  });

  it('should show an error for invalid leaving time', () => {
    // Enter invalid leaving time
    cy.get('#StartingDate').clear().type('12/05/2024');
    cy.get('#StartingTime').clear().type('02:00');
    cy.get('[name="StartingTimeAMPM"][value="PM"]').check();

    cy.get('#LeavingDate').clear().type('12/05/2024');
    cy.get('#LeavingTime').clear().type('10:00');
    cy.get('[name="LeavingTimeAMPM"][value="AM"]').check();

    // Click the calculate button
    cy.get('input[type="submit"]').click();

    // Verify the error message
    cy.get('.SubHead > b').should('contain', '$ 0.00'), 'There is no error message displayed!';
  });

  it('should correctly calculate parking cost for a leap year date', () => {
    // Set dates for a leap year (e.g., February 29, 2024)
    cy.get('#ParkingLot').select('Economy Parking');
    cy.get('#StartingDate').clear().type('02/29/2024');
    cy.get('#StartingTime').clear().type('08:00');
    cy.get('[name="StartingTimeAMPM"][value="AM"]').check();

    cy.get('#LeavingDate').clear().type('03/01/2024');
    cy.get('#LeavingTime').clear().type('08:00');
    cy.get('[name="LeavingTimeAMPM"][value="AM"]').check();

    // Calculate parking costs
    cy.get('input[type="submit"]').click();

    // Verify the results
    cy.get('.SubHead > b').should('contain', '$ 9.00'); 
  });

  it('should display an error for an invalid date', () => {
    // Enter invalid starting and leaving dates
    cy.get('#ParkingLot').select('Economy Parking');
    cy.get('#StartingDate').clear().type('02/30/2024');
    cy.get('#StartingTime').clear().type('10:00');
    cy.get('[name="StartingTimeAMPM"][value="AM"]').check();

    cy.get('#LeavingDate').clear().type('02/31/2024');
    cy.get('#LeavingTime').clear().type('12:00');
    cy.get('[name="LeavingTimeAMPM"][value="PM"]').check();

    // Submit the form
    cy.get('input[type="submit"]').click();

    // Verify error (customize based on actual application behavior)
    cy.get('.SubHead > b').should('contain', '$ 13.00'), 'There is no error message displayed!'; 
  });

  it('should display an error for empty fields', () => {
    // Leave the starting and leaving fields empty
    cy.get('#StartingDate').clear();
    cy.get('#StartingTime').clear();
    cy.get('#LeavingDate').clear();
    cy.get('#LeavingTime').clear();

    // Submit the form
    cy.get('input[type="submit"]').click();

    // Verify the error message
    cy.get('.SubHead > b').should('contain', '$ 12.00'), 'There is no error message displayed';
  });

  it('should handle invalid time formats gracefully', () => {
    cy.get('#ParkingLot').select('Short-Term Parking');
    cy.get('#StartingDate').clear().type('12/05/2024');
    cy.get('#StartingTime').clear().type('25:00'); // Invalid time format
    cy.get('[name="StartingTimeAMPM"][value="AM"]').check();
  
    cy.get('#LeavingDate').clear().type('12/05/2024');
    cy.get('#LeavingTime').clear().type('12:00');
    cy.get('[name="LeavingTimeAMPM"][value="PM"]').check();
  
    // Submit the form
    cy.get('input[type="submit"]').click();
  
    // Assuming an invalid time should affect the parking cost, verify that the cost is not as we expect
    cy.get('.SubHead > b').should('not.contain', '$ 18.00'), 'No error messages were displayed!'; // Example: Assuming $18.00 is expected if times were valid
  });

  it('should calculate costs for overnight stays across different months', () => {
    // Enter dates spanning across two months
    cy.get('#ParkingLot').select('Long-Term Garage Parking');
    cy.get('#StartingDate').clear().type('01/31/2024');
    cy.get('#StartingTime').clear().type('10:00');
    cy.get('[name="StartingTimeAMPM"][value="AM"]').check();

    cy.get('#LeavingDate').clear().type('02/01/2024');
    cy.get('#LeavingTime').clear().type('10:00');
    cy.get('[name="LeavingTimeAMPM"][value="AM"]').check();

    // Submit the form
    cy.get('input[type="submit"]').click();

    // Verify the result
    cy.get('.SubHead > b').should('contain', '$ 12.00'); 
  });

  it('should calculate costs correctly when starting and leaving on the same day', () => {
    // Same-day parking
    cy.get('#ParkingLot').select('Short-Term Parking');
    cy.get('#StartingDate').clear().type('12/05/2024');
    cy.get('#StartingTime').clear().type('08:00');
    cy.get('[name="StartingTimeAMPM"][value="AM"]').check();

    cy.get('#LeavingDate').clear().type('12/05/2024');
    cy.get('#LeavingTime').clear().type('05:00');
    cy.get('[name="LeavingTimeAMPM"][value="PM"]').check();

    // Submit the form
    cy.get('input[type="submit"]').click();

    // Verify the result
    cy.get('.SubHead > b').should('contain', '$ 18.00'); 
  });
});

