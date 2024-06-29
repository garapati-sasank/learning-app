import { Component, OnDestroy, inject } from '@angular/core';
import { CommunicationService } from './communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnDestroy {

  communicationService = inject(CommunicationService)
  
  
  
  ngOnDestroy(): void {
    sessionStorage.clear();
    this.communicationService.setUserName('');
  }

}
