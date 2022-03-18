import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Review } from "../../app/Models/review";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
// import { Doctor } from "app/Models/doctor";
@Injectable({
  providedIn: "root",
})
export class ReviewsService {
  // doctor:Doctor[]=[];
  header:any =new HttpHeaders().set("Authorization",localStorage.getItem('Authorization')!);
  constructor(private httpClient: HttpClient) {}

  getAllReviews(): Observable<Review[]>{
    let header =new HttpHeaders().set("Authorization",localStorage.getItem('AuthorizationA')!);
   return this.httpClient.get<Review[]>(`${environment.ApiUrl}/dashboard/reviews`,{headers:header});
  }
  getReviewByID(review_id:number):Observable<Review>{
    return this.httpClient.get<Review>(`${environment.ApiUrl}/reviews/${review_id}`)
  }
  getReviewByDoctorID(doctor_id:number):Observable<Review[]>{
    return this.httpClient.get<Review[]>(`${environment.ApiUrl}/reviews?doctor_id=${doctor_id}`)
  }

  getReviewBypatientID(patient_id:number):Observable<Review[]>{
    return this.httpClient.get<Review[]>(`${environment.ApiUrl}/reviews?patient_id=${patient_id}`)
  }

  getReviewByRating(rating:number,doctor_id:number):Observable<Review>{
    return this.httpClient.get<Review>(`${environment.ApiUrl}/reviews?rating=${rating}?id=${doctor_id}`)
  }
  deleteReview(review_id:number):Observable<Review>{
    let header =new HttpHeaders().set("Authorization",localStorage.getItem('AuthorizationA')!);
    return this.httpClient.delete<Review>(`${environment.ApiUrl}/dashboard/reviews/${review_id}`,{headers:header})

  }
  sendReview(newreview: Review): Observable<Review> {
    const headers = { "content-type": "application/json" };
    // const body = JSON.stringify(newreview);
    return this.httpClient.post<Review>(`${environment.ApiUrl}/reviews`, newreview, {
      headers: headers,
    });
  }

  


}
