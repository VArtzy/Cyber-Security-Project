const t = document.querySelector(".qc-date")
setInterval(() => {
    t.textContent = `Terakhir Diperbarui: ${new Date().toLocaleString()}`
}, 1000)
