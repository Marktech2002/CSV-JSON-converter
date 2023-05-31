const csv = `Name, Status, Gender 
Zubs, Richie , Male
Soft, Broke boy, Gender of not
Weevil, Onifile , Shemale`;

const csvToJson = (csv)=> {
    // trim and seperate the csv (split at each line) === an array
     const lines = csv.trim().split("\n");
    //tap into the  first row (headers) and split === an array 
     const headers = lines[0].split(",").map((header) => header.trim());
     //intializing a json array to store the objects
     const json = [];
     //from the second line/row split each values iteratively 
     for (let i = 1; i < lines.length; i++) {
         const values = lines[i].split(",").map((value)=> value.trim());
         //storing data uniquely 
         const row = {}
         //loop for header to assign each values 
        for(let j = 0 ; j < headers.length ; j++) {
            row[headers[j]] = values[j];
        }
        json.push(row)
     }

    // console.log(lines);
    return JSON.stringify(json, null, 2);
}
const jsonData = csvToJson(csv);
console.log(jsonData);