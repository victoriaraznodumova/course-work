import { ApiProperty } from "@nestjs/swagger";

export class CreateCustomerDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    surname: string;

    @ApiProperty()
    age: number;

    @ApiProperty()
    phone_number: string;

    @ApiProperty()
    comment: string;

    
  }