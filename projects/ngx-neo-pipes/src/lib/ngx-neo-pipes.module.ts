import { NgModule, ModuleWithProviders } from '@angular/core';
import {
  NumberPipe, TextPipe, TextPipeTwoLevel, NumberPipeTwoLevel,
  BeautifyPipe, DatePipe, RangePipe, RangePipeTwoLevel, ToStringPipe
} from './filters.pipe';
import { PadLeftPipe } from './number.pipe';

@NgModule({
  declarations: [NumberPipe, TextPipe, TextPipeTwoLevel, NumberPipeTwoLevel, ToStringPipe,
    BeautifyPipe, DatePipe, RangePipe, RangePipeTwoLevel, PadLeftPipe],
  exports: [NumberPipe, TextPipe, TextPipeTwoLevel, NumberPipeTwoLevel, ToStringPipe,
    BeautifyPipe, DatePipe, RangePipe, RangePipeTwoLevel, PadLeftPipe],
})
export class NgxNeoPipesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxNeoPipesModule,
    };
  }
}
