/*
    // ********* Problem Statement # 02: CSV Header *********
Given the first line of a comma separated values (csv), return an array containing the headings.
- The first line of csv file contains headings separated by commas.
- Remove any leading or trailing whitespaces from each heading.
function getHeadings(csv){

}
*/

function getHeadings(csv){

return csv.split(",").map(heading => heading.trim());

}

let firstLine=" S.No, Name, Age, Email, Phone Number ";

let headings=getHeadings(firstLine);
console.log(headings);