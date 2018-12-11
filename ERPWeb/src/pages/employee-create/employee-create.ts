import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { Maintenance, Menu } from '../../providers';

/**
 * Generated class for the EmployeeCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employee-create',
  templateUrl: 'employee-create.html',
})
export class EmployeeCreatePage {

  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  item: any;
  units: any;
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
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      telNo: [''],
      address: ['', Validators.required],
      bday: [null],
      philHealthNo: [''],
      sssno: [''],
      tinno: [''],
      pagibigNo: [''],
      isRegular: [false],
      isContract: [false],
      isExtendContract: [false],
      isSalesPerson: [false]
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
    this.maintenanceProvider.queryUnits().subscribe((resp) => {
      this.units = resp;
    }, (err) => {
    });
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


    this.maintenanceProvider.addEmployee({
      firstName: this.f.firstName.value,
      middleName: this.f.middleName.value,
      lastName: this.f.lastName.value,
      telNo: this.f.telNo.value,
      address: this.f.address.value,
      bday: this.f.bday.value,
      philHealthNo: this.f.philHealthNo.value,
      sssno: this.f.sssno.value,
      tinno: this.f.tinno.value,
      pagibigNo: this.f.pagibigNo.value,
      isRegular: this.f.isRegular.value,
      isContract: this.f.isContract.value,
      isExtendContract: this.f.isExtendContract.value,
      isSalesPerson: this.f.isSalesPerson.value
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
