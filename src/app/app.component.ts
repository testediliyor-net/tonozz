import { Component, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { setBodyClass } from './utils/lib/bodyclass';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  static isBrowser = new BehaviorSubject<boolean>(null);
  constructor(@Inject(PLATFORM_ID) private platformId: any,
    public translateService: TranslateService,
    private router: Router
  ) {
    AppComponent.isBrowser.next(isPlatformBrowser(platformId));
    /**
     * Search In Current Route
     */
    this.router.events.subscribe((e) => {
      if (e instanceof ActivationEnd) {

        /** 
         * When it finds the body class in the active current route, add it to the body element  
         * So we can customize every page
        */
        e.snapshot.data.bodyClass && setBodyClass(e.snapshot.data.bodyClass);
      }
    });
  }
}
