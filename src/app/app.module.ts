import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { HeaderComponent } from './common/components/header/header.component';
import { MobileNavComponent } from './common/components/mobile-nav/mobile-nav.component';
import { ProductItemComponent } from './features/products/product-list/product-item/product-item.component';
import { NotFoundComponent } from './common/components/not-found/not-found.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { SignInModalComponent } from './common/components/sign-in-modal/sign-in-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HeaderComponent,
    MobileNavComponent,
    ProductItemComponent,
    NotFoundComponent,
    FooterComponent,
    SignInModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
