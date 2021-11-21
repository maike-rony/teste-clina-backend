import { ApiProperty } from "@nestjs/swagger"

export class ResponseUnauthorizedErrorSwagger {
    @ApiProperty({
        default: 401
    })
    statusCode: number

    @ApiProperty({
        default: 'Unauthorized'
    })
    name: string

    @ApiProperty()
    message: string
}