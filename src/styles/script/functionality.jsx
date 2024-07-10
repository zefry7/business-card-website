//прокрутка к указанному блоку
export function moveToSection(e) {
    e.stopPropagation()
    const target = e.currentTarget
    const el = document?.getElementById(target.getAttribute("data-section"))

    console.log(el?.offsetTop);

    let y = el?.offsetTop

    if(target.getAttribute("data-section") == "about") {
        y += window.innerHeight + 50
    } else if(target.getAttribute("data-section") == "contact") {
        y = document.getElementById("footer")?.offsetTop - window.innerHeight - 10
    }

    console.log(y);

    window.scrollTo({
        top: y,
        behavior: "smooth"
    })
}

//выделение названия видимого блока в Header 
export function sectionInFocus(classLink, nameAttrSection, classInFocus) {
    const listLink = document.getElementsByClassName(classLink)

    for (let link of listLink) {
        window.addEventListener("scroll", () => {
            const el = document.getElementById(link.getAttribute(nameAttrSection))

            if (el) {
                if (el.offsetTop - window.scrollY < window.innerHeight / 2 && window.scrollY < el.offsetTop + el.offsetHeight / 2) {
                    link.classList.add(classInFocus)
                }
                else if (link.getAttribute(nameAttrSection) == "footer" && window.scrollY > document.body.offsetHeight - window.innerHeight - 120) {
                    link.classList.add(classInFocus)
                }
                else {
                    link.classList.remove(classInFocus)
                }
            }
        })
    }
}

//эффект параллакса для элементов
export function parallaxElement(classElement, wrapperClass) {
    const root = document.getElementsByClassName(wrapperClass)[0]
    const decorList = document.getElementsByClassName(classElement)

    root.addEventListener("mousemove", (e) => {
        const sizeWindow = window.innerWidth

        if (sizeWindow > 768) {
            const parallaxLeftOffset = root.getBoundingClientRect().left;
            const parallaxTopOffset = root.getBoundingClientRect().top;
            const coordX = e.clientX - parallaxLeftOffset - 0.5 * root.offsetWidth;
            const coordY = e.clientY - parallaxTopOffset - 0.5 * root.offsetHeight;

            for (let decor of decorList) {
                decor.setAttribute('style', `position: absolute; left: ${coordX.toFixed(2) * decor.getAttribute("data-speed")}px; top: ${coordY.toFixed(2) * decor.getAttribute("data-speed")}px;`)
            }
        }
    })

}