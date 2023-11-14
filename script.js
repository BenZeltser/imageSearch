 
 const accessKey = "LfIp4n5TrafjKz_o1vyrjXFw-hTD25GqYueHFTcDg2o";
 
 const searchForm = document.getElementById("serach-form");
 const searchBox = document.getElementById("search-box");
 const searchResult = document.getElementById("search-result");
 const ShowMoreBtn = document.getElementById("show-more-btn");
 
 let keyword = "";
 let page = 1;

 async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
 }
    searchForm.addEventListener("submit", (e) =>{
        e.preventDefault();
        page = 1;
        searchImages();
     })
 

 
