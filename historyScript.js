let headerGrid;
let mainContainer;
let mainContainer2;
let mainContainerLeftElement;
let mainContainerRightElement;
let mainContainerLeft2Element;
let mainContainerRight2Element;
let stageMenuElement;
let artMenuElement;

let vlogCollection = [
  {
    "itemTitle": "Genesis",
    "category": "stage",
    "id": "beforevlog",
    "description": "The concept of vlogging can be traced back to the days of blogging in the early 1990s. “The word vlog is short for “video log” or “video blogging” which gives a hint as to what came before the vlog: blogging” (Sanchez). Blogs became more common with the introduction of easy HTML text editors like Open Diary, Live Journal, and Blogger in 1999, paving the way for vlogging.",
    "image": "https://rw979.github.io/Final_Project/genesis.jpeg"
  },
  {
    "itemTitle": "Inception",
    "category": "stage",
    "id": "firstvlog",
    "description": "On January 2, 2000, Adam Kontras posted the very first vlog. In this vlog, he recorded his journey to Los Angeles for career purposes and included a brief video clip showing how he discreetly brought his dog into a hotel that didn't allow pets. Initially, the video was posted for Adam’s friends and family.",
    "image": ""
    /*https://www.youtube.com/watch?v=Op65qkWxqBY*/
    },
  {
    "itemTitle": "Popularization",
    "category": "stage",
    "id": "youtube",
    "secondTitle":"Before",
    "description": "In April 2005, Jawed Karim, co-founder of YouTube, uploaded the platform's initial vlog titled 'Me at the zoo' on his 'jawed' channel. This video, characterized by its simple, everyday style and unembellished aesthetic, set a precedent for the kind of unpolished vlogging that would typify the content produced by many YouTube creators.",
    "image": ""
    /*https://www.youtube.com/watch?v=jNQXAC9IVRw*/
    },
  {
    "itemTitle": "Maturation",
    "category": "stage",
    "id": "widespread",
    "secondTitle":"Before",
    "description": "The advent of smartphones equipped with high-quality cameras made it easier for people to create and share vlogs, contributing to the medium's rapid growth. Vloggers began building large online communities, sharing various aspects of life. This period saw the rise of different genres of vlogs, from daily life to specialized topics. Vlogging gained mainstream media attention, with prominent media outlets covering notable vloggers and their impact on culture and society. Vloggers started to professionalize their content, with some earning significant income through ad revenue, sponsorships, and merchandise, further legitimizing vlogging as a career.",
    "image": "https://rw979.github.io/Final_Project/maturation.jpeg"
  },
  {
    "itemTitle": "Nelson Sullivan",
    "category": "art",
    "id": "NS",
    "description": "Known for recording and sharing videos of his life in New York during the 1980s. His videos, initially preserved on videotapes and later digitized for the internet, offer a unique perspective on the culture and nightlife of New York at that time. ‘Recording his experiences like video diaries, his work also clearly foreshadows more contemporary forms of DIY videos. Queer historian and archivist Robert Coddington notes “He was the first vlogger when you look at it’ (Colucci). Sullivan also frequently turned the camera into his face, which is recognized as a predecessor of current selfie posts.",
    "image": "https://rw979.github.io/Final_Project/nelsonsullivan.jpeg"
  },
  {
    "itemTitle": "Jennifer Ringley",
    "category": "art",
    "id": "JR",
    "description": "A pioneer in live broadcasting of personal life, known for “JenniCam”. Starting in 1996, Jennifer broadcast almost every aspect of her life from her college dorm room for seven years until she defunct her website and avoided to be shown on social media. Her works setting a precedent for real-time personal life broadcasting and exploring privacy, performance, and authenticity.",
    "image": "https://rw979.github.io/Final_Project/jennicam.webp"
  },
  {
    "itemTitle": "Anna Voog",
    "category": "art",
    "id": "AV",
    "description": "An artist and musician who started broadcasting her life 24/7 on her website 'Anacam' for 12 years since 1997. Her work broke traditional art boundaries, exploring new self-expression ways through the internet. In Heather Saul’s interview, Anna said ‘All anyone ever wanted was for me to wave at them on the camera. They'd always say that, wave at me, can you see me? It was about people connecting, you know. It was so exciting.’",
    "image": "https://rw979.github.io/Final_Project/"
  },
  {
    "itemTitle": "Josh Harris",
    "category": "art",
    "id": "JH",
    "description": "An internet entrepreneur and artist best known for his work 'Quiet: We Live in Public'. This project was a social experiment conducted in New York in 1999, where over 100 people lived in a basement with their lives being broadcast online 24/7. The experiment aimed to explore the relationship between privacy and technology, foreshadowing the later era of social media. In year 2000, ‘he announced his We Live in Public web project, for which he rigged up his opulent Broadway loft with dozens of cameras, committing himself and his girlfriend Tanya Corrin to 'live in public' for 100 days’ (Smith).",
    "image": "https://rw979.github.io/Final_Project/joshharris.jpeg"
  },
  {
    "itemTitle": "",
    "category": "art",
    "id": "",
    "description": "",
    "image": ""
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
  stageMenuElement = document.getElementById("stageMenu");
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

  	if (item['category'] == "stage") {
  		stageMenuElement.appendChild(newLink);
  	}

    if (item['category'] == "art") {
      artMenuElement.appendChild(newLink);
    }
    
  	}

  for (const item of vlogCollection) {
  
  	if (urlSection == "stage" || urlSection == "art") {
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

     if (incomingJSON["category"] === "stage") {
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

    if (incomingJSON.category === "stage") {
        newDiv.appendChild(newImage);
        newDiv.appendChild(newTitle);
        newDiv.appendChild(newDescription);
    } 

    if (incomingJSON.category === "art") {
        newDiv.appendChild(newImage);
        newDiv.appendChild(newTitle);
        newDiv.appendChild(newDescription);
    }
        
     if (incomingJSON["category"] === "stage") {
        mainContainerRightElement.appendChild(newDiv);
    } 

     if (incomingJSON["category"] === "art") {
        mainContainerLeft2Element.appendChild(newDiv);
    }    

}

