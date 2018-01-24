import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  person: string;
  text:string;

  constructor(private viewCtrl: ViewController, private navParams: NavParams){}

    ionViewDidLoad(){
      this.person = this.navParams.get('person');
      this.text = this.navParams.get('text');
    }

    onClose(remove = false){
      this.viewCtrl.dismiss(remove);//pass the data beneath that view
    }
}
