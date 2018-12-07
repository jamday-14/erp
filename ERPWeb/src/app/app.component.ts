import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Platform, Nav } from 'ionic-angular';

import { FirstRunPage } from '../pages';
import { Settings } from '../providers';

@Component({
  template: `
  <ion-split-pane>
    <ion-menu [content]="content" id="salesMenu">
      <ion-header>
        <ion-toolbar>
          <ion-title>Sales Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="menu-container">
        <ion-list>
          <button menuClose ion-item *ngFor="let p of salesPages" (click)="openPage(p)" class="transparent list-item">
            {{p.title}}
          </button>
        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-menu [content]="content" id="purchasingMenu">
      <ion-header>
        <ion-toolbar>
          <ion-title>Purchasing Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="menu-container">
        <ion-list>
          <button menuClose ion-item *ngFor="let p of purchasingPages" (click)="openPage(p)" class="transparent list-item">
            {{p.title}}
          </button>
        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-menu [content]="content" id="inventoryMenu">
      <ion-header>
        <ion-toolbar>
          <ion-title>Inventory Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="menu-container">
        <ion-list>
          <button menuClose ion-item *ngFor="let p of inventoryPages" (click)="openPage(p)" class="transparent list-item">
            {{p.title}}
          </button>
        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-menu [content]="content" id="accountingMenu">
      <ion-header>
        <ion-toolbar>
          <ion-title>Accounting Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="menu-container">
        <ion-list>
          <button menuClose ion-item *ngFor="let p of accountingPages" (click)="openPage(p)" class="transparent list-item">
            {{p.title}}
          </button>
        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-menu [content]="content" id="reportsMenu">
      <ion-header>
        <ion-toolbar>
          <ion-title>Reports Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="menu-container">
        <ion-list>
          <button menuClose ion-item *ngFor="let p of reportsPages" (click)="openPage(p)" class="transparent list-item">
            {{p.title}}
          </button>
        </ion-list>
      </ion-content>
    </ion-menu>
    <ion-menu [content]="content" id="maintenanceMenu">
      <ion-header>
        <ion-toolbar>
          <ion-title>Maintenance</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="menu-container">
        <ion-list>
          <button menuClose ion-item *ngFor="let p of maintenancePages" (click)="openPage(p)" class="transparent list-item">
            {{p.title}}
          </button>
        </ion-list>
      </ion-content>
    </ion-menu>
  <ion-nav #content [root]="rootPage" main></ion-nav></ion-split-pane>`
})

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;

  salesPages: any[] = [
    { title: 'Home', component: 'HomePage' },
    { title: 'Dashboard', component: 'SalesPage' },
    { title: 'Sales Quotation', component: 'SalesQuotationPage' },
    { title: 'Sales Order', component: 'SalesOrderPage' },
    { title: 'Delivery Receipt', component: 'DeliveryReceiptPage' },
    { title: 'Sales Invoice', component: 'SalesInvoicePage' },
    { title: 'Sales Return', component: 'SalesReturnPage' }
  ]

  purchasingPages: any[] = [
    { title: 'Home', component: 'HomePage' },
    { title: 'Dashboard', component: 'PurchasingPage' },
    { title: 'Purchase Request', component: 'PurchaseRequestPage' },
    { title: 'Purchase Order', component: 'PurchaseOrderPage' },
    { title: 'Goods Receipt', component: 'GoodsReceiptPage' },
    { title: 'Goods Return', component: 'GoodsReturnPage' },
    { title: 'Bills', component: 'BillsPage' },
    { title: 'Bills Payment', component: 'BillsPaymentPage' }
  ]

  inventoryPages: any[] = [
    { title: 'Home', component: 'HomePage' },
    { title: 'Dashboard', component: 'InventoryPage' },
    { title: 'Inventory Adjustment', component: 'InventoryAdjustmentPage' },
    { title: 'Relocate Goods', component: 'RelocateGoodsPage' },
    { title: 'Physical Inventory', component: 'PhysicalInventoryPage' }
  ]

  accountingPages: any[] = [
    { title: 'Home', component: 'HomePage' },
    { title: 'Dashboard', component: 'AccountingPage' },
    { title: 'Charts of Accounts', component: 'ChartsOfAccountsPage' },
    { title: 'Subsidiary', component: 'SubsidiaryPage' },
    { title: 'Journal Voucher', component: 'JournalVoucherPage' },
    { title: 'Check Voucher', component: 'CheckVoucherPage' },
    { title: 'Cash Receipt Voucher', component: 'CashReceiptVoucherPage' }
  ]

  reportsPages: any[] = [
    { title: 'Home', component: 'HomePage' },
    { title: 'Dashboard', component: 'ReportsPage' },
    { title: 'Inventory Balance', component: 'InventoryBalancePage' },
    { title: 'Inventory Ledger', component: 'InventoryLedgerPage' },
    { title: 'Trial Balance', component: 'TrialBalancePage' },
    { title: 'General Ledger', component: 'GeneralLedgerPage' },
    { title: 'Subsidiary Ledger', component: 'SubsidiaryLedgerPage' },
    { title: 'Balance Sheet', component: 'BalanceSheetPage' },
    { title: 'Income Statement', component: 'IncomeStatementPage' },
  ]

  maintenancePages: any[] = [
    { title: 'Home', component: 'HomePage' },
    { title: 'Dashboard', component: 'MaintenancePage' },
    { title: 'Customer', component: 'CustomerPage' },
    { title: 'Item', component: 'ItemPage' }
  ]
  constructor(private translate: TranslateService, platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.initTranslate();
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
