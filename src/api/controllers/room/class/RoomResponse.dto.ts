export interface RoomResponseDTO {
    roomId: number;
    name: string;
    description: string;
    address: string;
    price: number;
    public_place: string;
    number: number;
    district: string;
    city: string;
    cep: number;
    uf: string;
    country: string;
    created_at: Date;
    updated_at: Date;
    images: Array<string>
}