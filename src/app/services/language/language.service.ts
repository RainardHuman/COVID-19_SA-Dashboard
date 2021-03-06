import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataStoreService } from '../data-store/data-store.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(
    public translate: TranslateService,
    private dataStore: DataStoreService
  ) {}

  public loadTranslationService() {
    if (this.translate.langs.length === 0) {
      this.translate.addLangs(['en', 'af', 'zu']);
      this.translate.setDefaultLang('en');
      this.dataStore.selectedLanguage = 'en';
      this.activateEnglish();
    } else {
      this.translate.use(this.translate.currentLang);
      this.dataStore.selectedLanguage = this.translate.currentLang;
    }
  }

  public getTranslation(jsonProperty: string): Observable<string> {
    return this.translate.get(jsonProperty);
  }

  public activateEnglish() {
    this.translate.use('en');
    this.dataStore.isFeatureSnackbarShown = false;
  }

  public activateAfrikaans() {
    this.translate.use('af');
    this.dataStore.isFeatureSnackbarShown = false;
  }

  public activateZulu() {
    this.translate.use('zu');
    this.dataStore.isFeatureSnackbarShown = false;
  }
}
