import { ApiProperty } from "@nestjs/swagger"

export class ResponseInternalServerErrorSwagger {
    @ApiProperty({
        default: 500
    })
    statusCode: number

    @ApiProperty({
        default: 'InternalServerError'
    })
    name: string

    @ApiProperty()
    message: string
}