var myArticle = document.querySelector('article');

var requestURL = 'data/arrangementPic2.json';
console.log(requestURL);
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var pictureInfo = request.response;
    console.log(pictureInfo);
    storePictureInfo(pictureInfo);
}

function storePictureInfo(jsonObj) {
    var picName = jsonObj['pictures'];

    for (var i = 0; i < picName.length; i++)
    {
        var myAnchor = document.createElement('a');
        myAnchor.target = "_blank";
        myAnchor.href = picName[i].fileName;

        var myImg = document.createElement('img');
        myImg.src = picName[i].fileName;
        myImg.alt = "Floral Picture";

        myArticle.appendChild(myAnchor);
        myArticle.appendChild(myImg);
    }
}

/*
var myTd1 = document.createElement('td');
var myTd2 = document.createElement('td');

myTd1.textContent = service[i].type;
myTd2.textContent = '$' + service[i].price;

myTable.appendChild(myTd1);
myTable.appendChild(myTd2);

element.attribute = new value
Change the attribute value of an HTML element

    <a target="_blank" href="images/arrangement/ACS_0002-Icon.jpg">
        <img src="images/arrangement/ACS_0002-Icon.jpg" alt="Floral Picture">

            function myFunction() {
            document.getElementById("myAnchor").href = "http://www.cnn.com/";
            document.getElementById("demo").innerHTML = "The link above now goes to www.cnn.com.";
        }
*/

