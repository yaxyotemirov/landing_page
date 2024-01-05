"use client";

const Header = (props) => {
  const { children } = props;
  return <header className="py-2">{children}</header>;
};

export default Header;
