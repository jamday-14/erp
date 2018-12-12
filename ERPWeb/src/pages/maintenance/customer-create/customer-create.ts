import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { Maintenance, Menu } from '../../../providers';
import { filter } from 'rxjs/operators';

/**
 * Generated class for the CustomerCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer-create',
  templateUrl: 'customer-create.html',
})
export class CustomerCreatePage {

  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  item: any;
  customerTypes: any;
  salesPersons: any;
  terms: any;
  form: FormGroup;

  loader = this.loadingCtrl.create({
    content: "Saving. Please wait..."
  });

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    formBuilder: FormBuilder,
    public camera: Camera,
    private maintenanceProvider: Maintenance,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public menu: Menu
  ) {
    this.form = formBuilder.group({
      profilePic: [''],
      name: ['', Validators.required],
      code: [''],
      address: [''],
      telNo: [''],
      faxNo: [''],
      contactPerson: [null],
      tinno: [''],
      customerTypeId: [null],
      registeredName: [''],
      registeredOwner: [''],
      businessStyle: [''],
      termId: [null],
      salesPersonId: [null]
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewDidLoad() {
    this.menu.activateMenu(false, false, false, false, false, true);

    this.getData();
  }
  private getData() {
    this.maintenanceProvider.queryCustomerTypes().subscribe((resp) => {
      this.customerTypes = resp;
    }, (err) => {});
    this.maintenanceProvider.queryTerms().subscribe((resp) => {
      this.terms = resp;
    }, (err) => {});
    this.maintenanceProvider.queryEmployees()
    //.pipe(filter(x=> x.isSalesPerson == true))
    .subscribe((resp) => {
      this.salesPersons = resp;
    }, (err) => {});
  }

  getPicture() {
    if (Camera['installed']()) {
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 96,
        targetHeight: 96
      }).then((data) => {
        this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
      }, (err) => {
        alert('Unable to take photo');
      })
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {

      let imageData = (readerEvent.target as any).result;
      this.form.patchValue({ 'profilePic': imageData });
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle() {
    return 'url(' + this.form.controls['profilePic'].value + ')'
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    if (!this.form.valid) { return; }

    this.maintenanceProvider.addCustomer({
      name: this.f.name.value,
      code: this.f.code.value,
      address: this.f.address.value,
      telNo: this.f.telNo.value,
      faxNo: this.f.faxNo.value,
      contactPerson: this.f.contactPerson.value,
      tinno: this.f.tinno.value,
      customerTypeId: this.f.customerTypeId.value,
      registeredName: this.f.registeredName.value,
      registeredOwner: this.f.registeredOwner.value,
      businessStyle: this.f.businessStyle.value,
      termId: this.f.termId.value,
      salesPersonId: this.f.salesPersonId.value
    }).subscribe((resp) => {
      let toast = this.toastCtrl.create({
        message: "Saving successful",
        duration: 3000,
        position: 'top'
      });
      toast.present();
      this.loader.dismiss();
      this.viewCtrl.dismiss(this.form.value);
    }, (err) => {
      let toast = this.toastCtrl.create({
        message: "Saving failed",
        duration: 3000,
        position: 'top'
      });
      toast.present();
      this.loader.dismiss();
    });
  }

}
