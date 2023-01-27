"use strict"

$(function () {
    let data = [
        {
            name: 'Zoomba-deluxe',
            pic_url: './assets/gizmo.jpg',
            project_link: null,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad asperiores consectetur ' +
                'consequuntur cupiditate, dolore officiis perferendis sapiente sequi tenetur.\n',
        },
        {
            name: 'Zoomba-deluxe',
            pic_url: './assets/kotic.jpg',
            project_link: 'https://vk.com/ptiza_vorobei',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad asperiores consectetur ' +
                'consequuntur cupiditate, dolore officiis perferendis sapiente sequi tenetur.\n',
        },
        {
            name: 'Zoomba-deluxe',
            pic_url: './assets/stich.jpg',
            project_link: null,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad asperiores consectetur ' +
                'consequuntur cupiditate, dolore officiis perferendis sapiente sequi tenetur.\n',
        }, {
            name: 'Zoomba-deluxe',
            pic_url: './assets/kotiq.jfif',
            project_link: null,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad asperiores consectetur ' +
                'consequuntur cupiditate, dolore officiis perferendis sapiente sequi tenetur.\n',
        }, {
            name: 'Zoomba-deluxe',
            pic_url: 'https://via.placeholder.com/50/00FFFF/000000',
            project_link: null,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad asperiores consectetur ' +
                'consequuntur cupiditate, dolore officiis perferendis sapiente sequi tenetur.\n',
        }, {
            name: 'Zoomba-deluxe',
            pic_url: 'https://via.placeholder.com/50/0000FF/000000',
            project_link: null,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad asperiores consectetur ' +
                'consequuntur cupiditate, dolore officiis perferendis sapiente sequi tenetur.\n',
        },]

    let carousel = $('#slides-container')
    let description = $('#carousel-description')
    let prevBtn = $('#slide-arrow-prev')
    let nextBtn = $('#slide-arrow-next')

    let carouselSize = 3
    let carouselPage = 0

    prevBtn.on('click', () => {
        if (carouselPage > 0) carouselPage--
        rerenderCarousel()
    })
    nextBtn.on('click', () => {
        if (carouselPage < data.length - carouselSize) carouselPage++
        rerenderCarousel()
    })

    const rerenderCarousel = () => {
        carousel.html(data.map((project, index) => {
                if (index >= carouselPage && index < carouselPage + carouselSize) {
                    return (
                    `<div class="slide">
                        <h4>${project.name}</h4>
                        <a href=${project.project_link || ''} target="_blank">
                            <img src=${project.pic_url} alt=${project.pic_url} width="100px"/>
                        </a>
                    </div>`
                    )
                } else {
                    return ''
                }
            }
        ))
        description.text(data[carouselPage].description)
    }

    rerenderCarousel()
});
