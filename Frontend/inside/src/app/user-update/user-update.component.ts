
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from '../service/userService';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  User:any=[] ;
   UserId: any;
   isEdit: Boolean = false;
   
  userForm : FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    dob:new FormControl(''),

  });

  constructor(public userService: UserService,private actRoute: ActivatedRoute,private router: Router) {
   }

  ngOnInit(): void {
    
    this.userService.getUser().subscribe(data=>this.User =data);

  }
  refresh(){window.location.reload();}
  edit(values: any){
    this.userService.updateUser(this.UserId,this.userForm.value).subscribe((res: any) => 
      console.log('responseData : ',res ))
      this.refresh();

  }
  onEdit(id: any){
     
      let user = this.userService.getUserInfo(id).subscribe(data =>{console.log(data);
        let dob = new Date(data.dob).toISOString().split('T')[0]
        console.log(dob)
    if(user){
      this.userForm.setValue({
        firstName: data['firstName'],
        lastName: data['lastName'],
        dob:dob
      })
      };
    })
      this.isEdit = true;
      this.UserId = id
    }
    submit(values: any){
      this.userService.saveUser(values).subscribe((res: any) => {
        console.log('responseData : ',res );
        this.userForm.reset();
        window.location.reload();
      })
  }
  
  removeUser(id: any) {
    if(window.confirm('Are you sure?')) {
      this.userService.deleteUser(id).subscribe((data) => {        
      }
    )    
  }
      this.refresh();  
    
  }
}
