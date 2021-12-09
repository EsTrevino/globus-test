# globus-test

## To Start:
- To run project, run `npm i` and then `npm run serve` to start front end client

- no changes were made to the express server so start up that server as well 

Visit http://localhost:8080/test/:testNumber to see different test cases
ex: 
1. http://localhost:8080/test/1 
2. http://localhost:8080/test/2 
3. http://localhost:8080/test/3 
4. http://localhost:8080/test/4 

## Follow-up:
1. Pick one of your implementation decisions and list some of its pros and cons.
    - I decided to use libraries for working with dates, byte conversion instead of writing code to handle this
    - pros: saved time, accurate, reusuable
    - cons: bigger bundle from additional packages which if it got big enough could cause performance issues, could have been done without libraries, security and dependency ie dont want to use too many 3rd party libraries if you dont need to / have the time to write the code yourself 
2. Briefly describe any testing you feel should be added if we were going to put this in production.
    - Front end testing could include setting up a mock server to return dummy data and then using something like react testing library to assert on the StatusPage component to make sure it displays the right information
    - Each component in the components folder could be tested to ensure they are displaying correct ui 
    - each utils file should also be tested, specifically getCalculatedStatus and initalSort
