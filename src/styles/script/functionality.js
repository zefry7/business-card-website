//прокрутка к указанному блоку
export function moveToSection(e) {
    e.stopPropagation()
    const target = e.currentTarget
    const el = document?.getElementById(target.getAttribute("data-section"))
    let y = el?.offsetTop

    if(target.getAttribute("data-section") == "contact") {
        y = document.getElementById("footer")?.offsetTop - window.innerHeight - 10
    } 

    window.scrollTo({
        top: y,
        behavior: "smooth"
    })
}
