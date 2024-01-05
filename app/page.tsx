"use client";

import Container from "@/components/common/container";
import DesktopMenu from "@/components/common/desktop-menu";
import Header from "@/components/common/header";
import Logo from "@/components/common/logo";
import MobileMenu from "@/components/common/mobile-menu";
import Hero from "@/components/home/hero";
import Service from "@/components/home/service";
import Form from "@/components/common/form";

export default function Home() {
  return (
    <>
      <Header>
        <Container>
          <div className="flex items-center justify-between">
            <Logo />
            <DesktopMenu />
            <MobileMenu />
          </div>
        </Container>
      </Header>
      <Hero />
      <Service />
      <section className="bg-green-400 lg:py-[100px] py-10 ">
        <Container>
          <Form />
        </Container>
      </section>
    </>
  );
}
