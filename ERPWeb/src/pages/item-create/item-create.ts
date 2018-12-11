import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { Maintenance } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-item-create',
  templateUrl: 'item-create.html'
})
export class ItemCreatePage {
  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  item: any;
  units: any;
  form: FormGroup;

  loader = this.loadingCtrl.create({
    content: "Saving. Please wait..."
  });

  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    formBuilder: FormBuilder,
    public camera: Camera,
    private maintenanceProvider: Maintenance,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController, ) {

    this.form = formBuilder.group({
      profilePic: [''],
      itemCode: ['', Validators.required],
      description: ['', Validators.required],
      unitPrice: ['', Validators.required],
      costPrice: ['', Validators.required],
      quantity: ['', Validators.required],
      unitId: [null, Validators.required],
      isPurchased: [false],
      isForSale: [false],
      isInventory: [false],
      isImported: [false]
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewDidLoad() {
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

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    if (!this.form.valid) { return; }


    this.maintenanceProvider.addItem({
      itemCode: this.f.itemCode.value,
      description: this.f.description.value,
      unitPrice: this.f.unitPrice.value,
      costPrice: this.f.costPrice.value,
      quantity: this.f.quantity.value,
      unitId: this.f.unitId.value,
      ipurchased: this.f.isPurchased.value,
      isForSale: this.f.isForSale.value,
      isImported: this.f.isImported.value,
      isInventory: this.f.isInventory.value
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
