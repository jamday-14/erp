import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

// import { Items } from '../mocks/providers/items-mock';
import { Settings, User, Api } from '../providers';
import { MyApp } from './app.component';
import { CustomerInfoPage } from '../pages/customer-info/customer-info';
import { CustomerTransactionPage } from '../pages/customer-transaction/customer-transaction';
import { AuthProvider } from '../providers/auth/auth';
import { Maintenance } from '../providers/maintenance/maintenance';
import { Menu } from '../providers/menu/menu';
import { ComponentsModule } from '../components/components.module';
import { Sales } from '../providers/sales/sales';

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp,
    CustomerInfoPage,
    CustomerTransactionPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp, { tabsPlacement: 'top' }),
    IonicStorageModule.forRoot(),
    ComponentsModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
    CustomerInfoPage,
    CustomerTransactionPage
  ],
  providers: [
    Api,
    User,
    Camera,
    SplashScreen,
    StatusBar,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthProvider,
      multi: true
    },
    Maintenance,
    Menu,
    Sales
    
  ]
})
export class AppModule { }
