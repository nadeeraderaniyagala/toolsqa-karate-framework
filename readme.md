## Tools QA - API Test Automation Suite

This test automation suite is done for ToolsQA-API(http://bookstore.toolsqa.com/swagger/index.html) using Karate Framework (https://github.com/intuit/karate)


#### Run all tests
mvn test
mvn test -DargLine="-Dkarate.env=dev"
mvn test -Dkarate.options="--tags @smoke"

#### Test Results
target\surefire-reports


#### Structure of the automation suite
sample-json.json : The sample JSON object

