let body = document.body

for (let i = 0; i < 50; i++){
    let snowy = document.createElement('div')
    snowy.classList.add('snowy')
    snowy.style.left = `${Math.random() * 100}vw`
    snowy.style.animationDuration = `${Math.random() * 3 + 2}s`
    body.appendChild(snowy)
}







const day = document.getElementById("day")
const hrs = document.getElementById("hrs")
const min = document.getElementById("min")
const sec = document.getElementById("sec")

const currentYear = new Date().getFullYear()
const newYear = new Date(`1 Jan ${currentYear + 1} 00:00:00`)


function taimer() {
    const todayDate = Date.now()
    const kunder = newYear - todayDate
    const kun = Math.floor(kunder / 1000 / 60 / 60 / 24)
    const sagat = Math.floor((kunder / 1000 / 60 / 60) % 24)
    const minuty = Math.floor((kunder / 1000 / 60) % 60)
    const secundy = Math.floor((kunder / 1000) % 60)

    day.innerHTML = kun < 10 ? "0" + kun : kun
    hrs.innerHTML = sagat < 10 ? "0" + sagat : sagat
    min.innerHTML = minuty < 10 ? "0" + minuty : minuty
    sec.innerHTML = secundy < 10 ? "0" + secundy : secundy
}
setInterval(taimer, 1000)



