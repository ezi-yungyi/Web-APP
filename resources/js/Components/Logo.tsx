import { url } from "inspector";
import { SVGAttributes } from "react";

export default function Logo(props: SVGAttributes<SVGElement>) {
  return (
    <div className="p-1 rounded-full">
      <img src="/logo-white.png" alt="Logo" className="size-full "/>
    </div>
  );
}
