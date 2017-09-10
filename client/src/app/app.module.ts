import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';
import { environment } from '../environments/environment';
// app
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// core 부분
import {CoreModule} from './core/core.module';
import {PagesModule} from './pages/pages.module';
import {SkillService} from './shared/skill/skill.service';
import {StyleManagerService} from './shared/style-manager/style-manager.service';
import {ThemeService} from './shared/theme/theme.service';
import {I18nModule} from './shared/i18n/i18n.module';
import {ProjectService} from './shared/project/project.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    PagesModule,
    BrowserAnimationsModule,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    I18nModule,
  ],
  providers: [
    SkillService,
    ProjectService,
    ThemeService,
    StyleManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
