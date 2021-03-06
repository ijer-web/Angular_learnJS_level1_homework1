import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SocialInfoComponent } from './social-info/social-info.component';
import { WeatherComponent } from './weather/weather.component';
import { RecreationComponent } from './list/recreation/recreation.component';
import { RecreationsFilterPipe } from './common/pipe/recreations-filter.pipe';
import { RecreationService } from './common/services/recreation-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SocialInfoComponent,
    WeatherComponent,
    RecreationComponent,
    RecreationsFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [RecreationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
