import { Injectable } from '@angular/core';
import { Article } from '../classes/article';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articles: Array<Article> = [];
  constructor() {

     this.articles.push(new Article({
      id:1,
      picture:"/assets/img/article1.jpg",
      title: 'U.S. ANNOUNCES ‘NO VISA’ POLICY FOR FILIPINOS',
      author: 'Pol Pinoy, adobochronicles- 2014',
      source:'adobochronicles.com',
      body:  ('\tWashington, D.C. - The State Department today announced a life- changing new policy for Filipinos. Visas will no longer be required to travel to the United States. The policy to take the Philippines off the list of countries whose citizens are required to obtain visas for travel to the U.S is effective immediately. \n\n\tThe new policy comes on the heels of a recent survey showing that an overwhelming majority of Filipinos have a favorable view in the United States. The Philippines ranked first in a global survey on the image of the United States worldwide, beating even the U.S itself when it comes to a favorable view on the American people.\n\n\tAccording to the 2013 Global Attitudes Project of the Pew Research Center in Washington, DC, the Philippines got an 85 percent score, the highest, when people were asked, “Do you have a favorable or unfavorable view of the U.S?” \n\n\tU.S Secretary of State John Kerry said that the State Department made this monumental decision as a way to reward the Filipinos for making the U.S really look good in the survey.\n\n\tWith this new policy, the U.S is now added to the list of 25 countries which do not require travel visas for Filipinos. These countries include most of the Philippines’ Southeast Asian neighbors as some countries in Latin America including Brazil, Costa Rica, Peru and Bolivia.\n\n\tThe “no visa” policy comes just in time for the visit to the Philippines later this month by U.S President Barack Obama.\n\n\tUPDATE: Meanwhile, the U.S Embassy in Manila asked that Filipinos refrain from calling consular office to avoid its phone system from crashing. Instead, people are being asked to download and complete the biographical from will be filed by the embassy, along with four 2x2 colored ‘selfie’ photos as least one week before they depart for the U.S. the biographical form will be filed by the embassy for reference just in case Filipinos overstay in the U.S. The no-visa policy for Filipinos is good for 60 days stay in all states except Alaska.')
   }));

   this.articles.push(new Article({
    id:2,
    picture:"/assets/img/article2.jpg",
    title: 'U.S. ANNOUNCES ‘NO VISA’ POLICY FOR FILIPINOS',
    author: 'Pol Pinoy, adobochronicles- 2014',
    source:'adobochronicles.com',
    body:  ('\tWashington, D.C. - The State Department today announced a life- changing new policy for Filipinos. Visas will no longer be required to travel to the United States. The policy to take the Philippines off the list of countries whose citizens are required to obtain visas for travel to the U.S is effective immediately. \n\n\tThe new policy comes on the heels of a recent survey showing that an overwhelming majority of Filipinos have a favorable view in the United States. The Philippines ranked first in a global survey on the image of the United States worldwide, beating even the U.S itself when it comes to a favorable view on the American people.\n\n\tAccording to the 2013 Global Attitudes Project of the Pew Research Center in Washington, DC, the Philippines got an 85 percent score, the highest, when people were asked, “Do you have a favorable or unfavorable view of the U.S?” \n\n\tU.S Secretary of State John Kerry said that the State Department made this monumental decision as a way to reward the Filipinos for making the U.S really look good in the survey.\n\n\tWith this new policy, the U.S is now added to the list of 25 countries which do not require travel visas for Filipinos. These countries include most of the Philippines’ Southeast Asian neighbors as some countries in Latin America including Brazil, Costa Rica, Peru and Bolivia.\n\n\tThe “no visa” policy comes just in time for the visit to the Philippines later this month by U.S President Barack Obama.\n\n\tUPDATE: Meanwhile, the U.S Embassy in Manila asked that Filipinos refrain from calling consular office to avoid its phone system from crashing. Instead, people are being asked to download and complete the biographical from will be filed by the embassy, along with four 2x2 colored ‘selfie’ photos as least one week before they depart for the U.S. the biographical form will be filed by the embassy for reference just in case Filipinos overstay in the U.S. The no-visa policy for Filipinos is good for 60 days stay in all states except Alaska.')
 }));

 this.articles.push(new Article({
  id:3,
  picture:"/assets/img/article3.jpg",
  title: 'U.S. ANNOUNCES ‘NO VISA’ POLICY FOR FILIPINOS',
  author: 'Pol Pinoy, adobochronicles- 2014',
  source:'adobochronicles.com',
  body:  ('\tWashington, D.C. - The State Department today announced a life- changing new policy for Filipinos. Visas will no longer be required to travel to the United States. The policy to take the Philippines off the list of countries whose citizens are required to obtain visas for travel to the U.S is effective immediately. \n\n\tThe new policy comes on the heels of a recent survey showing that an overwhelming majority of Filipinos have a favorable view in the United States. The Philippines ranked first in a global survey on the image of the United States worldwide, beating even the U.S itself when it comes to a favorable view on the American people.\n\n\tAccording to the 2013 Global Attitudes Project of the Pew Research Center in Washington, DC, the Philippines got an 85 percent score, the highest, when people were asked, “Do you have a favorable or unfavorable view of the U.S?” \n\n\tU.S Secretary of State John Kerry said that the State Department made this monumental decision as a way to reward the Filipinos for making the U.S really look good in the survey.\n\n\tWith this new policy, the U.S is now added to the list of 25 countries which do not require travel visas for Filipinos. These countries include most of the Philippines’ Southeast Asian neighbors as some countries in Latin America including Brazil, Costa Rica, Peru and Bolivia.\n\n\tThe “no visa” policy comes just in time for the visit to the Philippines later this month by U.S President Barack Obama.\n\n\tUPDATE: Meanwhile, the U.S Embassy in Manila asked that Filipinos refrain from calling consular office to avoid its phone system from crashing. Instead, people are being asked to download and complete the biographical from will be filed by the embassy, along with four 2x2 colored ‘selfie’ photos as least one week before they depart for the U.S. the biographical form will be filed by the embassy for reference just in case Filipinos overstay in the U.S. The no-visa policy for Filipinos is good for 60 days stay in all states except Alaska.')
}));
   
    
    
    }
} 
