var title = "Ego"
var num = 1
var lol = false
async function changetitle(t,n) {
    window.document.title = t.substring(0,n)
}
do {
    changetitle(title,num)
    num++
    if (num >= 2) {
        lol = true
    }
} while (lol == false)
while (lol == true) {
    changetitle(title,num)
    num--
    if (num <= -1) {
        lol = false
    }
}