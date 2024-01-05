"use client";

import Slider from "react-slick";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const Carousel = (props) => {
  const { items } = props;
  let [isOpen, setIsOpen] = useState(false);
  let [activeItem, setActiveItem] = useState(null);

  const openModal = (item) => {
    setIsOpen(true);
    setActiveItem(item);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-[800px] mx-auto">
      <h2 className="text-center uppercase text-[34px] font-bold lg:text-[28px] text-[18px]">
        Bizning xizmatlar
      </h2>
      <Slider {...settings}>
        {items.map((item, i) => (
          <div key={i} className="p-10 text-center rounded-lg shadow-lg h-full">
            <img className="w-[70px] mx-auto mb-10" src={item.image} alt="" />
            <h2 className="lg:text-[17px] text-[14px] uppercase font-bold mb-2">
              {item.text}
            </h2>
            <button
              onClick={() => openModal(item)}
              className="font-bold rounded-full border border-blue-600 bg-black-500 px-10 py-2 hover:bg-blue-700 hover:text-white"
              tipe="button"
            >
              Batafsil
            </button>

            <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900 upperrcasse"
                        >
                          {activeItem?.text}
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500"></p>
                          {activeItem?.description}
                        </div>

                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-full border border-transparent bg-blue-400 px-4 py-2 text-sm font-medium text-black-800 hover:bg-blue-900 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModal}
                          >
                            Tushunarli!
                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
