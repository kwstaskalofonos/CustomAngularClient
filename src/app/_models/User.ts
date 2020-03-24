import { Profile } from './Profile';

export interface User {
    email: string;
    userLevel: number;
    ProfilesListDto: Profile;
}
