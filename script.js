const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((e1,index) => {
    e1.onclick = () => {
        const pageTurnId =e1.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;

            }, 500)
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            } , 500)
        }
        
        
    }
})

const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');

            setTimeout(() => {
                page.style.zIndex = 20 + index ;
            
            }, 500)
        }, (index + 1)*200 + 100 )
    })
}

let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber --;
    if (pageNumber < 0){
        pageNumber = totalPages - 1;
    }
}

const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_,index) => {
        setTimeout(() => {
            reverseIndex();
           pages[pageNumber].classList.remove('turn');
           setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
           },500)
        },(index + 1)*200 +100)
    })
}

const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

setTimeout(() => {
    coverRight.classList.add('turn');

}, 2100)

setTimeout(() => {
    coverRight.style.zIndex = -1 ;


}, 2800)

setTimeout(() => {
    pageLeft.style.zIndex = 20 ;
}, 3200)
pages.forEach((_,index) => {
    setTimeout(() => {
        reverseIndex();
       pages[pageNumber].classList.remove('turn');
       setTimeout(() => {
        reverseIndex();
        pages[pageNumber].style.zIndex = 10 + index;
       }, 500)
    },(index + 1)*200 +2100)
})

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    var form = event.target;
    var name = form.elements['name'].value;
    var email = form.elements['email'].value;
    var message = form.elements['message'].value;

    var mailtoLink = 'mailto:jaiswarritika457@gmail.com' +
        '?subject=' + encodeURIComponent('Contact Form Submission') +
        '&body=' + encodeURIComponent('Name: ' + name + '\n\nEmail: ' + email + '\n\nMessage: ' + message);

    window.location.href = mailtoLink;
});

const service = document.querySelector('.service');

function dull(){
    pageNumber= totalPages-3;
}

service.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            dull();
            pages[pageNumber].classList.add('turn');
           setTimeout(() => {
            dull();
            pages[pageNumber].style.zIndex = 20 + index;
           },500)
        }, (index + 1)*200 + 100 )
    })
}

const skills = document.querySelector('.sk');



skills.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            dull();
            pages[pageNumber].classList.add('turn');
           setTimeout(() => {
            dull();
            pages[pageNumber].style.zIndex = 20 + index;
           },500)
        }, (index + 1)*200 + 100 )
    })
}



