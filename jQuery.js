var num1 ;
var listItemJq = document.getElementById("listItemJq");
var cartonaa = [];
function imgsSrcShow() {

 
        $(".imgList").click(function () {
             var src = $(this).find("img").attr("src");
             var num = $(this).find(".num").text();
             num1 += parseInt($(".num").text());
             console.log(num1) ;
                cartonaa.push(
                    `<li class="col-md-12 d-flex m-2">
                        <div class="col-md-6">
                            <img src=${src} alt="pizza" class="imgList w-100" /> 
                        </div>
                        <div class="col-md-6">
                            <h4>${num}</h4>
                            <button class="btn btn-danger" onclick=deleteBtnFun(${JSON.stringify(this)})>Delete</button>
                        </div>
                    </li> 
                    `);
                    
            listItemJq.innerHTML = cartonaa;
            //console.log(JSON.stringify(this));
            
        });

}

// var origin ;
function deleteBtnFun(content)
{
   
    origin = JSON.stringify(cartonaa[0]);
    //console.log(content);
    console.log(origin)
     
}