var whitelistbutton = document.getElementById("entertime")
var inputtime = document.getElementById("whitelistkey")
whitelistbutton.onclick = function() {
    if (inputtime.value == "egoisbest") {
	let wl = new URL("./whitelist.html")
        window.location.replace(wl)
    }
}