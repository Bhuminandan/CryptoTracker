let themeBtn = document.querySelector(".header__switch-btn>input");
let mobThemeBtn = document.querySelector(".mobile-header__switch-btn>input")
// let swithAfterElement = window.getComputedStyle(themeBtn, '::after');

// let swithAfterElement = document.styleSheets[0].cssRules[1];

let tableTotalValume = document.querySelector(".table-total__valume");
let tableTotalCap = document.querySelector(".table-market__cap");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    tableTotalValume.style.color = "#6c6c6c";
    tableTotalCap.style.color = "#6c6c6c";
})

mobThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    tableTotalValume.style.color = "#fff";
    tableTotalCap.style.color = "#fff";
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
let main = document.querySelector(".main__grid");

let mainHeaderLeft = document.getElementsByClassName("main__header-left")[0];
let mainHeaderRight = document.getElementsByClassName("main__header-right")[0];
mainHeaderLeft.classList.add("main__header-active");
mainHeaderLeft.addEventListener("click", () => {
    mainHeaderLeft.classList.add("main__header-active");
    mainHeaderRight.classList.remove("main__header-active")
    main.innerHTML = "";
    defaultPageGridData (); 
})

let table = document.getElementById("table");


mainHeaderRight.addEventListener("click", () => {
    main.innerHTML = "";
    mainHeaderRight.classList.add("main__header-active");
    mainHeaderLeft.classList.remove("main__header-active");
    async function getData() {
        let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";
        let response = await fetch(url);
        let data = await response.json();
        createList(data);
    }
    getData()

    function createList(dataList) {
        dataList.forEach((singleData) => {
            let tr = document.createElement("tr");
            tr.classList.add("tr");
            
            let trInnerHtml = `<td>
                                    <div class="table-main__grid-card-top">
                                    <div class="table-main__grid-card-top-left">
                                        <img
                                        src="${singleData.image}"
                                        alt="icon imag"
                                        />
                                    </div>
                                    <div class="table-main__grid-card-top-right">
                                        <h5>${singleData.symbol.toUpperCase()}</h5>
                                        <p>${singleData.name}</p>
                                    </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="table-percentage">${singleData.price_change_percentage_24h} %</div>
                                </td>
                                <td>
                                    <div class="table-price">$ ${singleData.current_price}</div>
                                </td>
                                <td>
                                    <div class="table-total__valume">Total Valume: ${singleData.total_volume}</div>
                                </td>
                                <td>
                                    <div class="table-market__cap">Market Cap:$ ${singleData.market_cap}</div>
                                </td>`
            tr.innerHTML = trInnerHtml;
            // Get the elements inside the card
        let percentageDiv = tr.querySelector(".table-percentage");
        let priceDiv = tr.querySelector(".table-price");

        // Apply styles based on the condition
        if (singleData.price_change_percentage_24h < 0) {
            percentageDiv.style.borderColor = "#e7514a";
            percentageDiv.style.color = "#e7514a";
            priceDiv.style.color = "#e7514a";
        }
            table.appendChild(tr);
        })
    }

})

function defaultPageGridData () {async function getData() {
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
                                                <h5>${singleObj.symbol.toUpperCase()}</h5>
                                                <p>${singleObj.name}</p>
                                                </div>
                                            </div>
                                            <div class="main__grid-card-bottom">
                                                <div class="percentage">${singleObj.price_change_percentage_24h} %</div>
                                                <div class="price">$ ${singleObj.current_price}</div>
                                                <div class="total__valume">Total Valume: ${singleObj.total_volume}</div>
                                                <div class="market__cap">Market Cap:$ ${singleObj.market_cap}</div>
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

}}
defaultPageGridData ();

const checkbox = document.getElementById("toggle");
  const switchElement = document.querySelector(".switch");

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      switchElement.style.setProperty("--pseudo-left", "20px");
    } else {
      switchElement.style.setProperty("--pseudo-left", "0");
    }
  });


  const mobilecheckbox = document.getElementById("toggle");
  const mobileswitchElement = document.querySelector(".mobile-switch");

  mobilecheckbox.addEventListener("change", function () {
    if (mobilecheckbox.checked) {
        mobileswitchElement.style.setProperty("--pseudo-left-", "20px");
    } else {
        mobileswitchElement.style.setProperty("--pseudo-left-", "0");
    }
  });


