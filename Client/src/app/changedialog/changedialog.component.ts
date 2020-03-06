/* spiritdev Softwareentwicklung GmbH 2020
      Author Vladimir Kogan
*/
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../appform/appform.component';
import { FormBuilder, Validators } from '@angular/forms';
import { DatenService } from '../datenservice/daten.service';
import { AppItem } from '../model/AppItem';
import { UpdateApp, AddApp, SelectApp } from '../store/app.actions';
import { Store, Actions, ofActionSuccessful } from '@ngxs/store';



@Component({
  selector: 'app-changedialog',
  templateUrl: './changedialog.component.html',
  styleUrls: ['./changedialog.component.css']
})
export class ChangeDialogComponent implements OnInit {

  public appForm = this.fb.group({
    id: [''],
    title: ['', [Validators.required]],
    price: ['', [Validators.required]],
    annotation: ['', [Validators.required]],
    category: ['', [Validators.required]],
    platform: ['', [Validators.required]],
    projectStart: ['', [Validators.required]],
    projectEnd: ['', [Validators.required]],
    salesAmount: ['', [Validators.required]],
    image: ['', [Validators.required]]
  });

  title = 'Add New App';
  app: AppItem;
  image: any;
  message: string;


  constructor(private fb: FormBuilder, private datenservice: DatenService,
              private actions$: Actions,
              public dialogRef: MatDialogRef<ChangeDialogComponent>,
              private store: Store, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.app = data.app;
  }

  ngOnInit(): void {
    this.appForm.patchValue(
      {
        id: this.data.app.id,
        title: this.data.app.title,
        annotation: this.data.app.annotation,
        price: this.data.app.price,
        category: this.data.app.category,
        platform: this.data.app.plattform,
        projectStart: this.data.app.projectStart,
        projectEnd: this.data.app.projectEnd,
        salesAmount: this.data.app.salesAmount,
        image: this.data.app.image
      });
    if (this.data.app.id !== 0) {
      this.title = 'Edit ' + this.data.app.title;
    }

  }
  saveDialogChanges() {
    this.app.id = this.appForm.value.id;
    this.app.title = this.appForm.value.title;
    this.app.annotation = this.appForm.value.annotation;
    this.app.price = Number(this.appForm.value.price);
    this.app.image = this.appForm.value.image;
    this.app.category = this.appForm.value.category;
    this.app.plattform = this.appForm.value.platform;
    this.app.projectStart = this.appForm.value.projectStart;
    this.app.projectEnd = this.appForm.value.projectEnd;
    this.app.salesAmount = Number(this.appForm.value.salesAmount);
    if (this.app.id !== 0) {
      this.store.dispatch(new UpdateApp(this.app));
      this.actions$.pipe(ofActionSuccessful(UpdateApp)).subscribe(() => {
        this.dialogRef.close();
      });
    } else {
      this.store.dispatch(new AddApp(this.app));
      this.actions$.pipe(ofActionSuccessful(AddApp)).subscribe(() => {
        this.dialogRef.close();
        this.store.dispatch(new SelectApp(this.app));
      });

    }
  }

  preview(files: FileList) {
    if (files.length === 0) {
      return;
    }
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.image = reader.result;
      this.appForm.value.image = reader.result;
    };

  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
