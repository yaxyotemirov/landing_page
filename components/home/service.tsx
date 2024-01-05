"use cleint";

import Carousel from "../common/carousel";
import Container from "../common/container";

const Service = () => {
  const serviceList = [
    {
      text: "Sayt vizitka",
      description:
        "Bu tashrif buyuruvchilarning e'tiborini jalb qilish, ularni ma'lum bir mahsulot yoki xizmat bilan tanishtirish va keyin ularni kerakli harakatni qilishga undash uchun ishlatiladi.",
      image: "/html-css.jpg",
    },
    {
      text: "Landing page",
      description:
        "Internetda brendni rasman namoyish qilish uchun foydalaniladi",
      image: "/html-css.jpg",
    },
    {
      text: "Korporativ sayt",
      description:
        "Mahsulotni reklama qiladi, mahsulot katalogini o'z ichiga oladi va mijozga mahsulotni uydan chiqmasdan sotib olish imkonini beradi.",
      image: "/js.jpg",
    },
    {
      text: "Internet magazin",
      description:
        " Shaxsiy ma'lumotlarni, aloqa ma'lumotlarini va boshqa ijtimoiy profillarga havolalarni ko'rsatadi",
      image: "/js.jpg",
    },
    { text: "Mobil ilova yaratish", description: "Описание", image: "/js.jpg" },
    {
      text: "Desktop ilova yaratish",
      description: "Описание",
      image: "/js.jpg",
    },
  ];
  return (
    <section className="lg:py-70 py-10">
      <Container>
        <Carousel items={serviceList} />
      </Container>
    </section>
  );
};

export default Service;
