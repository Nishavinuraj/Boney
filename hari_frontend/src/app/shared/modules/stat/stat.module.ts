import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatComponent } from './stat.component';
import { SharedPipesModule } from '../../pipes/shared-pipes.module';

@NgModule({
    imports: [CommonModule, SharedPipesModule],
    declarations: [StatComponent],
    exports: [StatComponent]
})
export class StatModule {}
