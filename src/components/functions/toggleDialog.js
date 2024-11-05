function toggleDialog(id) {
    let elmt = document.getElementById(id)
    elmt.open ? elmt.close() : elmt.show()
    elmt.open
        ? document.body.classList.add("overflow-y-hidden")
        : document.body.classList.remove("overflow-y-hidden")
}

export default toggleDialog