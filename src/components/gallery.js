import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
    {
        altText: 'Slide 1',
        caption: <span><span className="animated tada"><b>Uncommon</b> things</span><span className="animated bounceInLeft"> in <b>common ways</b></span></span>,
        header: 'Slide 1 Header',
        key: '1'
    },
    {
        altText: 'Slide 2',
        caption: <span><span className="animated swing">With <b>great coding</b></span><span className="animated bounceInLeft"> comes <b>great responsibility</b></span></span>,
        header: 'Slide 2 Header',
        key: '2'
    },
    {
        altText: 'Slide 3',
        caption: <span><span className="animated wobble">If you can't <b>create</b> it; </span><span className="animated bounceInLeft"><b>create</b> the illusion</span></span>,
        header: 'Slide 3 Header',
        key: '3'
    },
    {
        altText: 'Slide 3',
        caption: <span><span className="animated rotateOutDownRight">Web <b>programming</b></span><span className="animated bounceInLeft"> on <b>another level</b></span></span>,
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