import { ApiProperty } from "@nestjs/swagger";

export class ResponseSuccessSwagger {
    @ApiProperty({
        default: 200
    })
    statusCode: number

    @ApiProperty()
    body: string[]
}