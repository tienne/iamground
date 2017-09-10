// core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from '../common/material-components.module';
import { TranslateModule } from '@ngx-translate/core';
// app
import { PagesRoutingModule } from './pages-routing.module';
// pages component
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { SkillComponent } from './profile/skill/skill.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {UiModule} from '../ui/ui.module';
import {I18nModule} from '../shared/i18n/i18n.module';

@NgModule({
  imports: [
    CommonModule,
    I18nModule,
    MaterialComponentsModule,
    FlexLayoutModule,
    UiModule
    // PagesRoutingModule
  ],
  declarations: [
    ProfileComponent,
    ProjectsComponent,
    ContactComponent,
    SkillComponent,
  ]
})
export class PagesModule { }
