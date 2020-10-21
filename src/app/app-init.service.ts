import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AppConfiguration } from './models/app-configuration';

@Injectable({
  providedIn: 'root'
})
export class AppInitService extends AppConfiguration {

  
  constructor(private httpClient: HttpClient) {
    super()
  }

  async load(): Promise<any> {
    const data = await this.httpClient.get<AppConfiguration>(`app.config.json`).toPromise();
    this.app_name = data.app_name,
    this.api_end_point = data.api_end_point,
    this.copy_right_info = data.copy_right_info,
    this.development_company = data.development_company;
  }

}
