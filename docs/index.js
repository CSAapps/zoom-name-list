var dates = {};
var counts;

function getElm(e) {
    return document.getElementById(e);
}
var ulMain = getElm('ul-main');
var divNames = getElm('div-names');

function fillDates() {
    Object.keys(counts).forEach(elm => {
        let date = new Date(parseInt(elm));
        let key = date.toLocaleDateString('en-GB');
        if (!dates[key]) dates[key] = [];
        dates[key].push(elm);
    });
}

function showList() {
    var datesArr = Object.keys(dates);
    datesArr.sort();
    datesArr.reverse();
    datesArr.forEach(date => {
        let liDate = document.createElement('li');
        liDate.className = 'date';
        let ul = document.createElement('ul');
        liDate.innerText = date;
        let times = dates[date];
        times.sort();
        times.forEach(millis => {
            let time = new Date(parseInt(millis));
            let li = document.createElement('li');
            li.innerHTML =
                `<td class="time">${time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}\
                 </td>&nbsp;|&nbsp;\
                 <span class="count">${counts[millis]}</span>`;

            li.millis = millis;
            li.onclick = function() {
                loadNames(this.millis);
            }
            ul.appendChild(li);
        });
        liDate.appendChild(ul);
        ulMain.appendChild(liDate);
        ulMain.appendChild(document.createElement('br'));
        console.log(date);
    });
}

function loadNames(millis) {
    divNames.textContent = "\nLoading . . .";
    db.child('names').child(millis).get().then((snapshot) => {
        if (snapshot.exists()) {
            let names = snapshot.val();
            let list = '\n';
            list += new Date(parseInt(millis)).toLocaleString('en-GB', { hour12: true }).toUpperCase();
            list += '\n\n';
            names.forEach(name => {
                list += name + '\n';
            })
            list += '\nTotal: ' + names.length;
            divNames.textContent = list;
            console.log(names);
        } else {
            alert("No data available");
        }
    }).catch((error) => {
        alert(error);
    });
}

db.child('counts').get().then((snapshot) => {
    if (snapshot.exists()) {
        counts = snapshot.val();
        fillDates();
        showList();
    } else {
        alert("No data available");
    }
}).catch((error) => {
    alert(error);
});