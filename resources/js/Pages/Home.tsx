import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, User, YiPinBaShuMenu } from "@/types";
import { Head, router } from "@inertiajs/react";
import { Card, CardDescription, CardTitle } from "@/Components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Separator } from "@/Components/ui/separator";
import { Button } from "@/Components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { X } from "lucide-react";
import ApplicationLogo from "@/Components/ApplicationLogo";

interface Poster {
  id: string;
  title: string;
  poster_path: string;
  content: string;
}

interface HomeProps {
  user: User;
  poster: Poster[];
}

export default function Home({ user, poster }: HomeProps) {
  return (
    <AuthenticatedLayout>
      <Head title="Home" />

      <div className="h- overflow-hidden bg-ne">
        <img
          src="/background.jpg"
          className="object-scale-down object-center"
        />
      </div>
      <div className="relative h-12 w-full p-3 ">
        <Card className="w-full  -translate-y-14  p-6 flex gap-2 items-center justify-between rounded-3xl">
          <div
            className="flex gap-2 items-center"
            onClick={() => router.get(route("profile/view"))}
          >
            <Avatar className="size-12">
              <AvatarImage src={user.data.profilePhoto} alt="@user" />
              <AvatarFallback>{user.data.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="w-32 text-nowrap text-ellipsis text-sm font-semibold overflow-hidden">
                {user.data.name}
              </h2>
              <h2 className="font-thin text-xs">
                {user.data.membership.level}
              </h2>
            </div>
          </div>

          <div className="h-full flex items-center justify-center gap-2 text-sm font-thin">
            <h2 className="w-12 text-center justify-center">
              <p className="font-semibold">{user.data.membership.points}</p>
              <p className="text-xs">Points</p>
            </h2>

            <Separator orientation="vertical" className="h-12" />

            <h2 className="w-12 text-center justify-center">
              <p className="font-semibold">
                {user.data.membership.reward.length}
              </p>
              <p className="text-xs">Vouchers</p>
            </h2>
          </div>
        </Card>
      </div>

      <div className="p-3 pt-4 flex flex-col gap-3">
        {poster.map((poster, index) => (
          <Dialog>
            <DialogTrigger asChild>
              <Card className="w-full flex gap-4 items-center justify-between rounded-3xl overflow-hidden border-neu ">
                <img src={poster.poster_path} alt="" className="h-44 w-full" />
              </Card>
            </DialogTrigger>

            <DialogContent className="w-11/12 h-4/6 rounded-2xl">
              <div dangerouslySetInnerHTML={{ __html: poster.content }} />

              <div className="absolute -bottom-12 w-full text-center">
                <DialogClose className="rounded-full bg-neutral-500 p-1">
                  <X className="text-white" />
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>

      <div className="w-full flex justify-center pt-24">
        <div className="size-24">
          <ApplicationLogo />
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
