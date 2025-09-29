const images = document.querySelectorAll('img[data-src]')
const show = document.querySelector('.show')

const observe = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            const img = entry.target
            img.src = img.dataset.src
            console.log('видно')

            img.onload = () => {
                img.classList.add('load')
            }
            observer.unobserve(img)
        }
    })
}, {
    threshold: 0.1,
    rootMargin: "0px 0px 200px 0px" 
})

images.forEach(img => observe.observe(img))


show.addEventListener('click', (e) => {
    images.forEach(img => {
        if (!img.scr){
            img.src = img.dataset.src
            console.log('видно')
            img.onload = () => {
                img.classList.add('load')
            }
            observe.unobserve(img)
        }
    })
})