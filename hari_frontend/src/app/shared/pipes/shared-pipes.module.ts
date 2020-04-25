import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipePipe } from './currency-pipe.pipe';
import { HasPermissionPipe } from './has-permission.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [CurrencyPipePipe, HasPermissionPipe],
    exports: [CurrencyPipePipe, HasPermissionPipe]
})
export class SharedPipesModule { }
