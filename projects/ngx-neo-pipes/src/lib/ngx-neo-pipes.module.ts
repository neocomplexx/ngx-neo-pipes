import { NgModule, ModuleWithProviders } from '@angular/core';
import {
  NumberPipe, TextPipe, TextPipeTwoLevel, NumberPipeTwoLevel,
  BeautifyPipe, DatePipe, RangePipe, RangePipeTwoLevel, ToStringPipe, FuncFilterPipe
} from './filters.pipe';
import { PadLeftPipe } from './number.pipe';
import { SafeStringPipe } from './safe-string.pipe';
import { SplitBeautyPipe } from './splitBeauty.pipe';

@NgModule({
  declarations: [NumberPipe, TextPipe, TextPipeTwoLevel, NumberPipeTwoLevel, ToStringPipe, FuncFilterPipe,
    BeautifyPipe, DatePipe, RangePipe, RangePipeTwoLevel, PadLeftPipe, SafeStringPipe, SplitBeautyPipe],
  exports: [NumberPipe, TextPipe, TextPipeTwoLevel, NumberPipeTwoLevel, ToStringPipe, FuncFilterPipe,
    BeautifyPipe, DatePipe, RangePipe, RangePipeTwoLevel, PadLeftPipe, SafeStringPipe, SplitBeautyPipe],
})
export class NgxNeoPipesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxNeoPipesModule,
    };
  }
}
