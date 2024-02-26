copyButn1 = document.getElementById("copy1")
copyButn2 = document.getElementById("copy2")
copyButn3 = document.getElementById("copy3")
function alerts() {
    alert("تم نسخ النص")

}
copyButn1.onclick = alerts
copyButn2.onclick = alerts
copyButn3.onclick = alerts

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})