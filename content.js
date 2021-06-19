function save(textToWrite, fileNameToSaveAs) {
    var textFileAsBlob = new Blob([textToWrite], {
        type: 'text/plain'
    });
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }
    downloadLink.click();
}


var ul = document.querySelector('ul.participants-ul');
var names = Array.from(ul.querySelectorAll('.participants-item__display-name'));

names = names.filter(name => name.textContent != "Chandani Miss");

list = "";
for (var i = 0; i < names.length; i++)
    list += `${names[i].textContent}\n`

var date = new Date().toLocaleString('en-GB', { hour12: true }).toUpperCase();

list = date + '\n\n' + list + `\nTotal: ${names.length}`;

filename = `${document.title} ${date.replace(/\/|\:/g,'-')}.txt`

save(list, filename);