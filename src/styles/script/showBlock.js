export default function showBlock() {
    const list = document.getElementsByClassName("show-block")

    const options = {
        rootMargin: "0px 0px -200px 0px",
        threshold: 0.3
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.remove(entry.target.getAttribute("data-move"))
            }
        })
    }, options)


    for(let elem of list) {
        observer.observe(elem)
    }
}