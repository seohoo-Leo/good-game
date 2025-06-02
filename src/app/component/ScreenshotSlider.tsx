'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import Image from 'next/image';
import { Swiper as SwiperType } from 'swiper';


type Props = {
  images: string[];
};

export default function ScreenshotSlider({ images }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

    
  return (
    <div className="w-full max-w-lg sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
      {/* 메인 슬라이더 */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Thumbs]}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          thumbs={{ swiper: thumbsSwiper }}
          spaceBetween={10}
          className="rounded-lg overflow-hidden relative aspect-video w-full"
        >
          {images?.map((src, i) => (
            <SwiperSlide key={i}>
              {src?  <Image
                src={src}
                alt={`screenshot-${i}`}
                fill
                className="w-full h-[720px] object-cover"
              /> : null}
             
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 커스텀 네비게이션 버튼 */}
        <button className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white p-2 rounded-full shadow">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white p-2 rounded-full shadow">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* 썸네일 슬라이더 */}
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[FreeMode, Thumbs]}
        slidesPerView={Math.min(images?.length, 5)}
        freeMode={true}
        watchSlidesProgress={true}
        spaceBetween={10}
        className="mt-4 px-2 h-20"
      >
        { images?.map((src, i) => (
          <SwiperSlide key={i} className=" relative aspect-video cursor-pointer rounded overflow-hidden border-4 transition-all duration-200
                 border-transparent opacity-70 hover:opacity-100
                 [&.swiper-slide-thumb-active]:border-blue-500 [&.swiper-slide-thumb-active]:opacity-100 [&.swiper-slide-thumb-active]:ring-2 [&.swiper-slide-thumb-active]:ring-blue-300">
            {src ? <Image
              src={src}
              alt={`thumb-${i}`}
              fill
              className="object-cover w-full h-20"
            />: null }
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}