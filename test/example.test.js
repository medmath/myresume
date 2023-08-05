const axios = require('axios');
const git = require('git-rev-sync');
//const { JSDOM } = require('jsdom');

describe('My Test Suite', () => {
    test('GET request to JSON Server endpoint', async () => {
        try {
            const startTime = new Date();
            const response = await axios.get('http://localhost:3000/experience/?id=exp1');
            expect(response.status).toBe(200);
            expect(response.data[0].jobTitle).toBe('QA Automation Engineer - Envestnet');

            const endTime = new Date();
            const formattedDate = endTime.toLocaleString();
            const duration = endTime - startTime;

            const branchName = git.branch();
            console.log(`Current Git Branch: ${branchName}`);
            console.log(`Test Case 1 completed in ${duration}ms`);
            console.log(`Test date/time: ${formattedDate}`);
        } catch (error) {
            // Handle errors here
            console.error('An error occurred:', error);
            throw error; // Rethrow the error to fail the test
        }
    });


    test('GET request to non-existent JSON Server endpoint', async () => {
        const startTime = new Date();

        try {
            const response = await axios.get('http://localhost:3000/nonexistent');
            // Expecting a non-200 status code (e.g., 404) for a non-existent endpoint
            expect(response.status).not.toBe(200);
        } catch (error) {
            // Ensure that an error is thrown due to the non-existent endpoint
            expect(error.response).toBeDefined();
            expect(error.response.status).toBe(404);
        }

        const endTime = new Date();
        const formattedDate = endTime.toLocaleString();
        const duration = endTime - startTime;

        const branchName = git.branch();
        console.log(`Current Git Branch: ${branchName}`);
        console.log(`Test Case 2: Negative Test Case completed in ${duration}ms`);
        console.log(`Test date/time: ${formattedDate}`);
    });



    test('Verify Company Name and Location', async () => {
        try {
            const startTime = new Date();
            const response = await axios.get('http://localhost:3000/experience/?id=exp2');
            expect(response.status).toBe(200);

            const experience = response.data[0];
            expect(experience.companyName).toBe('Michelin');
            expect(experience.location).toBe('Greenville, SC');

            const endTime = new Date();
            const formattedDate = endTime.toLocaleString();
            const duration = endTime - startTime;

            const branchName = git.branch();
            console.log(`Current Git Branch: ${branchName}`);
            console.log(`Test Case 3 completed in ${duration}ms`);
            console.log(`Test date/time: ${formattedDate}`);
        } catch (error) {
            console.error('An error occurred:', error.message);
            throw error;
        }
    });

    test('Verify Date Range', async () => {
        try {
            const startTime = new Date();
            const response = await axios.get('http://localhost:3000/experience/?id=exp3');
            expect(response.status).toBe(200);

            const experience = response.data[0];
            expect(experience.dateRange).toBe('June 2019 – October 2019');

            const endTime = new Date();
            const formattedDate = endTime.toLocaleString();
            const duration = endTime - startTime;

            const branchName = git.branch();
            console.log(`Current Git Branch: ${branchName}`);
            console.log(`Test Case 4 completed in ${duration}ms`);
            console.log(`Test date/time: ${formattedDate}`);
        } catch (error) {
            console.error('An error occurred:', error.message);
            throw error;
        }
    });

    test('Verify Responsibilities', async () => {
        try {
            const startTime = new Date();
            const response = await axios.get('http://localhost:3000/experience/?id=exp4');
            expect(response.status).toBe(200);

            const experience = response.data[0];
            expect(experience.responsibilities).toEqual([
                "* Design, develop and implement Page Object Model (POM) based automation-testing framework utilizing Java, Selenium WebDriver, JUnit, Cucumber (Gherkin Language) and Maven.",
                "* Setup the Automation Framework using Selenium WebDriver to run test cases in multiple browsers and platforms.",
                "* Used BDD with Cucumber, Java and created feature files with a scenario and scenario outline as well as writing step definitions for behavior."
            ]);

            const endTime = new Date();
            const formattedDate = endTime.toLocaleString();
            const duration = endTime - startTime;

            const branchName = git.branch();
            console.log(`Current Git Branch: ${branchName}`);
            console.log(`Test Case 5 completed in ${duration}ms`);
            console.log(`Test date/time: ${formattedDate}`);
        } catch (error) {
            console.error('An error occurred:', error.message);
            throw error;
        }
    });

    test('Verify Multiple Attributes', async () => {
        try {
            const startTime = new Date();
            const response = await axios.get('http://localhost:3000/experience/?id=exp5');
            expect(response.status).toBe(200);

            const experience = response.data[0];
            expect(experience.jobTitle).toBe('SDET - VyTrack');
            expect(experience.companyName).toBe('VyTrack');
            expect(experience.location).toBe('McLean, VA');

            const endTime = new Date();
            const formattedDate = endTime.toLocaleString();
            const duration = endTime - startTime;

            const branchName = git.branch();
            console.log(`Current Git Branch: ${branchName}`);
            console.log(`Test Case 6 completed in ${duration}ms`);
            console.log(`Test date/time: ${formattedDate}`);
        } catch (error) {
            console.error('An error occurred:', error.message);
            throw error;
        }
    });

});

