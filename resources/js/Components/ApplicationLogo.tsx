import { url } from "inspector";
import { SVGAttributes } from "react";

export default function ApplicationLogo(props: SVGAttributes<SVGElement>) {
  return (
    <div className="p-1 rounded-full">
      <img src="/logo.png" alt="Logo" className="size-full "/>
    </div>
  );
}
