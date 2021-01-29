import img1 from "@/assets/img/img-1.jpg";
import img2 from "../assets/img/img-2.jpg";
import img3 from "../assets/img/img-3.jpg";

export const defaultState = [
  {
    id: 1,
    name: "Рождение Венеры",
    author: "Сандро Боттичелли",
    oldPrice: "2000000",
    price: "1000000",
    isBought: false,
    inBasket: false,
    image: img1,
  },
  {
    id: 2,
    name: "Тайная вечеря",
    author: "Леонардо да Винчи",
    oldPrice: "",
    price: "3000000",
    isBought: false,
    inBasket: false,
    image: img2,
  },
  {
    id: 3,
    name: "Сотворение Адама",
    author: "Микеланджело",
    oldPrice: "6000000",
    price: "5000000",
    isBought: false,
    inBasket: false,
    image: img3,
  },
  {
    id: 4,
    name: "Урок анатомии",
    author: "Рембрандт",
    oldPrice: "",
    price: "7000000",
    isBought: true,
    inBasket: false,
    image: img3,
  },
];
