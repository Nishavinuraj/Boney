import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard, SharedPipesModule } from './shared';
import { ApiService } from './shared/services/api.service';
import { ExcelService } from 'src/app/shared/services/excel.service';
import { ToastrModule } from 'ngx-toastr';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateFRParserFormatter } from './shared/providers/NgbDateParser';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { TokenInterceptor } from './shared/services/token.interceptor';
import { EventsService } from './shared/services/events.service';
import { MaintenanceService } from './shared/services/maintenance.service';
import { BrowserXhr } from '@angular/http';
import { CustExtBrowserXhr } from './cust-ext-browser-xhr';
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule,
        SharedPipesModule,
        ToastrModule.forRoot(),
        InfiniteScrollModule,
        PDFExportModule,
        NgSelectModule
    ],
    declarations: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },
        {provide: BrowserXhr, useClass:CustExtBrowserXhr},
        AuthGuard,
        AuthGuardService,
        ApiService,
        ExcelService,
        EventsService,
        { provide: NgbDateParserFormatter, useClass: NgbDateFRParserFormatter },
        MaintenanceService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
