import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, User, YiPinBaShuMenu } from "@/types";
import { Head } from "@inertiajs/react";
import { Card, CardDescription, CardTitle } from "@/Components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Separator } from "@/Components/ui/separator";
import { AppSidebar } from "@/Components/app-sidebar";
import AdminLayout from "@/Layouts/AdminLayout";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/Components/ui/accordion";
import { AspectRatio } from "@/Components/ui/aspect-ratio";

export default function Dashboard({
  user,
  menu,
}: PageProps<{
  user: User;
  menu: YiPinBaShuMenu[];
}>) {
  return (
    <AdminLayout>
      <Accordion type="multiple" className="">
        {menu.map((category, index) => (
          <AccordionItem value={index.toString()}>
            <AccordionTrigger>{category.title}</AccordionTrigger>
            <AccordionContent className="flex flex-col">
              {category.items.length !== 0 ? (
                category.items.map((item) => (
                  <div className="">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="size-12 rounded-md object-cover"
                      />
                    <div>
                      {item.title}
                      {item.description}
                      RM {item.price}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No items available</p>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </AdminLayout>
  );
}
