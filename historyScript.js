let headerGrid;
let mainContainer;
let mainContainer2;
let mainContainerLeftElement;
let mainContainerRightElement;
let mainContainerLeft2Element;
let mainContainerRight2Element;
let yearsMenuElement;
let artMenuElement;

let vlogCollection = [
  {
    "itemTitle": "1980-1999",
    "category": "YEARS",
    "id": "beforevlog",
    "secondTitle":"Before",
    "description": "Birth: 1995.09.22",
    "image": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Nayeon_Profile.jpeg"
  },
  {
    "itemTitle": "2000",
    "category": "YEARS",
    "id": "firstvlog",
    "secondTitle":"Before",
    "description": "Birth: 1996.11.01",
    "image": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Profile_Jeongyeon.jpeg"
  },
  {
    "itemTitle": "2005-2010",
    "category": "YEARS",
    "id": "youtube",
    "secondTitle":"Before",
    "description": "Birth: 1996.11.01",
    "image": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Profile_Jeongyeon.jpeg"
  },
  {
    "itemTitle": "2010-2015",
    "category": "YEARS",
    "id": "widespread",
    "secondTitle":"Before",
    "description": "Birth: 1996.11.01",
    "image": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Profile_Jeongyeon.jpeg"
  },
  {
    "itemTitle": "2015 onwards",
    "category": "YEARS",
    "id": "developing",
    "secondTitle":"Before",
    "description": "Birth: 1996.11.01",
    "image": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Profile_Jeongyeon.jpeg"
  },
  {
    "itemTitle": "1980-1999",
    "category": "art",
    "id": "beforeverything",
    "secondTitle":"Before",
    "description": "Birth: 1995.09.22",
    "image": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Nayeon_Profile.jpeg"
  }
];


document.addEventListener("DOMContentLoaded", function () {
  headerGridElement = document.getElementById('headerGrid');
  mainContainerElement = document.getElementById("mainContainer");
  mainContainerRightElement = document.getElementById("mainContainerRight");
  mainContainerLeftElement = document.getElementById("mainContainerLeft");
  mainContainer2Element = document.getElementById("mainContainer2");
  mainContainerRight2Element = document.getElementById("mainContainerRight2");
  mainContainerLeft2Element = document.getElementById("mainContainerLeft2");
  yearsMenuElement = document.getElementById("yearsMenu");
  artMenuElement = document.getElementById("artMenu");

let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let urlSection = urlParams.get('section');
let urlID = urlParams.get('id');

 console.log("urlSection:", urlSection);
  console.log("urlID:", urlID);


  let newTitle = document.createElement('h1'); 
  headerGridElement.appendChild(newTitle);
  
  for (const item of vlogCollection) {
  	console.log(item);
  	console.log(item['id']);

  	let newLink = document.createElement("a");
  	newLink.innerText = item['itemTitle'];
  	newLink.href = "history.html?section=" + item['category'] + "&id=" + item['id'];

  	if (item['category'] == "YEARS") {
  		yearsMenuElement.appendChild(newLink);
  	}

    if (item['category'] == "art") {
      artMenuElement.appendChild(newLink);
    }
    
  	}

  for (const item of vlogCollection) {
  
  	if (urlSection == "YEARS" || urlSection == "art") {
  		if (item['id'] == urlID) {
  			createVlogPage(item);
  		}
  	}

  	else {
  		createVlogPreview(item);
  	}
  }
 
 });


function createVlogPreview(incomingJSON){
	let newPreviewLink = document.createElement("A");
	newPreviewLink.href = "history.html?section=" + incomingJSON["category"].toLowerCase() + "&id=" + incomingJSON["id"];

	let newPreviewElement = document.createElement("DIV");
	newPreviewLink.appendChild(newPreviewElement);

	let newPreviewTitle = document.createElement("P");
	newPreviewTitle.classList.add("previewTitle");
	newPreviewTitle.innerText = incomingJSON["itemTitle"];
    newPreviewElement.appendChild(newPreviewTitle);  

    let newPreviewThumbnail = document.createElement("IMG");
    newPreviewThumbnail.classList.add("thumbnail");
    newPreviewThumbnail.src = incomingJSON["image"];
    newPreviewElement.appendChild(newPreviewThumbnail);  

     if (incomingJSON["category"] === "YEARS") {
        mainContainerRightElement.appendChild(newPreviewLink);
    }
     if (incomingJSON["category"] === "art") {
        mainContainerLeft2Element.appendChild(newPreviewLink);
    }            
}


function createVlogPage(incomingJSON) {
    let newDiv = document.createElement("DIV");

    let newTitle = document.createElement('h2');
    newTitle.innerText = incomingJSON.itemTitle;

    let newDescription = document.createElement('p');
    newDescription.innerText = incomingJSON.description;

    let newImage = document.createElement('img');
    newImage.src = incomingJSON.image;
    newImage.alt = incomingJSON.itemTitle;

    let newTitle2 = document.createElement('h3');
            newTitle2.innerText = incomingJSON.secondTitle;

    if (incomingJSON.category === "YEARS") {
        newDiv.appendChild(newImage);
        newDiv.appendChild(newTitle);
        newDiv.appendChild(newTitle2);
        newDiv.appendChild(newDescription);
    } 

    if (incomingJSON.category === "art") {
        newDiv.appendChild(newImage);
        newDiv.appendChild(newTitle);
        newDiv.appendChild(newTitle2);
        newDiv.appendChild(newDescription);
    }
        
     if (incomingJSON["category"] === "YEARS") {
        mainContainerRightElement.appendChild(newDiv);
    } 

     if (incomingJSON["category"] === "art") {
        mainContainerLeft2Element.appendChild(newDiv);
    }    

}

