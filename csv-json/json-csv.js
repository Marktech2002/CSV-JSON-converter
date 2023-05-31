const json = [
    {
      "Name": "Zubs",
      "Status": "Richie",
      "Gender": "Male"
    },
    {
      "Name": "Soft",
      "Status": "Broke boy",
      "Gender": "Gender of not"
    },
    {
      "Name": "Weevil",
      "Status": "Onifile",
      "Gender": "Shemale"
    }
  ]
//Name, Age, Gender 
//Alice, 25, Female
//Bob, 30, Male
//Charlie, 40, Male
const jsonToCsv = (json) => {
    const headers = Object.keys(json[0]);
    const rows = json.map(obj => headers.map(header => obj[header]));
    rows.unshift(headers);
    // console.log(rows.unshift(headers))
    return rows.map(row => row.join(",")).join("\n");
}

const csvData = jsonToCsv(json);
console.log(csvData);