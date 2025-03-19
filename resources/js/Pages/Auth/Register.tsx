import GuestLayout from "@/Layouts/GuestLayout";

import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";

import { ChevronLeft } from "lucide-react";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler, useEffect, useState } from "react";

export default function Register() {
  const { data, setData, post, processing, setError, errors, reset } = useForm({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
  });

  const submitForm: FormEventHandler = () => {
    post(route("register"), {
      onFinish: () => reset("dob", "email", "gender", "name", "phone"),
    });
  };

  const [status, setStatus] = useState("name");

  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const years = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i
  );
  const daysInSelectedMonth =
    month && year
      ? new Date(parseInt(year), parseInt(month) + 1, 0).getDate()
      : 31;
  const days = Array.from({ length: daysInSelectedMonth }, (_, i) => i + 1);
  useEffect(() => {
    if (day && month && year) {
      const dob = new Date(parseInt(year), parseInt(month), parseInt(day) + 1);
      const formattedDob = dob.toISOString().split("T")[0];

      if (data.dob !== formattedDob) {
        setData("dob", formattedDob);
      }
    }
  }, [day, month, year, data.dob, setData]);

  const getContent = () => {
    switch (status) {
      case "name":
        return (
          <div>
            <InputLabel
              htmlFor="name"
              value="Enter Your Name"
              className="text-center"
            />

            <Input
              id="name"
              name="name"
              value={data.name}
              className="mt-2 w-full text-base h-12 rounded-xl"
              autoComplete="name"
              onChange={(e) => setData("name", e.target.value)}
              placeholder="Your Name"
              autoFocus
            />

            <div className="my-1 h-2">
              <InputError message={errors.name} className="text-xs" />
            </div>
          </div>
        );
      case "gender":
        return (
          <div>
            <InputLabel
              htmlFor="gender"
              value="Enter Your Gender"
              className="text-center"
            />
            <Select
              name="gender"
              value={data.gender}
              autoComplete="gender"
              onValueChange={(value) => setData("gender", value)}
            >
              <SelectTrigger
                id="gender"
                className="mt-2 h-12 text-base rounded-xl"
                autoFocus
              >
                <SelectValue placeholder="Select your gender" />
              </SelectTrigger>
              <SelectContent align="center">
                <SelectGroup>
                  <SelectLabel>Gender</SelectLabel>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="RatherNotShare">
                    Rather Not Share
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="my-1 h-2">
              <InputError message={errors.gender} className="text-xs" />
            </div>
          </div>
        );
      case "dob":
        return (
          <div>
            <InputLabel
              htmlFor="dob"
              value="Enter Your Birthday"
              className="text-center"
            />
            <div className="flex space-x-2 justify-center mt-2">
              {/* Year Selector */}
              <Select value={year} onValueChange={(value) => setYear(value)}>
                <SelectTrigger className="h-12 w-[80px] rounded-xl">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent align="center" className="h-44 min-w-fit">
                  <SelectGroup>
                    {years.map((yr) => (
                      <SelectItem key={yr} value={yr.toString()}>
                        {yr}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Month Selector */}
              <Select value={month} onValueChange={(value) => setMonth(value)}>
                <SelectTrigger className="h-12 w-[120px] rounded-xl">
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent align="center" className="h-44 min-w-fit">
                  <SelectGroup>
                    {Array.from({ length: 12 }, (_, i) => i).map((mo) => (
                      <SelectItem key={mo} value={mo.toString()}>
                        {new Date(0, mo).toLocaleString("default", {
                          month: "long",
                        })}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Day Selector */}
              <Select value={day} onValueChange={(value) => setDay(value)}>
                <SelectTrigger className="h-12 w-[80px] rounded-xl">
                  <SelectValue placeholder="Day" />
                </SelectTrigger>
                <SelectContent align="center" className="h-44 min-w-fit">
                  <SelectGroup>
                    {days.map((d) => (
                      <SelectItem key={d} value={d.toString()}>
                        {d}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="my-1 h-2">
              <InputError message={errors.dob} className="text-xs" />
            </div>
          </div>
        );
      case "email":
        return (
          <div>
            <InputLabel
              htmlFor="email"
              value="Enter Your Email"
              className="text-center"
            />
            <Input
              id="email"
              name="email"
              value={data.email}
              className="mt-2 w-full text-base h-12 rounded-xl"
              autoComplete="email"
              onChange={(e) => setData("email", e.target.value.toLowerCase())}
              autoFocus
            />
            <div className="my-1 h-2">
              <InputError message={errors.email} className="text-xs" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const [opacity, setOpacity] = useState("translate-x-0");

  const handleNext = () => {
    switch (status) {
      case "name":
        if (data.name.trim() === "") {
          setError("name", "The name field is required");
          return;
        } else {
          setError("name", "");
        }
        break;
      case "gender":
        if (data.gender.trim() === "") {
          setError("gender", "The gender field is required");
          return;
        } else {
          setError("gender", "");
        }
        break;
      case "dob":
        if (data.dob.trim() === "") {
          setError("dob", "The birthday field is required");
          return;
        } else {
          setError("dob", "");
        }
        break;
      case "email":
        post(route("register"), {
          onSuccess: () => reset("dob", "email", "gender", "name", "phone"),
        });

      default:
        return;
    }

    setOpacity("opacity-0");
    setTimeout(() => {
      setOpacity("opacity-100");
      if (status === "name") setStatus("gender");
      else if (status === "gender") setStatus("dob");
      else if (status === "dob") setStatus("email");
    }, 100);
  };

  const handleBack = () => {
    setOpacity("opacity-0");
    setTimeout(() => {
      setOpacity("opacity-100");
      if (status === "email") setStatus("dob");
      else if (status === "dob") setStatus("gender");
      else if (status === "gender") setStatus("name");
    }, 100);
  };

  return (
    <GuestLayout>
      <Head title="Register" />

      <div className="size-full text-center">
        <form>
          {status !== "name" && (
            <span
              className="absolute top-6 left-6 p-1 rounded-lg flex items-center bg-black bg-opacity-10"
              onClick={(e) => {
                e.preventDefault();
                handleBack();
              }}
            >
              <ChevronLeft className="size-6 text-gray-700" />
            </span>
          )}

          <div className="h-1/2 p-4 flex flex-col justify-center">
            <h2 className="text-xl font-bold">Sign Up</h2>
          </div>

          <div className={`h-1/2 transition-opacity duration-100 ${opacity}`}>
            {getContent()}
          </div>

          <div className="flex items-center justify-between mt-4">
            <Button
              className="h-12 w-full rounded-2xl font-mono"
              disabled={processing}
              onClick={(e) => {
                e.preventDefault();
                handleNext();
              }}
            >
              {status === "email" ? "Submit" : "Next"}
            </Button>
          </div>
        </form>
      </div>
    </GuestLayout>
  );
}
