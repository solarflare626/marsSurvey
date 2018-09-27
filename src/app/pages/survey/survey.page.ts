import { Component, OnInit } from '@angular/core';
import { Article } from '../../classes/article';
import { ArticleService } from '../../services/article.service';
@Component({
  selector: 'app-survey',
  templateUrl: './survey.page.html',
  styleUrls: ['./survey.page.scss'],
})
export class SurveyPage implements OnInit {
  articles:Array<Article> = [];
  
  constructor(private articleService:ArticleService) {
    this.articles = this.articleService.articles;
   }

  ngOnInit() {
  }

}
