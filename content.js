function save(textToWrite, fileNameToSaveAs) {
    var textFileAsBlob = new Blob([textToWrite], {
        type: 'text/csv'
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
var names = ul.querySelectorAll('.participants-item__display-name');

var list = "";
for (var i = 0; i < names.length; i++)
    list += `${names[i].textContent}\n`

filename = `${document.title} ${(new Date().toLocaleString()).replace(/\/|\:/g,'-')}.csv`

save(list, filename);