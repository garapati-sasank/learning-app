import { Component, OnDestroy, inject } from '@angular/core';
import { CommunicationService } from './communication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnDestroy {

  communicationService = inject(CommunicationService);

  id: number = 10;
  name: string = 'sashi';

  cust = {
    name: 'sasi',
    id: 10
  }
  lastName$ : Observable<string>;
  
  
  
  ngOnDestroy(): void {
    sessionStorage.clear();
    this.communicationService.setUserName('');
  }

}
