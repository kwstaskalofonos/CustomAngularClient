import { Photo } from './Photo';

export interface Profile {
    FirstName: string;
    SurName: string;
    DateOfBirth: Date;
    Gender: string;
    Age: number;
    City: string;
    PostalCode: string;
    PhoneNumber: number;
    PhotoListDto: Photo;
}
