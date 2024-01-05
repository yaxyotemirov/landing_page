"use client";
import Link from "next/link";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

/Mobil menu/;
const MobileMenu = () => {
  const serviceList = [
    { href: "/", name: "Sayt vizitka" },
    { href: "/", name: "Landing page" },
    { href: "/", name: "Korporativ sayt" },
    { href: "/", name: "Internet magazine" },
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
                className="block hover:bg-[#2563eb] hover:text-white px-2 rounded-md"
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
    <nav className="lg:hidden block">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="hover:text-[#2563eb] font-semibold uppercase inline-flex w-full justify-center items-center rounded-md p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            <img
              className="h-[40px] w-[40px] lg:hidden"
              src="/burger-menu.svg"
              alt=""
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
          <Menu.Items className="absolute w-[200px] right-0 flex flex-col p-4 mt-2 w-[300px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <Link className="mb-2" href="/">
              Bosh sahifa
            </Link>
            <div className="mb-2">
              <Disclosure>
                <Disclosure.Button className="text-left flex justify-between items-center w-full">
                  Xizmatlar
                  <ChevronDownIcon
                    className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100 "
                    aria-hidden="true"
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="text-gray-500">
                  {menuList(serviceList)}
                </Disclosure.Panel>
              </Disclosure>
            </div>

            <Link href="/contact">Kontaktlar</Link>
          </Menu.Items>
        </Transition>
      </Menu>
    </nav>
  );
};

export default MobileMenu;
