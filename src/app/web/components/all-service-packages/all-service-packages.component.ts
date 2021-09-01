import { Component } from '@angular/core';
import { Items } from '../../../interfaces/items/item.interface';

@Component({
  selector: 'app-all-service-packages',
  templateUrl: './all-service-packages.component.html',
  styleUrls: ['./all-service-packages.component.css']
})
export class AllServicePackagesComponent {


   items:Items [] = [
    { id:'01',title:'VIP COMMENTS', description:'Commenti da influencer per ogni post. Indicatore di content di qualità. Ricevi come bonus saves e likes. Vai al servizio',image:"../../../../assets/icons/vip_comments.svg", url:"/comments" },
    { id:'02', title:'IMPRESSIONS', description:'Ricevi impressions e reach appena posti. Questo aiuta a preparare il tuo account per ricevere likes, saves o commenti. Vai al servizio', image:'../../../../assets/icons/impressions.svg', url:"/impressions"}, 
    { id:'03', title:'IGTV', description:'Visualizzazioni create ad hoc per IGTV. Lunga durata per ottenere credibilità organica e coerenza nel content. Vai al servizio', image:'../../../../assets/icons/igtv_1.svg', url:"/igtv"}, 
    { id:'04', title:'AUTO VIEWS', description:'Visualizzazioni automatiche per i tuoi video. Dedicate ai video fino a un minuto. Per Explore e top hashtag la visibilità è essenziale Vai al servizio', image:'../../../../assets/icons/auto_views.svg', url:"/igtv"}, 
    { id:'05', title:'ALL INCLUSIVE', description:'I pacchetti senza pensieri. Le interazioni sono combinate per far esplodere il tuo engagement e le nuove persone raggiunte. Visibilità garantita Vai al servizio', image:'../../../../assets/icons/all_inclusive.svg', url:"/autoviews"}, 
    { id:'06', title:'AUTO SAVES', description:'I saves o “salvataggi” sono indicatori che il tuo content è importante per le persone. Per Explore e top hashtag il criterio è lo stesso delle views Vai al servizio', image:'../../../../assets/icons/auto_saves.svg', url:"/autosaves"}, 
    { id:'07', title:'REELS', description:'Uno dei metodi più facili per crescere oggi. Sono considerati da Instagram come il principale strumento di permanenza. Vai al servizio ', image:'../../../../assets/icons/reels.svg', url:"/reels"}, 
    { id:'08', title:'AUTO LIKES', description:'Like automatici che arrivano in modo organico e naturale appena posti su Instagram. Abbiamo un pacchetto per ogni account. Vai al servizio', image:'../../../../assets/icons/auto_likes.svg', url:"/autolikes"}, 
    { id:'09', title:'CONTENT CREATION', description:'A breve disponibile un elenco di professionisti suddivisi per categoria che possono occuparsi dei tuoi content Vai al servizio', image:'../../../../assets/icons/content.svg', url:"/creation"}, 
  ] 
   


  constructor() { }


}
