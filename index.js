function convertToUSD(e){
    e.preventDefault()
    usd = Number(e.target.yen.value) * 0.0072
    yen = Number(e.target.yen.value)
    document.getElementById("display").innerText = yen.toFixed() + " JPY is equal to " + usd.toFixed(2) + " USD."
}

const form = document.querySelector("form")
document.querySelector("form").addEventListener("submit", convertToUSD)