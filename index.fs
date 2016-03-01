let possibleEmails = [
    "boss@trump.com";
    "   leading-space-in-string@gmail.com";
    "not-an-email address"
]

let emailDomains =  
    possibleEmails
    |> List.map cleanUpEmail
    |> List.filter isValidEmail 
    |> List.map getDomainOfEmail

let query selectStatement whereStatement fromStatement =
    fromStatement
    |> loadData
    |> applyFilter whereStatement
    |> applyTransformation selectStatement
    
let query selectStatement whereStatement =
    loadData
    >> applyFilter whereStatement
    >> applyTransformation selectStatement


