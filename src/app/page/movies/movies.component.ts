import { MoivesService } from './../../Service/moives.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MovieModel } from 'src/app/model/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<MoviesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: MoivesService,
    private formBuilder: FormBuilder
  ) {}

  model: MovieModel = new MovieModel();
  formModeule: any = this.formBuilder.group({
    Name: [''],
    Photo: [''],
    Trailer: [''],
    Description: [''],
  });

  onNoClick(): void {
    this.dialogRef.close();
  }
  formData = new FormData();

  onFileChange(files: any) {
    this.formData.append('ProfilePicture', files[0]);
  }

  onSubmit() {
    this.formData.append('Name', this.formModeule.controls.Name.value);
    this.formData.append('Photo', this.formModeule.controls.Photo.value);
    this.formData.append('Trailer', this.formModeule.controls.Trailer.value);
    this.formData.append(
      'Description',
      this.formModeule.controls.Description.value
    );

    this.service.insertMoive(this.formData).subscribe(
      (e) => console.log(e),
      (er) => console.log(er)
    );
  }

  ngOnInit(): void {
    this.formModeule = this.formBuilder.group({
      name: [
        '',
        {
          validators: [Validators.required],
        },
      ],
    });

    if (this.model !== undefined) {
      this.formModeule.patchValue(this.model);
    }
  }
}
