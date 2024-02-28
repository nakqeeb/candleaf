import React, { useState, useRef, useEffect } from "react";

export default function withClickOutside(WrappedComponent: any) {
  const Component = (props: any) => {
    const [open, setOpen] = useState<boolean>(false);

    const ref = useRef<any>();

    useEffect(() => {
      const handleClickOutside = (event: any) => {
        if (!ref.current?.contains(event.target)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
    }, [ref]);

    return <WrappedComponent open={open} setOpen={setOpen} ref={ref} />;
  };

  return Component;
}
