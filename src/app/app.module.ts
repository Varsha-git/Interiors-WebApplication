import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuListComponent } from './menu-list/menu-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutusComponent } from './menu-list/aboutus/aboutus.component';
import { ContactusComponent } from './menu-list/contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';

import { ShopComponent } from './shop/shop.component';
import { PaintingsComponent } from './shop/paintings/paintings.component';
import { CarpetsComponent } from './shop/carpets/carpets.component';
import { CurtainsComponent } from './shop/curtains/curtains.component';
import { VaseComponent } from './shop/vase/vase.component';
import { LampsComponent } from './shop/lamps/lamps.component';
import { ClocksComponent } from './shop/clocks/clocks.component';
import { WallprintComponent } from './shop/wallprint/wallprint.component';
import { BedroomComponent } from './bedroom/bedroom.component';
import { LivingroomComponent } from './livingroom/livingroom.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { TogetherSpaceComponent } from './together-space/together-space.component';
import { LightingComponent } from './lighting/lighting.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { CustomtablesComponent } from './customtables/customtables.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { AboutComponent } from './menu-list/aboutus/about/about.component';
import { KeypeopleComponent } from './menu-list/aboutus/keypeople/keypeople.component';
import { ServicesComponent } from './menu-list/aboutus/services/services.component';
import { ManifestoComponent } from './menu-list/aboutus/manifesto/manifesto.component';
import { AbcComponent } from './abc/abc.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainNavComponent,
    MenuListComponent,
    CategoriesComponent,
    AboutusComponent,
    ContactusComponent,
    FooterComponent,
    FurnitureComponent,
    ShopComponent,
    PaintingsComponent,
    CarpetsComponent,
    CurtainsComponent,
    VaseComponent,
    LampsComponent,
    ClocksComponent,
    WallprintComponent,
    BedroomComponent,
    LivingroomComponent,
    KitchenComponent,
    TogetherSpaceComponent,
    LightingComponent,
    WorkspaceComponent,
    CustomtablesComponent,
    AboutComponent,
    KeypeopleComponent,
    ServicesComponent,
    ManifestoComponent,
    AbcComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
