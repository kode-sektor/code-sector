import React from 'react'

const gallery = () => {
    return (
        <section id="main-carousel" class="jumbotron">

            <div class="carousel slide container" id="screenshot-carousel" data-ride="carousel">

                <ol class="carousel-indicators">
                    <li data-target="#screenshot-carousel" data-slide-to="0"></li>
                    <li data-target="#screenshot-carousel" data-slide-to="1"></li>
                    <li data-target="#screenshot-carousel" data-slide-to="2"></li>
                    <li data-target="#screenshot-carousel" data-slide-to="3"></li>
                </ol>

                <div class="carousel-inner">

                    <p class="author"><span>code</span> <span>sector</span></p>                    
                    <div class="carousel-item active">
                        <div class="carousel-caption">
                            <p><span class="animated tada"><b>Uncommon</b> things</span><span class="animated bounceInLeft"> in <b>common ways</b></span></p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="carousel-caption">
                            <p><span class="animated swing">With <b>great coding</b></span><span class="animated bounceInLeft"> comes <b>great responsibility</b></span></p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="carousel-caption">
                            <p><span class="animated wobble">If you can't <b>create</b> it; </span><span class="animated bounceInLeft"><b>create</b> the illusion</span></p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="carousel-caption">
                            <p><span class="animated rotateOutDownRight">Web <b>programming</b></span><span class="animated bounceInLeft"> on <b>another level</b></span></p>
                        </div>
                    </div>
                </div>

                <a href="#screenshot-carousel" class="carousel-control-prev left carousel-control" data-slide="prev">
                    <span class="fa-4x fa fa-angle-left"></span>
                </a>
                <a href="#screenshot-carousel" class="carousel-control-next right carousel-control" data-slide="next">
                    <span class="fa-4x fa fa-angle-right"></span>
                </a>

            </div>

        </section>
    )
}

export default gallery
