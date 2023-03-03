import { ENVIRONMENT_INITIALIZER, importProvidersFrom, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { DialogService } from './app/service/dialog.service';

export const initializeDigServce = () => {
  return () => inject(DialogService);
};

bootstrapApplication(AppComponent, { providers: [
  importProvidersFrom(MatDialogModule),
  {
    provide: ENVIRONMENT_INITIALIZER,
    useFactory: initializeDigServce,
    deps: [MatDialog],
    multi: true,
  },
] 
})
.catch(err => console.error(err));
