"use client";

import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const DesktopMenu = () => {
  const serviceList = [
    { href: "/", name: "Sayt vizitka" },
    { href: "/", name: "Landing page" },
    { href: "/", name: "Korporativ sayt" },
    { href: "/", name: "Internet magazin" },
    { href: "/", name: "Mobil ilova yaratish" },
    { href: "/", name: "Desktop ilova yaratish" },
  ];

  const menuList = (items: any) => {
    return (
      <div>
        {items.map((item: any, i: number) => (
          <Menu.Item>
            {({ active }) => (
              <Link
                className="block hover:bg-[#2563eb] hover:text-white p-2 rounded-md"
                href={item.href}
              >
                {item.name}
              </Link>
            )}
          </Menu.Item>
        ))}
      </div>
    );
  };

  return (
    <nav className="lg:block hidden">
      <Link className="hover:text-[#2563eb] font-semibold uppercase" href="/">
        Bosh sahifa
      </Link>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="hover:text-[#2563eb] ml-4 font-semibold uppercase inline-flex w-full justify-center items-center rounded-md px-4 py-2 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            Xizmatlar
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as="div"
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 mt-2 w-[300px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="p-4 ">{menuList(serviceList)}</div>
          </Menu.Items>
        </Transition>
      </Menu>
      <Link
        className="hover:text-[#2563eb] font-semibold uppercase ml-4"
        href="/contact"
      >
        Aloqa
      </Link>
    </nav>
  );
};

export default DesktopMenu;
