export class User {
    constructor (public email:string, 
        public id:string,
        private _token:string,
        private _tokenExpirationDate: Date){ }

    get isAuth() {
        return !!this._token
    }

    get token(){
        if(!this._token){
            return null;
        }
        if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
            return null;
        }
        return this._token
    }

    get timeToExpiry(){
        return this._tokenExpirationDate.getTime() - new Date().getTime();
    }
}

export class UserProfile {
    constructor(
        public id:string,
        public firstName: string,
        public middleName: string,
        public lastName: string,
        public address: string,
        public address1: string,
        public city: string,
        public state: string,
        public zipCode: number,
        public phone: string,
        public email: string,
        public registered: Date,
        public isActive: boolean,
        public jobFields: string[],
        public workProfile: Resume,
        private _accountPublic: boolean,
        private _appliedJobs: [{}]
    ){}
}

export class CompanyProfile {
    constructor(
        public id:string,
        public companyName: string,
        public companyAdmin: string,
        public address: string,
        public address1: string,
        public city: string,
        public state: string,
        public zipCode: number,
        public phone: string,
        public email: string,
        public registered: Date,
        public website: string,
        public careerLink: string,
        public isActive: boolean,
        public jobFields: string[],
        private _currentOpenings: [{}]
    ){}
}

export interface Resume {
    executive_summary?: string;
    objective?: string;
    work_experience?: [{}];
    education?: [{}];
    resume?:[];
    references?:[{
        name:string;
        position:string;
        comment:string;
    } ]
}