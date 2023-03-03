import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

const MATERIAL_UI_COMPONENTS = [
  MatButtonModule,
  MatToolbarModule,
  MatTableModule,
  MatIconModule,
  MatDialogModule,
];

@NgModule({
  declarations: [],
  imports: [ ...MATERIAL_UI_COMPONENTS ],
  exports: [ ...MATERIAL_UI_COMPONENTS ],
})
export class MaterialUiModule { }
