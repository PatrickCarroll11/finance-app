import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import{MatListModule} from  '@angular/material/list';
import{MatIconModule} from  '@angular/material/icon';
import{MatToolbarModule} from  '@angular/material/toolbar';
import{MatMenuModule} from  '@angular/material/menu';
import{MatButtonModule} from  '@angular/material/button';
import{MatRippleModule} from  '@angular/material/core';
import{MatTableModule} from  '@angular/material/table';
import{MatCardModule} from  '@angular/material/card';
import{MatPaginatorModule} from  '@angular/material/paginator';
import{MatInputModule} from  '@angular/material/input';
import{MatFormFieldModule} from  '@angular/material/form-field';
import{FormsModule} from  '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatRippleModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
