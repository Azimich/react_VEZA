import { ISliderProps } from "./Slider.d";

const sliderData: ISliderProps = {
  items: [
    {
      images: {
        pc: "/images/banner.jpg",
        ipad: "/images/banner__ipad.jpg",
        mobile: "/images/banner__phone.jpg",
      },
      block_description: false,

      typeSlider: "img",
      alt: "banner",
    },
    {
      images: {
        pc: "/images/banner.jpg",
        ipad: "/images/banner__ipad.jpg",
        mobile: "/images/banner__phone.jpg",
      },
      block_description: true,
      title: "Основа для здоровой жизни",
      description:
        "Lorem ipstum dolor sit amet, at ipsum imperdiet, dui ipsum conubia susndisse",
      typeSlider: "img",
      url: "production",
      alt: "banner",
    },
    {
      images: "/images/banner_2.mp4",
      block_description: false,

      typeSlider: "video",
      alt: "video banner",
    },
  ],
};
const sliderCategory: ISliderProps = {
  items: [
    {
      images: {
        pc: "/images/obrud-1.jpg",
        ipad: "/images/obrud-1.jpg",
        mobile: "/images/obrud-1.jpg",
      },
      block_description: false,
      typeSlider: "img",
      alt: "banner",
      url_banner: "/production-page.html",
    },
    {
      images: {
        pc: "/images/obrud-1.jpg",
        ipad: "/images/obrud-1.jpg",
        mobile: "/images/obrud-1.jpg",
      },
      block_description: false,
      typeSlider: "img",
      alt: "obrud",
      url_banner: "/production-page.html",
    },
    {
      images: {
        pc: "/images/obrud-2.jpg",
        ipad: "/images/obrud-2.jpg",
        mobile: "/images/obrud-2.jpg",
      },
      block_description: false,
      typeSlider: "img",
      alt: "obrud",
      url_banner: "/production-page.html",
    },
    {
      images: {
        pc: "/images/obrud-3.jpg",
        ipad: "/images/obrud-3.jpg",
        mobile: "/images/obrud-3.jpg",
      },
      block_description: false,
      typeSlider: "img",
      alt: "obrud",
      url_banner: "/production-page.html",
    },
    {
      images: {
        pc: "/images/obrud-4.jpg",
        ipad: "/images/obrud-4.jpg",
        mobile: "/images/obrud-4.jpg",
      },
      block_description: false,
      typeSlider: "img",
      alt: "obrud",
      url_banner: "/production-page.html",
    },
  ],
};
export { sliderData, sliderCategory };
