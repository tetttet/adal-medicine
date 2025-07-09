'use client'
import { useEffect } from "react";
import AOS from "aos"
import 'aos/dist/aos.css';

import { PropsWithChildren } from "react";

const Aoscompo = ({ children }: PropsWithChildren) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, [])
  return (
    <div>
      {children}
    </div>
  )
}

export default Aoscompo
