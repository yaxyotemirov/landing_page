"use client";
import Container from "../common/container";
import Title from "../common/title";

const Hero = () => {
  return (
    <section className="h-[calc(100vh-86px)] hero">
      <div className="bg-black/80 h-full flex items-center">
        <Container>
          <Title
            className="text-white lg:text-[40px] text-[28px] text-center"
            tag="h1"
            text="Biz web ilovalar yaratmiz"
          />
        </Container>
      </div>
    </section>
  );
};

export default Hero;
