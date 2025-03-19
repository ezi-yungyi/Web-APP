import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, User } from "@/types";
import { Head, router } from "@inertiajs/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/Components/ui/sheet";
import { Progress } from "@/Components/ui/progress";
import {
  ArrowLeft,
  Coins,
  LogOut,
  MessageCircleQuestionIcon,
  QrCode,
  UserRound,
} from "lucide-react";
import { Button } from "@/Components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { QRCodeCanvas } from "qrcode.react";
import { DialogClose } from "@radix-ui/react-dialog";

export default function Edit({ user }: PageProps<{ user: User }>) {
  const [isProfileSheetOpen, setIsProfileSheetOpen] = useState(false);
  const [isPointsHistorySheetOpen, setIsPointsHistorySheetOpen] =
    useState(false);

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Profile
        </h2>
      }
    >
      <Head title="Profile" />

      <Card className="m-2">
        <CardHeader className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@user" />
              <AvatarFallback>{user.data.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold">{user.data.name}</h2>
              <h2 className="font-thin text-sm">{user.data.phone_number}</h2>
            </div>
          </div>

          <div>
            <Dialog>
              <DialogTrigger>
                <QrCode />
              </DialogTrigger>
              <DialogContent className="w-fit py-10 px-14 rounded-2xl gap-6">
                <DialogHeader className="items-center">
                  <DialogTitle>Membsership QR</DialogTitle>
                </DialogHeader>
                <DialogDescription className="flex flex-col justify-center items-center">
                  <QRCodeCanvas value={user.data.id} size={200} />
                  <span className="font-thin text-[0.5rem]">
                    @ {user.data.id}
                  </span>
                </DialogDescription>
                <span className="font-semibold text-center">
                  {user.data.name}
                </span>
                <DialogClose className="w-full">
                  <span className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 w-full shadow-lg">
                    Close
                  </span>
                </DialogClose>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
      </Card>

      <Card className="m-2">
        <CardHeader>
          <CardTitle>My Account</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-evenly">
          <div
            className="flex flex-col items-center"
            onClick={() => setIsPointsHistorySheetOpen(true)}
          >
            Points <p>{user.data.membership.points}</p>Unused
          </div>
          <div className="flex flex-col items-center">
            Voucher <p>{/* {user.data.membership.redeemedVoucher.lenght} */}</p>
            Unused
          </div>
        </CardContent>
      </Card>

      <Card className="m-2">
        <CardHeader>
          <CardTitle>Membership</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-evenly">
          <Progress
            value={
              user.data.membership.level === "MAX"
                ? user.data.membership.points / 100
                : 0
            }
          />
        </CardContent>
      </Card>

      <Card className="m-2">
        <CardHeader>
          <CardTitle>Features</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-evenly">
          <p className="flex flex-col items-center">
            <Button
              onClick={() => setIsPointsHistorySheetOpen(true)}
              className="flex flex-col items-center"
            >
              <MessageCircleQuestionIcon />
              Points History
            </Button>
          </p>

          {/* Trigger for Profile Sheet */}
          <p className="flex flex-col items-center">
            <Button
              onClick={() => setIsProfileSheetOpen(true)}
              className="flex flex-col items-center"
            >
              <UserRound />
              My Profile
            </Button>
          </p>

          {/* Trigger for Chat Sheet */}
          <p className="flex flex-col items-center">
            <Button className="flex flex-col items-center">
              <MessageCircleQuestionIcon />
              Chat
            </Button>
          </p>
        </CardContent>
      </Card>

      <Card className="m-2">
        <CardHeader>
          <Button
            onClick={() => router.post(route("logout"))}
            className="flex gap-2 items-center justify-center"
          >
            <LogOut className="size-4" />
            Log Out
          </Button>
        </CardHeader>
      </Card>

      {/* Sheet for Points History */}
      <Sheet
        open={isPointsHistorySheetOpen}
        onOpenChange={setIsPointsHistorySheetOpen}
      >
        <SheetContent className="w-full px-6 py-4 flex flex-col">
          <SheetHeader className="h-12 flex flex-row items-center justify-between">
            <SheetClose className="mt-2">
              <ArrowLeft />
            </SheetClose>
            <SheetTitle className="">Points History</SheetTitle>
            <p className="size-6 mt-2"></p>
          </SheetHeader>
          <Card className="w-full">
            <CardHeader className="flex flex-row text-center justify-between">
              <CardTitle className="self-center">Points</CardTitle>
              <CardTitle className="self-center">
                {user.data.membership.points} Points
              </CardTitle>
            </CardHeader>
          </Card>
        </SheetContent>
      </Sheet>

      {/* Sheet for Profile */}
      <Sheet open={isProfileSheetOpen} onOpenChange={setIsProfileSheetOpen}>
        <SheetContent className="w-full px-6 py-4 flex flex-col">
          <SheetHeader className="h-12 flex flex-row items-center justify-between">
            <SheetClose className="mt-2">
              <ArrowLeft />
            </SheetClose>
            <SheetTitle className="">Profile Details</SheetTitle>
            <p className="size-6 mt-2"></p>
          </SheetHeader>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Membership</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between">
              <p>Name</p>
              <p>{user.data.name}</p>
            </CardContent>
            <CardContent className="flex justify-between">
              <p>Phone Number</p>
              <p>{user.data.phone_number}</p>
            </CardContent>
            <CardContent className="flex justify-between">
              <p>Gender</p>
              <p>{user.data.gender}</p>
            </CardContent>
            <CardContent className="flex justify-between">
              <p>Birthday</p>
              <p>{user.data.date_of_birth}</p>
            </CardContent>
            <CardContent className="flex justify-between">
              <p>Email</p>
              <p>{user.data.email}</p>
            </CardContent>
          </Card>
        </SheetContent>
      </Sheet>
    </AuthenticatedLayout>
  );
}
