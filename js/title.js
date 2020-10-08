var Title = "Ego"
var ok = 0
var secs = 1
var inc = false
do {
    setTimeout(() => { Title.substring(0,ok); if (inc == false) { ok++; } else { ok--; } },secs*1000)
} while (setTimeout(() => {},secs*1000))
