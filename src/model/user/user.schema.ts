import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, collection: 'user' })
export class User extends Document {
  @Prop({ type: String })
  uid: string;

  @Prop({ type: String })
  password: string;

  @Prop({ type: String })
  hpNo: string;

  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  nickName: string;

  @Prop({ type: String })
  birthdate: string;

  @Prop({ type: String })
  gender: string;

  @Prop({ type: String })
  adress: string;

  @Prop({ type: Boolean, default: false })
  admin: boolean;

  @Prop({ type: Boolean, default: true })
  status: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
