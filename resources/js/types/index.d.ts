export interface Membership {
  level: string;
  experience: number;
  points: number;
  voucherCount: number;
  experience_expire: string;
  points_expire: string;
  reward: RedeemedReward[];
}

export interface User {
  data: {
    id: string;
    uuid: string;
    name: string;
    email: string;
    gender: string;
    phone_number: string;
    date_of_birth: string;
    profilePhoto: string;
    membership: Membership;
  };
}

export interface YiPinBaShuMenu {
  id: string;
  title: string;
  image: string;
  items: MenuItem[];
  created_at: string;
  updated_at: string;
}

export interface MenuItem {
  id: string;
  category: string;
  title: string;
  description: string;
  price: string;
  image: string;
  attibutes: ItemAttribute[]
  created_at: string;
  updated_at: string;
}

export interface ItemAttribute {
  id: string;
  itemID: string;
  variable: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

export interface Reward {
  id: string;
  title: string;
  description: string;
  termsAndConditions: string;
  requiredPoints: number;
  minimunSpend: number;
  validDurationYear: number;
  validDurationMonth: number;
  validDurationDay: number;
  type: string;
  status: string;
  imagePath: string;
  createdAt: string;
  updatedAt: string;
}

export interface RedeemedReward {
  id: string,
  uuid: string,
  member: Membership,
  reward: Reward,
  redeemedMethod: string,
  status: string,
  receivedDate: string,
  validUntil: string,
}

export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>
> = T & {
  auth: {
    user: User;
  };
};
