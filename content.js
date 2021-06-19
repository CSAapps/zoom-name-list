var ul = document.querySelector('ul.participants-ul');
var ulItms = Array.from(ul.querySelectorAll('.participants-item__display-name'));

var names = ulItms.map(itm => itm.textContent);
var date = Date.now();
var titile = document.title;

names = names.filter(name => name.textContent != "Chandani Miss");

var data = {
    "date": date,
    // "titile": titile,
    "names": names
};

// var data = {
//     "date": Date.now() + 1000 * 60 * 60 * 300,
//     "title": "My title",
//     "names": ["a", "b", "c", "d"]
// };

chrome.runtime.sendMessage(data);