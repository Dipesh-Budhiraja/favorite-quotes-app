import { Component, OnInit } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavParams} from 'ionic-angular';
import { Quote } from '../../data/quote.interface';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(private navParams: NavParams, private alertCtrl: AlertController){
    //alternative method is shown below but this is also correct
    // this.quoteGroup = this.navParams.data;
  }

  ngOnInit(){
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(selectedQuote: Quote){
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote',

      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            console.log('Ok');
          }
        },
        {
          role: 'cancel',
          text: 'No, I changed my Mind!',
          handler: () => {
            console.log('Cancelled!');
          }
        }
      ]
    });

    alert.present();
  }

  //ionViewDidLoad(){
    //this.quoteGroup = this.navParams.data;
    // add elvis(?) operator in template to use this approach
  //}
}
