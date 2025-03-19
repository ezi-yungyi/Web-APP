import PhoneLayout from "./PhoneLayout";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Card } from "@/Components/ui/card";
import { Toaster } from "@/Components/ui/toaster";

type GuestProps = PropsWithChildren<{ className?: string }>;

export default function Guest({ children, className = "" }: GuestProps) {
  return (
    <PhoneLayout>
      <Toaster closeButton />

      <div className="h-full p-6 place-content-center transition-colors duration-100 bg-neutral-100 dark:bg-neutral-950">
        <Card
          className={`relative px-8 py-10 border shadow-xl rounded-3xl transition-colors duration-100 bg-neutral-50 dark:bg-neutral-800 dark:bg-opacity-40 ${className}`}
        >
          <div className="absolute w-full flex justify-center top-0 left-0 -translate-y-1/2">
            <Link href="" className="size-24">
              <ApplicationLogo />
            </Link>
          </div>

          <div className="h-full pt-6 flex flex-col">
            <div className="text-center">
              <h1 className="text-lg font-bold">一品巴蜀</h1>
              <p className="text-xs text-neutral-700 dark:text-neutral-300">
                @yipinbashu
              </p>
            </div>
            {children}
          </div>
        </Card>
      </div>
    </PhoneLayout>
  );
}
