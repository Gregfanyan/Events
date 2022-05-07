import * as React from "react";

const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 55.2 38.4"
    xmlSpace="preserve"
    {...props}
  >
    <style>{".st1{fill:#c8102e}.st2{fill:#012169}"}</style>
    <path
      className="st1"
      d="M23.74 23.03V38.4h7.68V23.03H55.2v-7.68H31.42V0h-7.68v15.35H0v7.68h23.74z"
    />
    <path
      className="st2"
      d="M33.98 12.43V0h18.23c1.26.02 2.34.81 2.78 1.92L33.98 12.43zM33.98 25.97V38.4h18.35c1.21-.07 2.23-.85 2.66-1.92L33.98 25.97zM21.18 25.97V38.4H2.87a3.043 3.043 0 0 1-2.66-1.94l20.97-10.49zM21.18 12.43V0H2.99A3.04 3.04 0 0 0 .21 1.94l20.97 10.49zM0 12.8h7.65L0 8.97v3.83zM55.2 12.8h-7.69l7.69-3.85v3.85zM55.2 25.6h-7.69l7.69 3.85V25.6zM0 25.6h7.65L0 29.43V25.6z"
    />
    <path
      className="st1"
      d="M55.2 3.25 36.15 12.8h4.26L55.2 5.4V3.25zM19.01 25.6h-4.26L0 32.98v2.15l19.05-9.53h-.04zM10.52 12.81h4.26L0 5.41v2.14l10.52 5.26zM44.63 25.59h-4.26l14.83 7.43v-2.14l-10.57-5.29z"
    />
  </svg>
);

export default SvgComponent;
