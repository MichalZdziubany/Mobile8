import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, RouterLinkWithHref],
})
export class HomePage {
  myStatus: string = "";
  constructor(private storage: Storage) { }

  async ionViewWillEnter() {
    await this.storage.create();
    this.myStatus = await this.storage.get('status')
  }
}
