import { NgModule, ModuleWithProviders } from '@angular/core';
import {
  NumberPipe, TextPipe, TextPipeTwoLevel, NumberPipeTwoLevel,
  BeautifyPipe, DatePipe, RangePipe, RangePipeTwoLevel
} from './filters.pipe';

@NgModule({
  declarations: [NumberPipe, TextPipe, TextPipeTwoLevel, NumberPipeTwoLevel,
    BeautifyPipe, DatePipe, RangePipe, RangePipeTwoLevel],
  exports: [NumberPipe, TextPipe, TextPipeTwoLevel, NumberPipeTwoLevel,
    BeautifyPipe, DatePipe, RangePipe, RangePipeTwoLevel],
})
export class NgxNeoPipesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxNeoPipesModule,
    };
  }
}
