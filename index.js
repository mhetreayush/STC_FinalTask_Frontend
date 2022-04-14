const products = document.querySelector(".placeHolder");

function createProd(img, name) {
    let code = `
    <div class="layout">
            <img src="${img}" alt="">
            <h1 style="font-family: 'Bebas Neue', cursive;">${name}</h1>
            <h6>Description</h6>
    </div>
    `;
    products.innerHTML += code;
}

let item1 = {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnnObTCNg1QJoEd9Krwl3kSUnPYTZrxb5Ig&usqp=CAU",
    name: "Orange"
};

let item2 = {
    img: "https://www.collinsdictionary.com/images/full/apple_158989157.jpg",
    name: "Apple"
};

let item3 = {
    img: "https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bananas-218094b-scaled.jpg",
    name: "Banana"
};
for (i = 0; i < 5; i++) {
    createProd(item1.img, item1.name);
    createProd(item2.img, item2.name);
    createProd(item3.img, item3.name);
}

function getColors() {
    url = "https://x-colors.herokuapp.com/api/random";
    fetch(url).then((response) => {
        return response.json();
    }).then((data => {
        let bgcol = data.hex;
        document.body.style.backgroundColor = `${bgcol}`;
        document.querySelector("title").innerHTML = "BG-Color : " + `${bgcol}`;

    }))
    fetch(url).then((response) => {
        return response.json();
    }).then((data => {
        let layoutCol = data.hex;
        var numOfLayout = document.querySelectorAll(".layout").length;
        for (i = 0; i < numOfLayout; i++) {
            document.querySelectorAll(".layout")[i].style.backgroundColor = layoutCol;
        }
    }))

    setTimeout(getColors, 1500);
}

getColors()

const searchInput = document.getElementById("search");

searchInput.addEventListener("input", e => {
    var numOfLayout = document.querySelectorAll(".layout").length;
    
    for (i=0; i<numOfLayout; i++){
        const value = e.target.value;
        var check = document.querySelectorAll(".layout")[i].querySelector("h1").innerHTML;
    console.log(i)
    console.log(check.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
    if(check.toLocaleLowerCase().includes(value.toLocaleLowerCase())==false){
        document.querySelectorAll(".layout")[i].style.display="none"
    }
    else{
        document.querySelectorAll(".layout")[i].style.display="inline-block"
    }
    }
})