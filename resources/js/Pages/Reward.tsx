import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import type { PageProps, RedeemedReward, Reward, User } from "@/types";
import { Head } from "@inertiajs/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { Card, CardHeader, CardTitle } from "@/Components/ui/card";
import Voucher from "@/Components/Voucher";
import RedeemedVoucher from "@/Components/RedeemedVoucher";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { Button } from "@/Components/ui/button";

export default function Reward({
  user,
  reward,
  redeemedReward,
}: PageProps<{
  user: User;
  reward: Reward[];
  redeemedReward: RedeemedReward[];
}>) {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Rewards
        </h2>
      }
    >
      <Head title="Rewards" />

      <Card className="m-2" onClick={() => setIsHistoryOpen(true)}>
        <CardHeader className="flex flex-row text-center justify-between">
          <CardTitle className="self-center">Points</CardTitle>
          <CardTitle className="self-center">
            {user.data.membership.points} Points
          </CardTitle>
        </CardHeader>
      </Card>

      <Dialog open={isHistoryOpen} onOpenChange={setIsHistoryOpen}>
        <DialogContent className="size-11/12 rounded-lg">
          <DialogHeader className="h-fit">
            <DialogTitle>Points History</DialogTitle>
          </DialogHeader>
          <Card className="w-full h-fit">
            <CardHeader className="flex flex-row text-center justify-between">
              <CardTitle className="self-center">Points</CardTitle>
              <CardTitle className="self-center">
                {user.data.membership.points} Points
              </CardTitle>
            </CardHeader>
          </Card>

          <DialogDescription className="h-full"></DialogDescription>
          <DialogClose className=" h-fit w-full">
            <Button className="w-full">Close</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>

      <Card className="m-2">
        <CardHeader className="flex flex-row items-center gap-4">
          <Tabs defaultValue="redeemRewards" className="w-full">
            <TabsList className="w-full fade-in-out duration-150">
              <TabsTrigger className="w-full" value="redeemRewards">
                Redeem Rewards
              </TabsTrigger>
              <TabsTrigger className="w-full" value="myRewards">
                My Rewards
              </TabsTrigger>
            </TabsList>
            <TabsContent value="redeemRewards">
              {reward.map((reward, index) => (
                <div className="w-full grid grid-cols-2 gap-2">
                  <div className="w-full ">
                    <Voucher
                      userPoint={user.data.membership.points}
                      image={reward.imagePath}
                      title={reward.title}
                      description={reward.description}
                      termsAndCondition={reward.termsAndConditions}
                      requiredPoints={reward.requiredPoints}
                      minimunSpend={reward.minimunSpend}
                    />
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="myRewards">
              {redeemedReward.map((redeemReward, index) => (
                <div className="w-full flex flex-col gap-2">
                  <div className="w-full">
                    <RedeemedVoucher
                      userID={user.data.id}
                      voucherID={redeemReward.uuid}
                      image={redeemReward.reward.imagePath}
                      title={redeemReward.reward.title}
                      description={redeemReward.reward.description}
                      minimunSpan={redeemReward.reward.minimunSpend}
                      redeemed_date={redeemReward.receivedDate}
                      valid_until={redeemReward.validUntil}
                      termsAndCondition={redeemReward.reward.termsAndConditions}
                      voucherStatus={redeemReward.status}
                    />
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </CardHeader>
      </Card>
    </AuthenticatedLayout>
  );
}
