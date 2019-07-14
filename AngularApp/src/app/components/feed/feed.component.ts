import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FeedService } from './feed.service';
import { ConfigService } from '../../config/config.service';
import { Feeds } from './feeds';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  feeds: Feeds;
  

  private config = ConfigService.config;

  constructor(private feedService: FeedService, private configService: ConfigService) { }

  ngOnInit() {
    this.feedService.getFeeds()
      .subscribe(res => {
        this.feeds = res.data
        console.log(this.feeds);
      }, error => {
        console.log(error);
      })
  }

  fetchFeeds(tags: string) {
    this.feedService.getFeedsByTags(tags)
      .subscribe(res => {
        this.feeds = res.data
        console.log(this.feeds);
      }, error => {
        console.log(error);
      })
  }

}
