import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { FourZeroFourComponent } from './pages/four-zero-four/four-zero-four.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { SpecificArticleComponent } from './pages/specific-article/specific-article.component';
import { SpecificReportComponent } from './pages/specific-report/specific-report.component';
import { ArticleComponent } from './forms/article/article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CounselorComponent } from './pages/counselor/counselor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ReportsComponent,
    FourZeroFourComponent,
    ArticlesComponent,
    SpecificArticleComponent,
    SpecificReportComponent,
    ArticleComponent,
    CounselorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
