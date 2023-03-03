import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogData } from 'src/app/model/confirm-dialog-data';
import { MaterialUiModule } from 'src/app/style/material-ui/material-ui.module';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [ MaterialUiModule ],
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.sass']
})
export class ConfirmDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData) {}
}
