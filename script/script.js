let themeBtn = document.querySelector(".header__switch-btn>input");
let mobThemeBtn = document.querySelector(".mobile-header__switch-btn>input")
// let swithAfterElement = window.getComputedStyle(themeBtn, '::after');

// let swithAfterElement = document.styleSheets[0].cssRules[1];

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
})

mobThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
})


let menuIcon = document.querySelector("#mobile-nav-icon");

let mobileNav = document.querySelector(".mobile-header");

let isMobNavOpen = false;
menuIcon.addEventListener("click", () => {
    if (isMobNavOpen === false) {
        mobileNav.style.display = "block";
        isMobNavOpen = true;
    } else {
        mobileNav.style.display = "none";
        isMobNavOpen = false;
    }
})

// Adding styles to main header title ---------------------

let mainHeaderLeft = document.querySelector(".main__header-left");
let mainHeaderRight = document.querySelector(".main__header-right");
mainHeaderLeft.classList.add("main__header-active");
mainHeaderLeft.addEventListener("click", () => {
    mainHeaderLeft.classList.add("main__header-active");
    mainHeaderRight.classList.remove("main__header-active")
})

mainHeaderRight.addEventListener("click", () => {
    mainHeaderRight.classList.add("main__header-active");
    mainHeaderLeft.classList.remove("main__header-active")
})


async function getData() {
    let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";
    let response = await fetch(url);
    let data = await response.json();
    createGrid(data);
}

getData();

let mainGrid = document.querySelector(".main__grid");

function createGrid(dataList) {
    dataList.forEach((singleObj) => {
        
        let gridElement = document.createElement("div");
        gridElement.classList.add("main__grid-card");
        let innerHtmlCard = `<div class="main__grid-card-top">
                                    <div class="main__grid-card-top-left">
                                    <img src="${singleObj.image}" alt="icon imag" />
                                    </div>
                                    <div class="main__grid-card-top-right">
                                    <h5>${singleObj.id}</h5>
                                    <p>${singleObj.name}</p>
                                    </div>
                                </div>
                                <div class="main__grid-card-bottom">
                                    <div class="percentage">${singleObj.price_change_percentage_24h} %</div>
                                    <div class="price">$ ${singleObj.current_price}</div>
                                    <div class="total__valume">Total Valume: ${singleObj.total_volume}</div>
                                    <div class="market__cap">Market Cap: ${singleObj.market_cap}</div>
                                </div>`
        gridElement.innerHTML = innerHtmlCard;

        // Get the elements inside the card
        let percentageDiv = gridElement.querySelector(".percentage");
        let priceDiv = gridElement.querySelector(".price");

        // Apply styles based on the condition
        if (singleObj.price_change_percentage_24h < 0) {
            percentageDiv.style.borderColor = "#e7514a";
            percentageDiv.style.color = "#e7514a";
            priceDiv.style.color = "#e7514a";
        }

        mainGrid.appendChild(gridElement)
    })

}

