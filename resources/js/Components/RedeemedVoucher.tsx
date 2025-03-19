import { HTMLAttributes, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ArrowLeft, CircleX, TicketPercent } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Tabs, TabsContent } from "@radix-ui/react-tabs";
import { QRCodeCanvas } from "qrcode.react";
import { Button } from "./ui/button";

interface VoucherHTMLAttributes {
  userID: string;
  voucherID: string;
  image: string;
  title: string;
  description?: string;
  termsAndCondition: string;
  valid_until: string;
  redeemed_date: string;
  voucherStatus: string;
  minimunSpan: number;
  className?: string;
  disabled?: boolean;
}

export default function RedeemedVoucher({
  userID = "",
  voucherID = "",
  image = "",
  title = "",
  description = "",
  termsAndCondition = "",
  redeemed_date = "",
  valid_until = "",
  voucherStatus = "",
  minimunSpan,
  className = "",
  disabled,
}: VoucherHTMLAttributes) {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [tabValue, setTabValue] = useState("code");
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
        className="w-full flex select-none cursor-pointer"
        onClick={() => setIsSheetOpen(true)}
      >
        <CardHeader className="flex justify-center items-center">
          <div className="size-10 flex justify-center items-center">
            {image != "" ? (
              <img src={image} alt="" />
            ) : (
              <TicketPercent size={100} />
            )}
          </div>
        </CardHeader>
        <CardContent className="px-4 py-2 overflow-hidden">
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription className="text-nowrap overflow-hidden text-ellipsis">
            {description}
          </CardDescription>
          <CardDescription className="mt-1 flex gap-1 items-center">
            <span className="text-xs">
              {voucherStatus === "expire" ? "Expire on " : "Valid Until"}{" "}
              {valid_until}
            </span>
          </CardDescription>
        </CardContent>
      </Card>

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent
          side="bottom"
          className={`h-full w-full px-6 py-4 flex flex-col ${
            tabValue === "full" ? "h-full" : "h-5/6 rounded-t-2xl duration-150"
          }`}
        >
          <Tabs
            value={tabValue}
            onValueChange={(value) => setTabValue(value)}
            className="size-full flex flex-col"
          >
            <TabsContent value="code" className="size-full">
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

                  <div
                    className={`${
                      voucherStatus === "expire"
                        ? "text-red-500"
                        : "text-green-500"
                    } font-semibold`}
                  >
                    {voucherStatus}
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

                  <div className="flex flex-col gap-2">
                    <p className="text-md font-medium flex gap-1 justify-between">
                      <h4 className="font-bold">Received Date:</h4>
                      <p className="text-sm">{redeemed_date}</p>
                    </p>
                    <p className="text-md font-medium flex gap-1 justify-between">
                      <h4 className="font-bold">Valid Until:</h4>
                      <p className="text-sm">{valid_until}</p>
                    </p>
                  </div>
                </SheetHeader>

                <div className="w-full absolute bottom-0 left-0 p-6">
                  <Button
                    className="w-full"
                    onClick={() => setTabValue("full")}
                  >
                    Use Now
                  </Button>
                </div>
              </SheetHeader>
            </TabsContent>
            <TabsContent value="full" className="h-full flex flex-col gap-2">
              <SheetHeader className="h-12 flex flex-row items-center justify-between">
                <span onClick={() => setTabValue("code")}>
                  <ArrowLeft />
                </span>
                <SheetTitle className="">Voucher</SheetTitle>
                <p className="size-6 mt-2" />
              </SheetHeader>
              <div className="size-full flex flex-col justify-center items-center">
                <span className="mb-2 font-bold">
                  Show this to staff
                </span>

                <Card className="w-fit shadow-lg">
                  <CardHeader className="flex flex-row text-center justify-between items-center">
                    <CardTitle className="self-center">
                      <QRCodeCanvas
                        value={voucherID + " : " + userID}
                        size={250}
                      />
                    </CardTitle>
                  </CardHeader>
                </Card>
                <span className="mt-2 font-thin text-[0.5rem]">
                  @ {voucherID}
                </span>
              </div>
            </TabsContent>
          </Tabs>
        </SheetContent>
      </Sheet>
    </div>
  );
}
