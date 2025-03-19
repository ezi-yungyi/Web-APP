import InputError from "@/Components/InputError";
import { Head, router, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Button } from "@/Components/ui/button";
import { User } from "@/types";
import { Input } from "@/Components/ui/input";
import { ChevronLeft } from "lucide-react";

export default function ChangeEmail({
  user,
  mustVerifyEmail,
  status,
}: {
  user: User;
  mustVerifyEmail: boolean;
  status?: string;
}) {
  const { data, setData, patch, errors, processing, recentlySuccessful } =
    useForm({
      name: user.data.name,
      email: user.data.email,
    });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    patch(route("profile.updateEmail"));
  };

  return (
    <GuestLayout>
      <Head title="Email Verification" />

      <span
        className="absolute top-6 left-6 p-1 rounded-lg flex items-center bg-black bg-opacity-10 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          router.get(route('verification.notice'));
        }}
      >
        <ChevronLeft className="size-6 text-gray-700" />
      </span>

      <form onSubmit={submit} className="mt-6 space-y-6">
        <div className="fade-in-out">
          <h2 className=" text-xl font-bold text-center">{user.data.email}</h2>
          <div className="my-2 text-sm text-center text-gray-600">
            Change your email, if this is not your email
          </div>
          <div>
            <Input
              id="email"
              type="email"
              className="h-12 text-base"
              value={data.email}
              onChange={(e) => setData("email", e.target.value)}
              required
              autoComplete="username"
            />

            <InputError className="mt-2" message={errors.email} />
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Button disabled={processing} className="w-full text-center">
            Change Email
          </Button>
        </div>
      </form>
    </GuestLayout>
  );
}
