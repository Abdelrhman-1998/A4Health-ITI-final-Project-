import { HttpClient } from "@angular/common/http";
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
  constructor(private httpClient: HttpClient) {}

  getAllReviews(): Observable<Review[]>{
   return this.httpClient.get<Review[]>(`${environment.ApiUrl}/reviews`);
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
    return this.httpClient.delete<Review>(`${environment.ApiUrl}/reviews/${review_id}`)
  }

}
