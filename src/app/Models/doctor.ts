export interface Doctor{
    fname:string;
    lname:string;
    gender:string;
    offers:boolean;
    appointments:[{"Date":string,"Time":[]}];
    username:string;
    specialization:string;
    title:string;
    fees:number;
    rating:any;
    city:string;
    street:string;
    image_name?:string;
    description:string;
    phone:string;
    id:number;
}

