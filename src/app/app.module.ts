import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
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
import { CartComponent } from './cart/cart.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { MaterialsModule } from './materials/materials.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleLoginProvider,
} from 'angularx-social-login';
import { LoginComponent } from './login/login.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

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
    CartComponent,
    ProductsPageComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    HttpClientModule,
    SocialLoginModule,
    FormsModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '387729016267-itr2dhufemei45qpqha1f74i6u5b7jad.apps.googleusercontent.com'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
//387729016267-tktv8dgmv18f3o7te90ok9s038fucf26.apps.googleusercontent.com
//387729016267-4vrr3fvcu302fsqv0l81907ousdps7nl.apps.googleusercontent.com old
