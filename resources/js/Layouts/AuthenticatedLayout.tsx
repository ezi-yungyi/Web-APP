import { router, usePage } from "@inertiajs/react";
import { PropsWithChildren, ReactNode, useEffect, useState } from "react";
import {
  House,
  CookingPot,
  TicketPercent,
  UserCircle,
  Loader2,
  LoaderCircle,
} from "lucide-react";
import PhoneLayout from "./PhoneLayout";
import { ToastProvider } from "@/Components/ui/toast";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Logo from "@/Components/Logo";

export default function Authenticated({
  header,
  children,
}: PropsWithChildren<{ header?: ReactNode }>) {
  const { url } = usePage();
  const [activeUrl, setActiveUrl] = useState(url);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const start = () => setIsLoading(true);
    const finish = () => setIsLoading(false);

    router.on("start", start);
    router.on("finish", finish);

    setActiveUrl(url);

    return () => {
      router.on("start", () => {});
      router.on("finish", () => {});
    };
  }, [url]);

  const handleNavigation = (path: string, routeName: string) => {
    setActiveUrl(path);
    router.get(route(routeName));
  };

  return (
    <PhoneLayout>
      {isLoading && (
        <div className="fixed inset-0 z-[49] bg-white flex items-center justify-center">
          <div className="size-32 animate-pulse">
            <ApplicationLogo />
          </div>
        </div>
      )}
      <ToastProvider>
        {header && (
          <header className="fixed top-0 w-full z-20 shadow bg-white md:absolute">
            <div className="p-2 h-16 flex items-center justify-center">
              {header}
            </div>
          </header>
        )}

        <main
          className={`h-full w-full ${
            header && "pt-16"
          } pb-20 overflow-y-auto bg-neutral-50`}
        >
          {children}
        </main>

        {/* NOTE > Menubar */}
        <div className="fixed bottom-0 h-16 w-full z-50 px-6 py-2 flex justify-between shadow bg-[#79091d] md:absolute">
          <div
            className={`w-16 px-4 flex flex-col gap-0.5 justify-center items-center text-[0.6rem] cursor-pointer ${
              activeUrl === "/home" ? "text-blue-500" : "text-neutral-200"
            }`}
            onClick={() => activeUrl !== "/home" && handleNavigation("/home", "home")}
          >
            {activeUrl === "/home" ? (
              <div className="size-10">
                <Logo className="size-6" />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-0.5">
                <House className="size-6 stroke-[1.2px]" />
                Home
              </div>
            )}
          </div>

          <div
            className={`w-16 px-4 flex flex-col gap-0.5 justify-center items-center text-[0.6rem] cursor-pointer ${
              activeUrl === "/menu" ? "text-blue-500" : "text-neutral-200"
            }`}
            onClick={() => activeUrl !== "/menu" && handleNavigation("/menu", "menu")}
          >
            {activeUrl === "/menu" ? (
              <div className="size-10">
                <Logo className="size-6" />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-0.5">
                <CookingPot className="size-6 stroke-[1.2px]" />
                Menu
              </div>
            )}
          </div>

          <div
            className={`w-16 px-4 flex flex-col gap-0.5 justify-center items-center text-[0.6rem] cursor-pointer ${
              activeUrl === "/reward" ? "text-blue-500" : "text-neutral-200"
            }`}
            onClick={() => activeUrl !== "/reward" && handleNavigation("/reward", "reward")}
          >
            {activeUrl === "/reward" ? (
              <div className="size-10">
                <Logo className="size-6" />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-0.5">
                <TicketPercent className="size-6 stroke-[1.2px]" />
                Rewards
              </div>
            )}
          </div>

          <div
            className={`w-16 px-4 flex flex-col gap-0.5 justify-center items-center text-[0.6rem] cursor-pointer ${
              activeUrl === "/profile/view" ? "text-blue-500" : "text-neutral-200"
            }`}
            onClick={() => activeUrl !== "/profile/view" && handleNavigation("/profile/view", "profile.view")}
          >
            {activeUrl === "/profile/view" ? (
              <div className="size-10">
                <Logo className="size-6" />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-0.5">
                <UserCircle className="size-6 stroke-[1.2px]" />
                Profiles
              </div>
            )}
          </div>
        </div>
      </ToastProvider>
    </PhoneLayout>
  );
}
