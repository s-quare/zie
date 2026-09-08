import { forwardRef } from "react";
import NextLink from "next/link";

const Link = forwardRef(function Link(
  { prefetch = false, children, ...props },
  ref
) {
  return (
    <NextLink ref={ref} prefetch={prefetch} {...props}>
      {children}
    </NextLink>
  );
});

export default Link;