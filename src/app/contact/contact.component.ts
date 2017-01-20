import { Component, OnInit } from '@angular/core';

declare var google: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  physical_addr: string = 'Plot 22995, Nkoyaphiri, Mogoditshane, Botswana';
  office_no1: string = '+267 398 0380';
  office_no2: string = '+267 393 0349';
  email: string = 'sales@zhe.co.bw';

  lat: number = -24.6793068;
  lng: number = 25.9287612;
  zoom: number = 12;

  constructor() { }

  ngOnInit() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: this.zoom,
      center: { lat: this.lat, lng: this.lng },
    });

    var marker = new google.maps.Marker({
      position: { lat: this.lat, lng: this.lng },
      map: map,
      title: 'Hello World!'
    });
  }

  changeLatLong(lt: number, lg: number) {

    this.lat = lt;
    this.lng = lg;

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: this.zoom,
      center: { lat: this.lat, lng: this.lng },
    });

    var marker = new google.maps.Marker({
      position: { lat: this.lat, lng: this.lng },
      map: map,
      title: 'Hello World!'
    });
  }
}
