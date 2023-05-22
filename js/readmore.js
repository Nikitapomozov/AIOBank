readMore()

function readMore() {
    let dots = document.getElementById("dots");
    let more = document.getElementById("more");
    let btn = document.getElementById("reviews__card-btn");


    
    btn.addEventListener("click", () => {
        dots.classList.remove("active");
        more.classList.add("active");
        btn.classList.remove("active");
    })
}