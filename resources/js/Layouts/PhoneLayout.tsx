import { PropsWithChildren } from "react";

export default function PhoneLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-svh w-full min-w-[380px] justify-center md:p-12 md:flex bg-black ">
      <div className="h-full overflow-hidden md:relative md:min-w-[375px] md:max-w-[375px] md:rounded-xl bg-neutral-50 dark:bg-neutral-950 ">
        {children}
      </div>
    </div>
  );
}
