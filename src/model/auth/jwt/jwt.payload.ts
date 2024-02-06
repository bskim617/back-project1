import { Types } from 'mongoose';

export type Payload = {
  uid: string;
  sub: Types.ObjectId;
  admin: boolean;
};
