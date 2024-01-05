"use client";

const Title = (props: any) => {
  const { tag, text, className } = props;

  if (tag === "h1") return <h1 className={className}>{text}</h1>;

  if (tag === "h2") return <h2 className={className}>{text}</h2>;

  return <h3 className={className}>{text}</h3>;
};

export default Title;
