const products = document.querySelector(".placeHolder");

function createProd([img1, name1, img2, name2, img3, name3]) {
    let code = `
    <div class="layout">
            <img src="${img1}" alt="">
            <h1 style="font-family: 'Bebas Neue', cursive;">${name1}</h1>
            <h6>Description</h6>
    </div>
    <div class="layout">
        <img src="${img2}" alt="">
        <h1 style="font-family: 'Bebas Neue', cursive;">${name2}</h1>
        <h6>Description</h6>
    </div>
    <div class="layout">
        <img src="${img3}" alt="">
        <h1 style="font-family: 'Bebas Neue', cursive;">${name3}</h1>
        <h6>Description</h6>
    </div>
    `;
    products.innerHTML += code;
}

let item1 = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnnObTCNg1QJoEd9Krwl3kSUnPYTZrxb5Ig&usqp=CAU",
    "Orange",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnnObTCNg1QJoEd9Krwl3kSUnPYTZrxb5Ig&usqp=CAU",
    "Orange",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnnObTCNg1QJoEd9Krwl3kSUnPYTZrxb5Ig&usqp=CAU",
    "Orange"

];

let item2 = [
    "https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bananas-218094b-scaled.jpg",
    "Banana",
    "https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bananas-218094b-scaled.jpg",
    "Banana",
    "https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bananas-218094b-scaled.jpg",
    "Banana"

];

let item3 = [
    "https://www.collinsdictionary.com/images/full/apple_158989157.jpg",
    "Apple",
    "https://www.collinsdictionary.com/images/full/apple_158989157.jpg",
    "Apple",
    "https://www.collinsdictionary.com/images/full/apple_158989157.jpg",
    "Apple"

];
for (i = 0; i < 5; i++) {
    createProd(item1);
    createProd(item2);
    createProd(item3);
}

function getColors(){
    url="https://x-colors.herokuapp.com/api/random";
    fetch(url).then((response)=>{
        return response.json();
    }).then((data=>{
        let bgcol=data.hex;
        document.body.style.backgroundColor = `${bgcol}`;
        document.querySelector("title").innerHTML="BG-Color : " + `${bgcol}`;
        
    }))
    fetch(url).then((response)=>{
        return response.json();
    }).then((data=>{
        let layoutCol=data.hex;
        var numOfLayout = document.querySelectorAll(".layout").length;
        for (i=0; i<numOfLayout; i++){
        document.querySelectorAll(".layout")[i].style.backgroundColor=layoutCol;
    }}))

    setTimeout(getColors, 1500);
}

getColors()

