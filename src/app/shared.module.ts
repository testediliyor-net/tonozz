import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Dropdown } from './utils/ui';
import { FormsModule } from '@angular/forms';
import { Accordion } from './utils/ui/accordion';
import { BaseNewsletter } from './components/layout/newsletter';
import { UserImageComponent } from './components/base/components/user-image';
import { ImageCard } from './components/base/components/image-card';

const HttpLoaderFactory = function (http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function SharedTranslate() {
  return TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    },
    defaultLanguage: 'en',
  });
}


@NgModule({
  declarations: [
    Dropdown,
    Accordion,
    BaseNewsletter,
    UserImageComponent,
    ImageCard
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedTranslate(),
  ],
  exports: [
    Dropdown,
    Accordion,
    BaseNewsletter,
    UserImageComponent,
    ImageCard
  ]

})
export class SharedModule { }
