import { ApiProperty } from "@nestjs/swagger"

export class ResponseBadRequestSwagger {
    @ApiProperty({
        default: 400
    })
    statusCode: number

    @ApiProperty({
        default: 'BadRequest'
    })
    name: string

    @ApiProperty()
    message: string
}