import {
  IsPositive,
  IsString,
  IsPhoneNumber,
  IsNotEmpty,
} from 'class-validator';

export class CreateOrderRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsPositive()
  price: number;

  @IsPhoneNumber()
  phoneNumber: string;
}
