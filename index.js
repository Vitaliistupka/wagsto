// const hamburger = document.querySelector('.hamburger');
// const navigation = document.querySelector('.navigation');

// hamburger.addEventListener('click', () => {
//   navigation.classList.toggle('show');
// });

console.log(11);
const hamburger = document.querySelector("#hamburger");
// console.log(hamburger);
// if (hamburger) {
// console.log(22);
hamburger.addEventListener("click", function (event) {
    console.log(33);
    event.preventDefault();
    var target = document.getElementById("navigation");
    if (target.classList.contains("open-menu")) {
        target.classList.remove("open-menu");
    } else {
        target.classList.add("open-menu");
    }
});
// }
