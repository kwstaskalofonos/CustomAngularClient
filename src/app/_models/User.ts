


export class User {
    id: number;
    email: string;
    userLevel: number;
    ProfilesListDto: Profile;

    constructor(id: number, email: string, userLevel: number, ProfilesListDto: any){
        this.id = id;
        this.email = email;
        this.userLevel = userLevel;
        this.ProfilesListDto = new Profile(
            ProfilesListDto.FirstName,
            ProfilesListDto.SurName,
            ProfilesListDto.DateOfBirth,
            ProfilesListDto.Gender,
            ProfilesListDto.Age,
            ProfilesListDto.City,
            ProfilesListDto.PostalCode,
            ProfilesListDto.PhoneNumber
            )
    }
}

export class Profile {
    FirstName: string;
    SurName: string;
    DateOfBirth: Date;
    Gender: string;
    Age: number;
    City: string;
    PostalCode: string;
    PhoneNumber: string;
    PhotoListDto: Photo;

    constructor(
        FirstName: string,
        SurName: string,
        DateOfBirth: Date,
        Gender: string,
        Age: number,
        City: string,
        PostalCode: string,
        PhoneNumber: string
    ){
        this.FirstName = FirstName;
        this.SurName = SurName;
        this.DateOfBirth = DateOfBirth;
        this.Gender = Gender;
        this.Age = Age;
        this.City = City;
        this.PostalCode = PostalCode;
        this.PhoneNumber = PhoneNumber;
    }
}

export class Photo {
    Url: string;

    constructor(Url: string){
        this.Url = Url;
    }
}
