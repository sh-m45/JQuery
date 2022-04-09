var listItem = document.getElementById('listItem');
var httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'https://forkify-api.herokuapp.com/api/search?q=pizza');
httpRequest.send();
var posts = [];
httpRequest.addEventListener("readystatechange", function () {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        posts = JSON.parse(httpRequest.response).recipes;
        //console.log(posts);
        displayList();
        imgsSrcShow();
        
        
    }
});

function displayList()
{
    var col = '' ;
    for (var i = 0; i < posts.length; i++){
        var price = i + i + 79 ;
        col += 
        `<li class="col-md-12 d-flex m-2 imgList">
            <div class="col-md-6">
                <img src=${posts[i].image_url} alt="pizza" class=" w-100" /> 
            </div>
            <div class="col-md-6 ">
                <h4>${posts[i].title}</h4>
                <p>${posts[i].publisher}</p>
                <h5 class="num">Price : ${price} EGP</h5>
            </div>
        </li> 
        `;
        
    }
    listItem.innerHTML = col ;
    
    
}






