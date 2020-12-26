 function copyToClipboard (){
      var x = document.getElementById("p1").value;

    //target
 let url =  "http://www.rapidposte.poste.tn/fr/Item_Events.asp?ItemId="+x+"&submit=Valider";

    // cors-anywhere
    let url2 = "https://cors-anywhere.herokuapp.com/" +url;

    fetch(url2)
    .then(response => response.text())
    .then(html => {
      //DOMParser
      let parser = new DOMParser();
      let doc = parser.parseFromString(html, "text/html");
      let element = doc.getElementById(200);


      document.body.appendChild(element);
       
    })
  }