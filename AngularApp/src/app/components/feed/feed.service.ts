import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { ConfigService } from '../../config/config.service';
import { Feeds, FeedWrapper } from './feeds';
import { Observable } from 'rxjs';

@Injectable()
export class FeedService {
  private config: any;
  private error: any;

  constructor(private http: HttpClient) { }

  getFeeds(): Observable<FeedWrapper> {
    return this.http.get<FeedWrapper>('http://localhost:3000/api/feeds');
  }

  getFeedsByTags(tags: string): Observable<FeedWrapper> {
    return this.http.post<FeedWrapper>('http://localhost:3000/api/feeds', { tags: tags});
  }
}
