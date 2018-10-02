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
    title: 'Cebu Parish Priest impregnates two daughters of his Associate pastor',
    author: 'Ronda Balita Online News- March 7, 2018',
    source:'rondabalita.news',
    body:  ('\tCebu, Philippines- A Cebu-based parish Priest was arrested for raping and impregnating two daughters of his associate pastor in Barangay Palanas, Alcantara town. \n\n\tPolice say the name of the priest has been withheld to protect the identity of the 14 and 16-year old children. \n\n\tThe victims’ mother learned of the incident after she confirmed that her daughters are already three and five months pregnant. \n\n\tPolice said that at around 3 p.m. on Thursday, the girls and their mother went to the police station to report the alleged rape perpetrated by the priest as the church failed to penalize the parish priest.\n\n\tMaria Jared Llenos of the Women and Children Police Desk (WCPD) sad the victim’s mother believes the rape happened sometime in October last year. \n\n\tThe mother added the two daughters have been serving the priest at his residence. \n\n\tThe police said the victims did not tell anyone what the priest did to them because he allegedly threatened to kill them. \n\n\tSPO1 Artemio Cababat of the Alcantara Police Station said they find it hard to get information or additional details from the mother and her daughter because the three are still afraid of what the suspect might do to them. \n\n\tThe suspect is now temporarily detained at the police station while facing charges for violation of Republic Act No. 7610 or the Anti-Child Abuse law.')
 }));
 this.articles.push(new Article({
  id:3,
  picture:"/assets/img/article3.jpg",
  title: 'PNP to file charges vs. blogger Drew Olivar over bomb joke',
  author: 'CNN Philippines Staff- September 24, 2018',
  source:'cnnphilippines.com',
  body:  ('\tMetro Manila- More charges await for blogger Drew Olivar for another controversial post on social media. \n\n\tDirector-General Oscar Albayalde, Philippine National Police (PNP) chief, said Olivar will face charges of spreading false bomb threat information in one of the rallies during the 46th anniversary of the martial law declaration.\n\n\t“Hindi lang siya maaresto that time kasi nangyari ‘yun medyo matagal na [He wasn’t arrested immediately because he posted the joke quite some time ago] but he will be formally charged in court for violation of PD 1727,” Albayalde told the media Monday. \n\n\tPresidential Decree 1727 prohibits “malicious dissemination of false information or the willful making of any threat concerning bombs, explosives or any similar device or means of destruction and imposing penalties therefore.” \n\n\tViolators may be punished with imprisonment of not more than five years, or a maximum fine of P40,000. \n\n\tOlivar posted on his Facebook page on September 21 a warning for rallyists in EDSA that a bomb explosion may occur similar to that of the Plaza Miranda bombing n Quiapo, Manila in 1971. \n\n\tThis latest social media development comes after a series of controversial posts from the blogger along with Communications Assistant Secretary Mocha Uson. The tandem received backlash for ther “Pepederalismo” videos and another video mocking the deaf community. \n\n\tThe Philippine Federation of the Deaf filed a complaint with the Ombudsman on September 20 against Uson and Olivar for making fun of sign language and violating their rights. \n\n\tAlbayalde did not detail when the charges will be filed but Director Guillermo Eleazar, Metro Manila police chief, earlier mentioned they are eyeing filling it as soon as possible.')
}));
this.articles.push(new Article({
  id:4,
  picture:"/assets/img/article4.jpg",
  title: 'Arroyo backs forest protection, restoration',
  author: 'Ma. Reina Leanne Tolentino, TMT- September 23, 2018',
  source:'manilatimes.net',
  body:  ('\tHouse Speaker Gloria Macapagal- Arroyo has expressed “strong support” for forest protection and restoration, saying caring for forests presents positive impacts to food security and tourism. \n\n\t“Kahit wala pa tayong mining ditto, ang kayamanan natin ay ang kalikasan natin, yung mga food manufacturing natin, yung food security na maitutulong natin sa buong bansa, at yun na nga, responsible care of the forest (Even if we do not have mining activities here [in Pampanga], our treasure is the environment, our food manufacturing, the food security that we can contribute to the whole country, and responsible care of the forest),” Arroyo said when she attended the tree planting activity in Barangay Villa Maria in Porac, Pampanga. \n\n\tThe activity was led by the Civil Service Commission (CSC) in celebration of its 118th anniversary dubbed “Lingkod Bayani: Kilos para sa Kalikasan.” \n\n\tPampanga Gov. Lilia Piñeda, CSC Chairman Alicia Bala, Porac Mayor Conrado de la Cruz, Vice Mayor Dexter Albert David, and Assistant Secretary Joselin Marcus Fragada of the Department of Environment and National Resources among others, attended the event. \n\n\tArroyo said even if there had been no landslides in Pampanga, local officials have the responsibility to see to it that mountains in Porac remain safe for residents and to help realize the town’s potential. \n\n\tThe former president sad only responsible mining should be allowed in the province. \n\n\t“There should be a rehabilitation portion na magtatanim ulit ng mga puno (where trees should be planted). So if ever makaswerte tayo, makahanap tayo ng gold ditto, bakit hindi? We can mine it, pero dapat mayroong mga rules (If we get lucky and discover gold here, we can mine it. But there must be rules),” Arroyo said.')
}));
    
    
    }
} 
