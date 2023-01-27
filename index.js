"use strict"

$(function () {
    let data = [
        {
            name: 'Zoomba-deluxe1',
            pic_url: './assets/gizmo.jpg',
            project_link: null,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad asperiores consectetur ' +
                'consequuntur cupiditate, dolore officiis perferendis sapiente sequi tenetur.\n',
        },
        {
            name: 'Zoomba-deluxe2',
            pic_url: './assets/kotic.jpg',
            project_link: 'https://vk.com/ptiza_vorobei',
            description: ' ipsum dolor sit amet, consectetur adipisicing elit. A ad asperiores consectetur ' +
                'consequuntur cupiditate, dolore officiis perferendis sapiente sequi tenetur.\n',
        },
        {
            name: 'Zoomba-deluxe3',
            pic_url: './assets/stich.jpg',
            project_link: null,
            description: ' sit amet, consectetur adipisicing elit. A ad asperiores consectetur ' +
                'consequuntur cupiditate, dolore officiis perferendis sapiente sequi tenetur.\n',
        }, {
            name: 'Zoomba-deluxe4',
            pic_url: './assets/kotiq.jfif',
            project_link: 'https://vk.com/ptiza_vorobei',
            description: ' amet, consectetur adipisicing elit. A ad asperiores consectetur ' +
                'consequuntur cupiditate, dolore officiis perferendis sapiente sequi tenetur.\n',
        }, {
            name: 'Zoomba-deluxe5',
            pic_url: './assets/stich.jpg',
            project_link: null,
            description: ' consectetur adipisicing elit. A ad asperiores consectetur ' +
                'consequuntur cupiditate, dolore officiis perferendis sapiente sequi tenetur.\n',
        }, {
            name: 'Zoomba-deluxe6',
            pic_url: './assets/kotiq.jfif',
            project_link: null,
            description: ' adipisicing elit. A ad asperiores consectetur ' +
                'consequuntur cupiditate, dolore officiis perferendis sapiente sequi tenetur.\n',
        },
    ]

    let dataCopy = [...data]

    let carousel = $('#slides-container')
    let description = $('#carousel-description')
    let prevBtn = $('#slide-arrow-prev')
    let nextBtn = $('#slide-arrow-next')

    let carouselSize = 4

    prevBtn.on('click', () => {
        dataCopy.unshift(dataCopy.pop())
        rerenderCarousel(dataCopy)
    })
    nextBtn.on('click', () => {
        dataCopy.push(dataCopy.shift())
        rerenderCarousel(dataCopy)
    })

    const rerenderCarousel = (data) => {
        carousel.html(data.map((project, index) => {
                if (index < carouselSize) {
                    return (
                    `<div class="slide">
                        <h4>${project.name}</h4>
                        <a href=${project.project_link || '#'} target="_blank">
                            <img src=${project.pic_url} alt=${project.pic_url} width="100px"/>
                        </a>
                    </div>`
                    )
                } else {
                    return ''
                }
            }
        ))
        description.text(data[1].description)
    }

    rerenderCarousel(data)
});
