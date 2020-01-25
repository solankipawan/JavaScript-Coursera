// Object creation
var company = new Object();
company.name = "Google";
company.ceo = new Object();
company.ceo.firstName = "Sundar";
company.ceo.favColor = "White";

console.log(company);
console.log("Company CEO name is: " +
    company.ceo.firstName);

console.log(company["name"]);
var stockPropName = "stock of company";
company[stockPropName] = 112;

console.log("Stock price is: " +
    company[stockPropName]);

// Better way: object literal
var Google = {
    name: "Google",
    ceo: {
        firstName: "Sundar",
        favColor: "white"
    },
    "stock of company": 110
};

console.log(Google.ceo.firstName);