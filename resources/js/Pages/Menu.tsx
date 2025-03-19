import React, { useRef, useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, User, YiPinBaShuMenu } from "@/types";
import { Head } from "@inertiajs/react";
import { Card, CardDescription, CardTitle } from "@/Components/ui/card";
import { AspectRatio } from "@/Components/ui/aspect-ratio";
import { CookingPot } from "lucide-react";

export default function Menu({
  user,
  menu,
}: PageProps<{
  user: User;
  menu: YiPinBaShuMenu[];
}>) {
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeCategory, setActiveCategory] = useState<number | null>(0);

  const scrollToCategory = (index: number) => {
    if (categoryRefs.current[index]) {
      categoryRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleScroll = () => {
    const menuItemContainer = document.getElementById("menu-item-container");
    if (!menuItemContainer) return;

    let maxVisibleArea = 0;
    let newActiveCategory = activeCategory;

    categoryRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const visibleHeight =
          Math.min(rect.bottom, menuItemContainer.offsetHeight) -
          Math.max(rect.top, 0);
        const visibleArea = Math.max(visibleHeight, 0) * rect.width;

        if (visibleArea > maxVisibleArea) {
          maxVisibleArea = visibleArea;
          newActiveCategory = index;
        }
      }
    });

    if (newActiveCategory !== activeCategory) {
      setActiveCategory(newActiveCategory);
    }
  };

  useEffect(() => {
    const menuItemContainer = document.getElementById("menu-item-container");
    if (menuItemContainer) {
      menuItemContainer.addEventListener("scroll", handleScroll);
      return () => {
        menuItemContainer.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Menu
        </h2>
      }
    >
      <Head title="Menu" />

      <div id="menu-container" className="w-full h-full flex">
        <div
          id="menu-category-container"
          className="h-full w-1/4 overflow-y-auto"
          style={{ overscrollBehavior: "contain" }}
        >
          {menu.map((category, index) => (
            <div
              key={category.id}
              className={`w-full p-4 cursor-pointer ${
                activeCategory === index ? "bg-gray-200" : ""
              }`}
              onClick={() => scrollToCategory(index)}
            >
              <div className="flex flex-col gap-2 items-center justify-center">
                <CookingPot />
                <div className="h-full">
                  <div className="shadow-none border-none">
                    <p className="text-xs text-nowrap">
                      {category.title.replace(/[\u4e00-\u9fa5]/g, "")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          id="menu-item-container"
          className="h-full w-3/4 p-2 flex flex-col gap-2 overflow-y-auto overflow-ellipsis"
          style={{ overscrollBehavior: "contain" }}
          onScroll={handleScroll}
        >
          {menu.map((category, index) => (
            <div
              key={category.id}
              className="flex flex-col gap-2"
              ref={(el) => (categoryRefs.current[index] = el)}
            >
              <p className="px-4 py-2 rounded-md shadow text-xl font-semibold mt-2 bg-white">
                {category.title}
              </p>

              {category.items.length !== 0 ? (
                category.items.map((item) => (
                  <Card key={item.id} className="h-32 w-full p-4 bg-white">
                    <div className="size-full flex gap-2 items-center justify-center">
                      <div className="w-28">
                        <AspectRatio ratio={1 / 1}>
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full rounded-md object-cover"
                          />
                        </AspectRatio>
                      </div>
                      <Card className="h-full w-full flex flex-col justify-between shadow-none border-none">
                        <CardTitle className="text-sm text-wrap">
                          {item.title}
                          <CardDescription className="text-[0.5rem] text-wrap">
                            {item.description}
                          </CardDescription>
                        </CardTitle>
                        <CardDescription className="text-sm text-wrap text-end">
                          RM {item.price}
                        </CardDescription>
                      </Card>
                    </div>
                  </Card>
                ))
              ) : (
                <p className="text-gray-500">No items available</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
