import { IsDate, IsDefined, IsNotEmptyObject, ValidateNested } from 'class-validator';
import { CreateChargeDto } from '@app/common';

export class CreateReservationDto {
  @IsDate()
  startDate: Date;

  @IsDate()
  endDate: Date;

  @IsDefined()
  @IsNotEmptyObject()
  @ValidateNested()
  charge: CreateChargeDto;
}
