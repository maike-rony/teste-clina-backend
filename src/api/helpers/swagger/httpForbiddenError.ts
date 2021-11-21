import { ApiProperty } from "@nestjs/swagger"

export class ResponseForbiddenSwagger {
    @ApiProperty({
        default: 403
    })
    statusCode: number

    @ApiProperty({
        default: 'Forbidden'
    })
    name: string

    @ApiProperty({
        default: 'Access Denied Level!'
    })
    message: string
}