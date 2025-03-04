import React, { useState, useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import ServiceCard from './ServiceCard';

// 服务卡片数据类型
export interface ServiceCardData {
  img_preview: string;
  title: string;
  text: string;
  avatar: string;
  price: string;
  currency: string;
  country: string;
  date?: string;
}

interface ServicesSectionProps {
  services: ServiceCardData[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  const ref = useRef<SwiperRef>(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [breakpoint, setBreakpoint] = useState(0);

  return (
    <section className="relative mx-auto max-w-screen-lg overflow-hidden py-8">
      <Swiper
        className="!pb-12"
        spaceBetween={40}
        modules={[Autoplay, Pagination]}
        slidesPerView={1.5}
        onSlideChange={() => {
          setBreakpoint(ref.current?.swiper.currentBreakpoint === 'max' ? 1 : 0);
          setActiveIndex(ref.current?.swiper.realIndex ?? 0);
        }}
        loop
        speed={1000}
        // autoplay
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        pagination={{ clickable: true }}
        ref={ref}
      >
        {services.map((service, index) => (
          <SwiperSlide key={service.img_preview}>
            <div
              className="ml-4 sm:ml-0"
              onClick={() => {
                if (
                  (breakpoint === 0 && activeIndex === index - 1) ||
                  (breakpoint === 1 && activeIndex === index)
                ) {
                  return;
                }

                if (breakpoint === 0 && activeIndex === index) {
                  ref.current?.swiper.slidePrev();
                  return;
                }

                ref.current?.swiper.slideNext();
              }}
            >
              <ServiceCard
                title={service.title}
                text={service.text}
                avatar={service.avatar}
                price={service.price}
                currency={service.currency}
                country={service.country}
                date={service.date}
                img_preview={service.img_preview}
                isActive={
                  breakpoint === 0
                    ? activeIndex === index - 1 ||
                      (activeIndex === services.length - 1 && index === 0)
                    : activeIndex === index
                }
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ServicesSection;
