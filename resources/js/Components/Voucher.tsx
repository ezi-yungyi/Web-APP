import { HTMLAttributes, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { CircleX, TicketPercent } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetHeader } from "./ui/sheet";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import DangerButton from "./DangerButton";

interface VoucherHTMLAttributes {
  userPoint: number;
  title: string;
  disabled?: boolean;
  description?: string;
  termsAndCondition: string;
  requiredPoints: number;
  minimunSpend: number;
  image: string;
  className?: string;
}

export default function Voucher({
  userPoint,
  image = "",
  title = "",
  description = "",
  termsAndCondition = "",
  requiredPoints,
  minimunSpend,
  className = "",
  disabled,
}: VoucherHTMLAttributes) {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  return (
    <div
      className={
        ` rounded-xl p-0.5 ${
          disabled
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-900"
        } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2` +
        className
      }
      aria-disabled={disabled}
    >
      <Card
        className={`w-full flex flex-col select-none ${
          disabled ? "" : "cursor-pointer"
        }`}
        onClick={() => (disabled ? "" : setIsSheetOpen(true))}
      >
        <CardHeader className="w-full flex justify-center items-center">
          <div className="size-10 flex justify-center items-center">
            {image != "" ? (
              <img src={image} alt="" />
            ) : (
              <TicketPercent size={100} />
            )}
          </div>
        </CardHeader>
        <CardContent className="px-4 py-2 overflow-hidden">
          <CardTitle className="text-lg text-nowrap overflow-hidden text-ellipsis">
            {title}
          </CardTitle>
          <CardDescription className="text-nowrap overflow-hidden text-ellipsis">
            {description}
          </CardDescription>
          <CardDescription className="mt-1 flex gap-1 items-center">
            <span className="text-base">{requiredPoints}</span>
            <span className="text-xs">points</span>
          </CardDescription>
        </CardContent>
      </Card>

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent
          side="bottom"
          className={`w-full px-6 py-4 flex flex-col h-5/6 rounded-t-2xl duration-150`}
        >
          <SheetHeader className="size-full p-6 pb-12">
            <SheetClose>
              <Button className="top-0 right-0 absolute m-6 p-2">
                <CircleX />
              </Button>
            </SheetClose>

            <SheetHeader className="flex flex-col justify-between text-start overflow-y-auto">
              <div className="h-28 flex items-center justify-center">
                {image != "" ? (
                  <img src={image} alt="" className="max-h-28" />
                ) : (
                  <TicketPercent size={100} />
                )}
              </div>

              <div className="w-full flex flex-col justify-start">
                <span className="text-lg font-semibold">{title}</span>
              </div>

              <div className="">
                <h4 className="font-bold">Description</h4>
                <p>{description}</p>
              </div>

              <div className="">
                <h4 className="font-bold">Terms and Conditions</h4>
                <ul className="list-disc list-inside text-sm">
                  {termsAndCondition}
                </ul>
              </div>

              <div className="">
                <h4 className="font-bold">Minimun Spend</h4>
                <p>RM {minimunSpend}</p>
              </div>

              <div className="">
                <h4 className="font-bold">Required Points</h4>
                <p>{requiredPoints} Points</p>
              </div>
            </SheetHeader>

            <Dialog>
              <DialogTrigger className="w-full absolute bottom-0 left-0 p-6">
                <Button
                  disabled={userPoint < requiredPoints}
                  className={`w-full ${
                    userPoint >= requiredPoints
                      ? "cursor-pointer"
                      : "cursor-none"
                  }`}
                >
                  {userPoint >= requiredPoints
                    ? "Redeem Now"
                    : "No Enough Point"}
                </Button>
              </DialogTrigger>
              <DialogContent className="w-11/12 rounded-lg">
                <DialogHeader>
                  <DialogTitle>Redeem "{title}"</DialogTitle>
                  <DialogDescription>
                    You will be deduct {requiredPoints} points
                  </DialogDescription>
                  <DialogDescription>
                    {userPoint} - {requiredPoints} ={" "}
                    {userPoint - requiredPoints}
                  </DialogDescription>
                  <DialogDescription>
                    Point remain {userPoint - requiredPoints}
                  </DialogDescription>
                </DialogHeader>

                <div className="w-full mt-6 flex flex-col gap-2">
                  <Button
                    disabled={userPoint < requiredPoints}
                    className={`h-12 w-full cursor-pointer`}
                  >
                    Confirm
                  </Button>
                  <DialogClose className="w-full">
                    <DangerButton
                      className={`w-full cursor-pointer flex items-center justify-center`}
                    >
                      Cancel
                    </DangerButton>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
