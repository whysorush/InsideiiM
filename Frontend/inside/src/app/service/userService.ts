import{ Http } from '@angular/http';
import{ Injectable } from '@angular/core';
import { Router } from '@angular/router'; 
import { map } from 'rxjs/operators';

@Injectable() 

export class UserService{
    BASE_URL = 'http://localhost:5000';

    constructor(private http: Http , private route:Router){}

    saveUser(values : any){
        return this.http.post(this.BASE_URL + '/user/adduser', values)
      }
      
      getUser() {
        return this.http.get(this.BASE_URL + '/user/getuser').pipe(map((res: any) => res.json()))
      }
      
      getUserInfo(id:any){
        return this.http.get(this.BASE_URL + '/user/userinfo/'+ id).pipe(map((res: any) => res.json()))
      }

      updateUser(id: string,q: any){
        return this.http.post(this.BASE_URL + '/user/updateuser/'+ id ,q)
      }

      deleteUser(id:any){
        return this.http.delete(this.BASE_URL + '/user/deleteuser/'+ id )
      }
      
}