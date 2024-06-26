import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { EmployeesComponent } from './content/employees/employees.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { ProjectsComponent } from './content/projects/projects.component';
import { CustomersComponent } from './content/customers/customers.component';
import { HomeComponent } from './home/home.component';
import { PhishingComponent } from './phishing/phishing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { BarChartComponent } from './template/visuals/bar-chart/bar-chart.component';
import { GantChartComponent } from './template/visuals/gant-chart/gant-chart.component';
import { CvScannerComponent } from './content/cv-scanner/cv-scanner.component';
import { SkillsBannerComponent } from './content/cv-scanner/skills-banner/skills-banner.component';
import { NgChartsModule } from 'ng2-charts';
import { TopRelevantComponent } from './template/visuals/top-relevant/top-relevant.component';
import {PieChartComponent} from "./template/visuals/pie-chart/pie-chart.component";
import {AdminComponent} from "./admin/admin.component";
import {LoginComponent} from "./login/login.component";
import {AppHttpInterceptor} from "./interceptors/app-http.interceptor";
import { AddProjectComponent } from './content/add-project/add-project.component';
import { ChatbotComponent } from './content/chatbot/chatbot.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    EmployeesComponent,
    ProjectsComponent,
    CustomersComponent,
    HomeComponent,
    PhishingComponent,
    DashboardComponent,
    BarChartComponent,
    GantChartComponent,
    CvScannerComponent,
    SkillsBannerComponent,
    TopRelevantComponent,
    PieChartComponent,
    AdminComponent,
    LoginComponent,
    AddProjectComponent,
    ChatbotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgChartsModule,
  ],
  providers: [
    {provide :HTTP_INTERCEPTORS,useClass : AppHttpInterceptor,multi:true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
