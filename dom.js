// // Examine the document object
// console.dir(document);
// console.log(document.contentType);
// console.log(document.domain);
// console.log(document.URL);
// // console.log(document.title);
// // document.title = "Sourav Majumder";
// console.log(document.title);
// console.log(document.head);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.body);
// console.log(document.all[10]);
// document.all[10].textContent = "hello";
// console.log(document.forms[0]);

//Selector using getElementById

// console.log(document.getElementById("header-title"));
// var headerTitle = document.getElementById("header-title");
// console.log(headerTitle);
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = "<h1>hello</h1>";
// var header = document.getElementById("main-header");
// header.style.borderBottom = "solid 5px #000";

// Selector Get element by classname
// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// items[1].textContent = "hello 2";
// // items[1].style.fontWeight = "bold";
// // items[2].style.backgroundColor = "green";

// for (var i = 0; i < items.length; i++) {
//   if (i % 2 == 0) {
//     items[i].style.backgroundColor = "red";
//   } else {
//     items[i].style.backgroundColor = "green";
//   }
// }

// // Selector getelementsbytagname
// var lii = document.getElementsByTagName("li");
// console.log(lii);
// lii[1].textContent = "hello 2";
// // items[1].style.fontWeight = "bold";
// // items[2].style.backgroundColor = "green";

// for (var i = 0; i < lii.length; i++) {
//   if (i % 2 == 0) {
//     lii[i].style.backgroundColor = "orange";
//   } else {
//     lii[i].style.backgroundColor = "pink";
//   }
// }

// Query Selector eita sudhu first value kei change kre
// var header = document.querySelector("#main-header");
// header.style.borderBottom = "20px solid black";

// var inputt = document.querySelector("input");
// inputt.value = "sourav";

// var submit = document.querySelector('input[type = "submit"]');
// submit.style.color = "red";

// var listItem = document.querySelector(".list-group-item");
// listItem.style.backgroundColor = "green";

// var lastItem = document.querySelector(".list-group-item:nth-child(3)");
// lastItem.style.backgroundColor = "green";

// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.backgroundColor = "green";

//Query selector all

var titles = document.querySelectorAll(".title");

console.log(titles);
titles[0].textContent = "hello";
titles[1].innerText = "cook";

var odd = document.querySelectorAll("li:nth-child(odd");
var even = document.querySelectorAll("li:nth-child(even");
for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "red";
  even[i].style.backgroundColor = "green";
}
