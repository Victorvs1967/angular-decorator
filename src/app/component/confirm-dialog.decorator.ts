import { async } from "rxjs";
import { ConfirmDialogData } from "../model/confirm-dialog-data";
import { DialogService } from "../service/dialog.service";
import { ConfirmDialogComponent } from "./confirm-dialog/confirm-dialog.component";

const defaultConfirmData = {
  title: 'Confirmation',
  message: 'Are you sure you want to perform this action?',
};

export const needConfirmation = (confirmData: ConfirmDialogData = defaultConfirmData) => {
  return (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = async function ( ...args: any ) {
      DialogService.getInstance()?.openDialog(confirmData, ConfirmDialogComponent)
      .subscribe(validation => {
        if (validation) originalMethod.apply(this, args)
      });
    };
    
    return descriptor;
  }
}