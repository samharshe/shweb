var pdf = document.getElementById('pdf');
let heightWidthRatio = 1.3 //11x8.5

resizePDF()
window.onresize = resizePDF

function resizePDF() {
    pdf.height = String(pdf.getBoundingClientRect().width * heightWidthRatio)
}