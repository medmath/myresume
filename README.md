# myresume

My Resume
db.json created
    Resources
  http://localhost:3000/experience

  Home
  http://localhost:3000

  STEPS
  In the terminal;
  use this command:  npx json-server --watch db.json to watch   http://localhost:3000/experience
  
  To run the test cases and to receive the test results in the test-results.json, use this command:  npx jest --json --outputFile=test-results.json

 Here are some of the test cases:
3. **Test Case 3: Verify Company Name and Location**
   - Description: Verify that the company name and location of a specific experience match the expected values.
   - Test Steps:
     1. Send a GET request to the endpoint with the ID "exp2".
     2. Verify that the response status is 200.
     3. Verify that the `companyName` is "Michelin" and the `location` is "Greenville, SC".
   - Expected Result: The company name and location should match the expected values.

4. **Test Case 4: Verify Date Range**
   - Description: Verify that the date range of a specific experience matches the expected value.
   - Test Steps:
     1. Send a GET request to the endpoint with the ID "exp3".
     2. Verify that the response status is 200.
     3. Verify that the `dateRange` is "June 2019 – October 2019".
   - Expected Result: The date range should match the expected value.

5. **Test Case 5: Verify Responsibilities**
   - Description: Verify that the responsibilities of a specific experience match the expected values.
   - Test Steps:
     1. Send a GET request to the endpoint with the ID "exp4".
     2. Verify that the response status is 200.
     3. Verify that the `responsibilities` array contains the expected responsibilities.
   - Expected Result: The responsibilities should match the expected values.

6. **Test Case 6: Verify Multiple Attributes**
   - Description: Verify multiple attributes of a specific experience.
   - Test Steps:
     1. Send a GET request to the endpoint with the ID "exp5".
     2. Verify that the response status is 200.
     3. Verify that the `jobTitle` is "SDET - VyTrack", `companyName` is "VyTrack", and `location` is "McLean, VA".
   - Expected Result: All specified attributes should match the expected values.
