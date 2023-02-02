import React, {useRef} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectFade, Navigation} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import {Container, Row} from 'react-bootstrap';
import {mySwiper, swiperNavNext, swiperNavPrev , icon} from './home.module.css';
import Big from '../images/big.jpg';
import Recipe from '../images/recipe-1.jpeg';
import Main from '../images/main.jpeg';
import {FiChevronLeft, FiChevronRight} from "react-icons/all";


const SliderOne = () => {
    // For the Slider Arrows :
    const swiperNavPrevRef = useRef(null);
    const swiperNavNextRef = useRef(null);

    return (
        <Container fluid>
            <Row>
                <Swiper
                    modules={[Navigation, EffectFade]}
                    navigation={{
                        prevEl: swiperNavPrevRef.current,
                        nextEl: swiperNavNextRef.current,
                    }}
                    effect
                    // effect={'fade'}
                    speed={800}
                    slidesPerView={1}
                    loop
                    className={mySwiper}

                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = swiperNavPrevRef.current;
                        swiper.params.navigation.nextEl = swiperNavNextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                >
                    <SwiperSlide>
                        <img src={Big} alt="img-1"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Recipe} alt="img-1"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Main} alt="img-1"/>
                    </SwiperSlide>
                    {/*  Custom Arrows  */}
                    <div className={`${swiperNavPrev}`} ref={swiperNavPrevRef}><FiChevronLeft className={icon}/></div>
                    <div className={`${swiperNavNext}`} ref={swiperNavNextRef}><FiChevronRight className={icon}/></div>
                </Swiper>
            </Row>
        </Container>

    );
};

export default SliderOne;