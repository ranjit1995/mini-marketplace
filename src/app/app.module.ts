
import { AppRoutingModule } from './app-routing.module';
import { FavouriteProductsComponent } from './favourite-products/favourite-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { FilterPipeModule } from 'ngx-filter-pipe';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import {  MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonToggleModule,
  MatChipsModule,MatDatepickerModule,MatDialogModule,MatExpansionModule,MatListModule,
  MatNativeDateModule, MatProgressBarModule,MatProgressSpinnerModule, MatRippleModule, 
  MatSidenavModule,MatSliderModule,MatSlideToggleModule,MatSnackBarModule, MatStepperModule,  
  MatTabsModule,MatToolbarModule,MatTooltipModule,MatTreeModule,MatTableModule,
  MatPaginatorModule,MatSortModule,MatGridListModule, MatCardModule, MatMenuModule, 
 MatIconModule, MatButtonModule, DateAdapter,
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import {MatCheckboxModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { LoginComponent } from './auth/login/login.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { MainComponent } from './main/main.component';
//import { AppRoutingModule } from './app.routing';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { BuyerComponent } from './buyer/buyer.component';
import { MyFavouriteComponent } from './buyer/my-favourite/my-favourite.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { StorageServiceModule} from 'angular-webstorage-service';
import { SellerComponent } from './seller/seller.component';
import { MyProductsComponent } from './seller/my-products/my-products.component';
const appRoutes: Routes = [
    {
    path: '', redirectTo:'/home', pathMatch:'full'
    },  
    { path:'home', component: HomeComponent },
    {
    path:'auth',
    component:AuthComponent,
    }, 
    {
    path:"registration",
    component:RegistrationComponent,  
    },
    {
    path:"add-product",
    component:AddProductComponent,  
    },
    
    {
    component:ViewProductsComponent,
    path:'view-products',
    },
    
    {
    path:'view-product',
    component:ViewProductComponent,
    },
    {
        path:"edit-product",
        component:EditProductComponent,  
    },
    {
        path:"auth/login",
        component:LoginComponent,  
    },
    {
        path:"favourite-products",
        component:FavouriteProductsComponent,  
    },
    {
        path:"footer",
        component:FooterComponent,  
    },
    {
        path:"header",
        component:HeaderComponent,  
    },
    {
        path:"search-box",
        component:SearchBoxComponent,  
    },
    {
        path:"main",
        component:MainComponent,  
    },
    {
        path:"buyer",
        component:BuyerComponent,  
    },
    {
        path:"buyer/my-favourite",
        component:MyFavouriteComponent,  
    },
    {
        path:"seller/my-products",
        component:MyProductsComponent,  
    },{
        path:"seller",
        component:SellerComponent,  
    },
    {
        path:"delete-product",
        component:DeleteProductComponent,  
    },

];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    
    HomeComponent,
    AddProductComponent,
    HeaderComponent,
    FooterComponent,
    ViewProductsComponent,
    EditProductComponent,
    FavouriteProductsComponent,
    RegistrationComponent,
    
    DeleteProductComponent,
    
    SearchBoxComponent,
    
    LoginComponent,
    
    SnackbarComponent,
    
    MainComponent,
    
    BuyerComponent,
    
    MyFavouriteComponent,
    
    ViewProductComponent,
    
    SellerComponent,
    
    MyProductsComponent,
   
  ],
  imports: [
    LayoutModule,
    MatSelectModule,
    FormsModule,StorageServiceModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    HttpModule,
    FilterPipeModule,
    ShowHidePasswordModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatRadioModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonToggleModule,
    MatChipsModule,MatDatepickerModule,MatDialogModule,MatExpansionModule,MatListModule,
    MatNativeDateModule, MatProgressBarModule,MatProgressSpinnerModule, MatRippleModule, 
    MatSidenavModule,MatSliderModule,MatSlideToggleModule,MatSnackBarModule, MatStepperModule,  
    MatTabsModule,MatToolbarModule,MatTooltipModule,MatTreeModule,
    MatInputModule,
    MatTableModule, MatPaginatorModule, MatSortModule,
     MatGridListModule, MatCardModule,
     MatMenuModule, MatIconModule,
     MatButtonModule, 
    BrowserModule,
    //AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [CookieService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private dateAdapter:DateAdapter<Date>) {
		dateAdapter.setLocale('en-us'); // MM/DD/YYYY
	}
}