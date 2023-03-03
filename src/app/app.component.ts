import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { needConfirmation } from './component/confirm-dialog.decorator';
import { User } from './model/user';
import { MaterialUiModule } from './style/material-ui/material-ui.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, MaterialUiModule, HttpClientModule ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  displayedColumns: string[] =[ 'firstName', 'lastName', 'email', 'age', 'delete' ];
  dataSource: any;
  dataUrl: string = environment.dataUri;

  constructor(private http: HttpClient) {
    this.reloadData();
  }

  @needConfirmation()
  deleteUser(element: User) {
    this.dataSource = this.dataSource.filter((user: any) => user.id != element.id);
  }

  reloadData() {
    this.http.get(this.dataUrl).subscribe((data: any) => this.dataSource = data.users);
  }  
}
