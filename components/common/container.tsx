"use client";

const Container = (props: any) => {
  const { children } = props;
  return <div className="max-w-7xl mx-auto px-2">{children}</div>;
};

export default Container;
