import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginModel } from 'src/app/model/LoginModel';
import { RegisterModel } from 'src/app/model/RegisterModel';
import { MoivesService } from 'src/app/Service/moives.service';
import { UserService } from 'src/app/Service/user.service';
import { BookingComponent } from '../booking/booking.component';
import { LoginComponent } from '../login/login.component';
import { MoviesComponent } from '../movies/movies.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  data:any
  constructor(
    private router: Router,
    public serves: UserService,
    private toastr: ToastrService,
    private mService: MoivesService,
    public dialog: MatDialog,public ar:ActivatedRoute
      ) { }
      login:any
      out:any
      admin:any
  ngOnInit(): void {
    if (localStorage.getItem('token')=='1') {
      this.login=true
      this.out=false
    }else{
      this.login=false
      this.out=true
    }

    if (localStorage.getItem('Role')=='2') {
      this.admin=false
    }else{
      this.admin=true
    }
    // this.ar.snapshot.params["id"]
this.mService.GetTop3Moive().subscribe(e=>
  this.data=e ,
  er=>console.log(er))
this.sssss=this.ar.snapshot.params["id"]
  }

sssss:any
   //LogOut
   logout() {
    this.router.navigateByUrl('/home');

    localStorage.removeItem('token');
    window.location.reload();

  }

  openDialog()
  {
   const dialogRef = this.dialog.open(RegisterComponent,
     {data: RegisterModel});

   dialogRef.afterClosed().subscribe( data=>

    console.log(data,"Login")

   );

 }
 openDialogInsertMovies()
 {
  const dialogRef = this.dialog.open(MoviesComponent ,{data: RegisterModel});

  dialogRef.afterClosed().subscribe( data=>

   console.log(data,"Login")

  );

}


openDialogBooking(){
  const dialogRef = this.dialog.open(BookingComponent  );

  dialogRef.afterClosed().subscribe();

}

 openDialogToLogin()
 {
  const dialogRef = this.dialog.open(LoginComponent,
    {data: LoginModel});

  dialogRef.afterClosed().subscribe( );

}

}
