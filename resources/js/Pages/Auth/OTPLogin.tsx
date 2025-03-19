import GuestLayout from "@/Layouts/GuestLayout";

import { Button } from "@/Components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/Components/ui/input-otp";
import { ChevronLeft } from "lucide-react";

import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler, useEffect, useState } from "react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";

export default function OTPLogin({ status }: { status?: string }) {
  const { toast } = useToast();
  const [prefix, setPrefix] = useState("+60");
  const [action, setAction] = useState("sendOTP");
  const [resendCountdown, setResendCountdown] = useState(30);
  const { data, setData, post, processing, errors, reset } = useForm({
    action: action,
    prefix: prefix,
    phone: "",
    otp: "",
  });

  useEffect(() => {
    setData("action", action);
  }, [action]);

  useEffect(() => {
    if (action === "verifyOTP" && resendCountdown > 0) {
      const timer = setTimeout(
        () => setResendCountdown(resendCountdown - 1),
        1000
      );
      return () => clearTimeout(timer);
    }
  }, [resendCountdown, action]);

  useEffect(() => {
    if (data.otp.length === 6) {
      submitForm(new Event("submit") as unknown as React.FormEvent);
    }
  }, [data.otp]);

  const submitForm: FormEventHandler = (event?: React.FormEvent) => {
    event?.preventDefault();

    post(route("login"), {
      onError: () => {
        toast({
          variant: "destructive",
          duration: 5000,
          description: (
            <div className="text-white font-semibold">
              {action === "sendOTP" ? "Invalid Phone Number" : "Invalid OTP"}
            </div>
          ),
          className:
            "m-auto w-fit rounded-xl flex items-center justify-center px-3 py-2.5",
        });
      },
      onSuccess: () => {
        if (action === "sendOTP") {
          setAction("verifyOTP");
          setResendCountdown(30);
          errors.phone = "";
        } else {
          reset("phone");
        }
        toast({
          duration: 5000,
          description: (
            <div className="text-white font-semibold">
              {action === "sendOTP" ? "OTP Send" : "Valid OTP"}
            </div>
          ),
          className:
            "m-auto w-fit rounded-xl flex items-center justify-center px-3 py-2.5 bg-green-400",
          open: true,
        });
      },
    });
  };

  const handleResend = async () => {
    try {
      const response = await axios.post(route("resendOTP"), {
        action: data.action,
        prefix: data.prefix,
        phone: data.phone,
      });
      toast({
        duration: 5000,
        description: <div className="text-white font-semibold">OTP Resend</div>,
        className:
          "m-auto w-fit rounded-xl flex items-center justify-center px-3 py-2.5 bg-green-400",
      });
      setResendCountdown(30);
    } catch (error) {
      toast({
        variant: "destructive",
        duration: 5000,
        description: (
          <div className="text-white font-semibold">Failed to resend OTP</div>
        ),
        className:
          "m-auto w-fit rounded-xl flex items-center justify-center px-3 py-2.5",
      });
    }
  };

  return (
    <GuestLayout>
      <Head title="Log in" />

      <div className="h-56">
        <form
          onSubmit={submitForm}
          className="h-full flex flex-col justify-between"
        >
          {action === "verifyOTP" && (
            <span
              className="absolute top-6 left-6 p-1 rounded-lg flex items-center bg-black bg-opacity-10 fade-in-out cursor-pointer"
              onClick={async (e) => {
                e.preventDefault();
                setAction("sendOTP");
                reset("otp");
              }}
            >
              <ChevronLeft className="size-6 text-gray-700" />
            </span>
          )}

          {action === "sendOTP" ? (
            <div className="size-full text-center fade-in-out">
              <div className="h-1/2 flex flex-col justify-center">
                <h2 className="text-base font-bold">Login / Sign Up</h2>
                <p className="text-sm text-neutral-600">
                  by entering your phone number
                </p>
              </div>

              <div className="h-1/2 flex flex-col justify-between">
                <div className="flex h-12 w-full p-1 gap-1 rounded-xl border border-input bg-white bg-transparent shadow-sm">
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      asChild
                      className="h-full p-2 text-lg font-mono tracking-wider rounded-lg"
                      disabled
                    >
                      <Button variant="outline">{prefix}</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuRadioGroup
                        value={prefix}
                        onValueChange={setPrefix}
                      >
                        <DropdownMenuRadioItem value="+60">
                          +60
                        </DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <input
                    type="tel"
                    className="flex font-mono size-full border-none rounded-lg px-3 py-1 text-base font-semibold tracking-[0.4em] placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0"
                    name="phone"
                    value={data.phone}
                    autoComplete="phone"
                    placeholder="1234567890"
                    maxLength={11}
                    onChange={(e) => {
                      const numericValue = e.target.value.replace(/\D/g, "");
                      setData("phone", numericValue);
                    }}
                  />
                </div>
                <p />
              </div>
            </div>
          ) : (
            <div className="size-full text-center fade-in-out">
              <div className="h-1/2 flex flex-col justify-center">
                <h2 className="text-base font-bold">Enter OTP</h2>
                <p className="text-xs text-nowrap text-neutral-600">
                  Enter the OTP sent to your phone number
                </p>
              </div>

              <div className="h-1/2 gap-1 pb-6 flex flex-col justify-evenly items-center text-lg">
                <InputOTP
                  maxLength={6}
                  autoFocus
                  value={data.otp}
                  onInput={(e) => {
                    setData("otp", (e.target as HTMLInputElement).value);
                  }}
                  autoComplete="one-time-code"
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} className="font-mono bg-white" />
                    <InputOTPSlot index={1} className="font-mono bg-white" />
                    <InputOTPSlot index={2} className="font-mono bg-white" />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} className="font-mono bg-white" />
                    <InputOTPSlot index={4} className="font-mono bg-white" />
                    <InputOTPSlot index={5} className="font-mono bg-white" />
                  </InputOTPGroup>
                </InputOTP>

                <div className="h-4 w-full px-4 flex items-center justify-between text-xs text-gray-600">
                  <p>Did not get OTP?</p>
                  <button
                    tabIndex={-1}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      if (resendCountdown === 0) {
                        handleResend();
                      }
                    }}
                    disabled={resendCountdown !== 0}
                    className={`p-0 h-fit text-xs bg-transparent shadow-none ${
                      resendCountdown === 0
                        ? "text-blue-500"
                        : "text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Resend
                    {resendCountdown !== 0 && ` in ${resendCountdown} seconds`}
                  </button>
                </div>
                <p />
              </div>
            </div>
          )}

          <div className="w-full flex items-center">
            <Button className="h-12 w-full rounded-2xl font-mono" disabled={processing}>
              {action === "sendOTP" ? "NEXT" : "VERIFY"}
            </Button>
          </div>
        </form>
      </div>
    </GuestLayout>
  );
}
