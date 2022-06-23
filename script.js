
let request = new XMLHttpRequest();
request.open('get', ' https://fakestoreapi.com/products', true);
request.send();
request.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
        let products = JSON.parse(this.responseText);
        console.log(products)
        let output = "";
        for (let item of products) {
            output += `
            <div class="container">
            <p class="head-title" >${item.category}</p>
        <div class="img"> 
        <img src="${item.image}">
        <p class="title" >${item.title}</p>
        </div>
        <div class="info">
        <div class="description-item">
        <p class="description">${item.description}</p>
        </div>
        <div class="rate">
        <span class="fa fa-star" id="st1"></span>
        <span class="fa fa-star" id="st2"></span>
            <span class="fa fa-star" id="st3"></span>
            <span class="fa fa-star" id="st4"></span>
            <span class="fa fa-star" id="st5"></span>
            </div>
            <h4>${item.rating.rate}</h4>
            <h3 class="category">${item.category}</h3>
            <div class="price">
            <div class="price-rate">
            
                <span>$ ${item.price}</span>
                </div>
                <div class="btn">
                <button id="btn">Buy Now</button>
                </div>
            </div>
        </div>
    </div>  `
        }
        document.querySelector(".main-container").innerHTML = output;
    }
}




// function fetchData (){
//     fetch(" https://fakestoreapi.com/products")
//     .then(response => {
//         // if (response.ok){
//         //     throw Error("Error");
//         // }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data.data);
//         const html = data.data.map(user =>{
//             return  `
//             <div class="users">
//             <p>title: ${user.category}</p>
//             <p>title: ${user.price}</p>
//             </div>`;
//         }).join("");
//         console.log(html);
//         document.querySelector("#card-img1").insertAdjacentHTML("afterbegin",html)
//         // document.querySelector("#card-img1").innerHTML=`<p>title: ${user.title}</p>`
//     })
//     .catch(error=>{
//         console.log(error);
//     });
// }
// fetchData();