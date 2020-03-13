/* date 2020-03-13 10:40:30
 * @author Sebastian Larrieu
 * @email slarrieu@team.neocomplexx.com
 * @create date 2020-01-17 16:31:32
 */
import { Pipe, PipeTransform, Injectable } from '@angular/core';

/**
 * Filter object array from property
 */
@Pipe({
    name: 'accent'
})
@Injectable()
export class AccentPipe implements PipeTransform {

    transform(value: string, replace: boolean) {
        if (value) {
            if (replace) {
                let val = value.replace(/1a/g, 'á');
                val = value.replace(/1e/g, 'é');
                val = value.replace(/1i/g, 'í');
                val = value.replace(/1o/g, 'ó');
                val = value.replace(/1u/g, 'ú');
                return val;
            } else {
                return value.replace('1', '');
            }
        }
    }
}
