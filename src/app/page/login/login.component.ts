import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginModel } from 'src/app/model/LoginModel';

import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ,private UserServices: UserService
  ) { }
  model:LoginModel=new LoginModel()
  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    console.log(this.model)

    this.UserServices.login(this.model).subscribe((data) => {
      window.location.reload();
      this.dialogRef.close();
    },err => console.log(err)
    )
  }

  ngOnInit(): void {
  }

}
