const images = document.querySelectorAll('img[data-src]')

const observe = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            
        }
    })
})