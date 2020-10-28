import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
    {
        altText: 'Slide 1',
        caption: <p><span class="animated swing">With <b>great coding</b></span><span className="animated bounceInLeft"> comes <b>great responsibility</b></span></p>,
        header: 'Slide 1 Header',
        key: '1'
    },
    {
        altText: 'Slide 2',
        caption: <p><span class="animated wobble">If you can't <b>create</b> it; </span><span class="animated bounceInLeft"><b>create</b> the illusion</span></p>,
        header: 'Slide 2 Header',
        key: '2'
    },
    {
        altText: 'Slide 3',
        caption: <p><span class="animated wobble">If you can't <b>create</b> it; </span><span class="animated bounceInLeft"><b>create</b> the illusion</span></p>,
        header: 'Slide 3 Header',
        key: '3'
    },
    {
        altText: 'Slide 3',
        caption: <p><span class="animated rotateOutDownRight">Web <b>programming</b></span><span class="animated bounceInLeft"> on <b>another level</b></span></p>,
        header: 'Slide 3 Header',
        key: '3'
    }
];

const Gallery = () => {
    return (
        <section id="main-carousel" className="jumbotron main-carousel">
            <UncontrolledCarousel items={items} />
        </section>
    )
};

export default Gallery;