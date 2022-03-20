export interface Doctor{
    id:number;
    fname:string;
    lname:string;
    title:string;
    specialization:string;
    fees:number;
    rating:number;
    city:string;
    street:string;
    gender:string;
    img_name:string;
    offers?:boolean;
    appointment:[{"id":number,"start_time":string,"date":string,"patient_limit":number,"examination_time":number,"doctor_id":number,"reserved_times":[""]}];
    // appointments:[{"Date":string,"Time":[]}];
    username:string;
    description:string;
    phone:string;

}

