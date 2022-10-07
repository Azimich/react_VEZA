import { ISliderProps } from "./Slider.d";

const sliderData:ISliderProps = {
  items: [{
    images: {
      pc: "/images/banner.jpg",
      ipad: "/images/banner__ipad.jpg",
      mobile: "/images/banner__phone.jpg"
    },
    block_description:false,

    typeSlider: "img",
    alt: "banner"
  }, {
    images: {
      pc: "/images/banner.jpg",
      ipad: "/images/banner__ipad.jpg",
      mobile: "/images/banner__phone.jpg"
    },
    block_description: true,
    title:"Основа для здоровой жизни",
    description:"Lorem ipstum dolor sit amet, at ipsum imperdiet, dui ipsum conubia susndisse",
    typeSlider: "img",
    url:"production",
    alt: "banner"
  },{
    images: "/images/banner_2.mp4",
    block_description:false,

    typeSlider: "video",
    alt: "video banner"
  }
  ]
}

export { sliderData };
