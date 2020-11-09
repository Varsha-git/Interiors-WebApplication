import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuListComponent } from './menu-list/menu-list.component';
import { HeaderComponent } from './header/header.component';
import { AboutusComponent } from './menu-list/aboutus/aboutus.component';
import { ContactusComponent } from './menu-list/contactus/contactus.component';
import { ProjectsComponent } from './menu-list/projects/projects.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { ShopComponent } from './shop/shop.component';
import { PaintingsComponent } from './shop/paintings/paintings.component';
import { CurtainsComponent } from './shop/curtains/curtains.component';
import { LampsComponent } from './shop/lamps/lamps.component';
import { ClocksComponent } from './shop/clocks/clocks.component';
import { VaseComponent } from './shop/vase/vase.component';
import { CarpetsComponent } from './shop/carpets/carpets.component';
import { WallprintComponent } from './shop/wallprint/wallprint.component';
import { BedroomComponent } from './bedroom/bedroom.component';
import { CustomtablesComponent } from './customtables/customtables.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { LightingComponent } from './lighting/lighting.component';
import { LivingroomComponent } from './livingroom/livingroom.component';
import { TogetherSpaceComponent } from './together-space/together-space.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { AboutComponent } from './menu-list/aboutus/about/about.component';
import { KeypeopleComponent } from './menu-list/aboutus/keypeople/keypeople.component';
import { ManifestoComponent } from './menu-list/aboutus/manifesto/manifesto.component';
import { ServicesComponent } from './menu-list/aboutus/services/services.component';
import { CartComponent } from './cart/cart.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'menu',
    children: [
      { path: '', component: MenuListComponent },
      { path: 'home', component: HeaderComponent },
      {
        path: 'aboutus',
        component: AboutusComponent,
      },
      { path: 'contactus', component: ContactusComponent },
      { path: 'projects', component: ProjectsComponent },
    ],
  },
  { path: 'menu/aboutus/about', component: AboutComponent },
  { path: 'menu/aboutus/keypeople', component: KeypeopleComponent },
  { path: 'menu/aboutus/manifesto', component: ManifestoComponent },
  { path: 'menu/aboutus/services', component: ServicesComponent },
  { path: 'bedroom', component: BedroomComponent },
  { path: 'customtable', component: CustomtablesComponent },
  { path: 'kitchen', component: KitchenComponent },
  { path: 'furniture', component: FurnitureComponent },
  { path: 'lighting', component: LightingComponent },
  { path: 'livingroom', component: LivingroomComponent },
  { path: 'together-space', component: TogetherSpaceComponent },
  { path: 'workspace', component: WorkspaceComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home/project-1', component: BedroomComponent },
  { path: 'home/project-2', component: LivingroomComponent },
  { path: 'home/project-3', component: KitchenComponent },
  { path: 'home/project-4', component: FurnitureComponent },
  { path: 'home/project-5', component: TogetherSpaceComponent },
  { path: 'home/project-6', component: LightingComponent },
  { path: 'home/project-7', component: WorkspaceComponent },
  { path: 'home/project-8', component: CustomtablesComponent },
  { path: 'home', component: HeaderComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'shop', component: ProductsPageComponent },
  { path: 'cart', component: CartComponent },
  { path: 'products', component: ProductsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
