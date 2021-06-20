function saveToFile(textToWrite, fileNameToSaveAs) {
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

// var ul = document.querySelector('ul.participants-ul');
// var ulItms = Array.from(ul.querySelectorAll('.participants-item__display-name'));

// var names = ulItms.map(itm => itm.textContent);
// var date = Date.now();
// var titile = document.title;

// names = names.filter(name => name.textContent != "Chandani Miss");

// var data = {
//     "date": date,
//     // "titile": titile,
//     "names": names
// };

var data = {
    "date": Date.now() + (3600 * 1000 * 24) * 2,
    // "title": "My title",
    "names": ["හිරුන් නිම්සර 6-B", "Pulmi dahamsa", "CHITHIRA MANTHILA GRADE 6B", "Onitha Jithulaka", "Thenusha Dilshan 6-A", "😎😎😎😎    සහෙන්ස  සත්සර.    😛😛😛😛😛", "6A mithun ransara", "Thinath thajan", "🎀NETHUKI HASARA🎀", "Nimsara Hansamal", "Lasindu Bhagya  6 - B", "Saumya Piumali 6-A", "thisara nethmina6A", "Malithi. chathushika", "Navidu. 🐧😷🦄😍😍🙏👆👨‍👩‍👧‍👧🥀🌹🌷💐🌤️🪐🦄🦜", "Vihagi anjana", "Chanuda  Dissanayake 6B", "Yenuli yohansa", "Vauyni Nemnadi", "Rusiru", "🤫🤫දනංජය 😏😒", "Lusada 6-B", "Chamathka Dewmini Grade 6B", "🙏සත්සර යසස් 6-A🙏", "10G 09 Sadheera Lakdinu", "Keshawa lakshitha 6-A🙏", "Demika", "Manoli", "Methmi Prabarsha 6-B", "Sanuka 6B", "꧁༒SAHIR O𝕟𝕖 𝕤𝕙𝕠𝕥 ༒╾━╤デ╦︻", "--විහග ඉදුසර", "Dharani"]
};

chrome.runtime.sendMessage(data, function(success) {
    if (success) {
        if (success.state) {
            alert(success.msg);
        } else {
            alert(success.msg);
            list = "";
            for (var i = 0; i < names.length; i++)
                list += `${names[i].textContent}\n`

            var date = new Date().toLocaleString('en-GB', { hour12: true }).toUpperCase();
            list = date + '\n\n' + list + `\nTotal: ${names.length}`;
            filename = `${document.title} ${date.replace(/\/|\:/g,'-')}.txt`;
            save(list, filename);
        }
    } else {
        alert("Extension Error");
    }
});