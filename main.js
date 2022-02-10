let firstName = "Sara";
let lastName = "AlAwad";
let fullName = "SaraAlAwad";
console.log(firstName.length);
console.log(lastName.length);
console.log(fullName.length);
// indexOf
const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean.";
console.log(txt.indexOf("h"));
console.log(txt.indexOf("Earth"));
console.log(txt.indexOf("Moon"));
//search
let txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";
console.log(txt2.search(";"));//34
console.log(txt2.search("green")); //6
console.log(txt2.search("blue"));//-1
//replace()
const text = "Sam is good at codingschool";
let instade = text.replace("good", "bad").replace("codingschool", "school");
let susi = text.replace("Sam", "Susi").replace("codingschool", "school");
let t = text.replace("codingschool", "tennis");
document.write(instade + "<br>");
document.write(susi + "<br>");
document.write(t + "<br>");
//tolowerCase() toUpperCase()
const satz = "Sam is going to codingschool";

document.write(satz.toUpperCase() + "<br>");
document.write(satz.toLowerCase() + "<br>");
console.log(satz.substring(0, 3));
console.log(satz.substring(22, 28))
let first = satz.substring(0, 3);
let last = satz.substring(22, 28);
let rest = satz.substring(4, 22);

document.write(first.toUpperCase() + " ", rest.toLowerCase() + " ", last.toUpperCase() + "<br>");
document.write(first.toLowerCase() + " ", rest.toUpperCase() + " ", last.toLowerCase() + "<br>");

// let newSatz = satz.substring(3, 15)
// console.log(newSatz);

//slice()
// Susi
// is
// is going to school
// school
// Susi is school

const A = 'Susi is going to codingschool';


let part1 = A.slice(0, 4);
let part2 = A.slice(5, 8);
let part4 = A.slice(23, 29);
let part3 = A.slice(5, 29);
document.write(part1 + "<br>");
document.write(part2 + "<br>");
document.write(part3 + "<br>");
document.write(part4 + "<br>");
document.write(part1 + " " + part2 + " " + part4 + "<br>")

// concat()
const text1 = "Sam is going to codingschool";
const text2 = "Susi";
const text3 = "programming bike";
const text4 = " and "
const text5 = text1.slice(3, 14);
const text6 = text1.slice(0, 3);
document.write(text1.concat(text4) + " to the movie theater <br>");
document.write(text6.concat(text5) + " to the movie theater<br>");
document.write(text6.concat(text4, text2) + " are going to the school<b>");