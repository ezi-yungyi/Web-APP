import NavLink from "@/Components/NavLink";
import PrimaryButton from "@/Components/PrimaryButton";
import { Button } from "@/Components/ui/button";
import GuestLayout from "@/Layouts/GuestLayout";
import { User } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";
import { Pencil } from "lucide-react";
import { FormEventHandler } from "react";

export default function VerifyEmail({
  status,
  user,
}: {
  status?: string;
  user: User;
}) {
  const { post, processing } = useForm({});

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("verification.send"));
  };

  return (
    <GuestLayout>
      <Head title="Email Verification" />

      <form onSubmit={submit} className="pt-2">
        <div className="flex flex-col items-center justify-between fade-in-out">
          <h2 className=" text-xl font-bold text-center">Last Step Only!</h2>

          <div className="text-xs text-center text-gray-600">
            Your email must be verify to signing up
          </div>

          <div className="py-3 flex justify-center items-center text-base text-start text-gray-600">
            <p className="flex gap-1">
              {user.data.email}
              <NavLink href={route("verification.email")} active>
                <Pencil className="size-4" />
              </NavLink>
            </p>
          </div>

          {status === "verification-link-sent" ? (
            <div className="text-sm font-medium text-green-600">
              Verification link had sent to your email.
            </div>
          ) : (
            <div className="text-xs font-medium flex text-neutral-600 items-center">
              If this is not your email, click{" "}
              <Pencil className="size-2.5 mx-1" /> to change it.
            </div>
          )}
        </div>

        <div className="pt-4 flex flex-col gap-3">
          <Button disabled={processing} className="w-full rounded-xl">
            Verify Email
          </Button>

          <Link
            href={route("logout")}
            method="post"
            as="button"
            className="w-full rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Back
          </Link>
        </div>
      </form>
    </GuestLayout>
  );
}
