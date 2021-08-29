import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl,Validators,ReactiveFormsModule  } from '@angular/forms';
import { UserService } from '../service/userService';
import { Router } from '@angular/router';
import { UserUpdateComponent } from '../user-update/user-update.component';


@Component({
  selector: 'app-user-entry',
  templateUrl: './user-entry.component.html',
  styleUrls: ['./user-entry.component.css']
})
export class UserEntryComponent implements OnInit {
  id:any;

  userForm : FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    dob:new FormControl(''),
  });
  userId: any;
  constructor(private router: Router,public userService: UserService,private  fb: FormBuilder) { }

  ngOnInit(): void {
  
  }
  submit(values: any){
    this.userService.saveUser(values).subscribe((res: any) => {
       console.log('responseData : ',res );
       window.location.reload();
     
      //   window.alert(Object.values(res))
    
   this.userForm.reset();
  }
    )
}

}