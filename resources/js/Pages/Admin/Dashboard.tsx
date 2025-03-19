import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, User, YiPinBaShuMenu } from "@/types";
import { Head } from "@inertiajs/react";
import { Card, CardDescription, CardTitle } from "@/Components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Separator } from "@/Components/ui/separator";
import { AppSidebar } from "@/Components/app-sidebar";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Dashboard({
  user,
}: PageProps<{
  user: User;
}>) {
  return (
    <AdminLayout>
      
    </AdminLayout>
  );
}
