/**
 * @author Sebastian Larrieu
 * @email slarrieu@team.neocomplexx.com
 * @create date 2019-02-01 15:12:58
 */
import { Pipe, PipeTransform, Injectable } from '@angular/core';

/**
 * Filter object array from property
 */
@Pipe({
    name: 'safeString'
})
@Injectable()
export class SafeStringPipe implements PipeTransform {

    transform(value: any) {
        if (value) {
            return value;
        } else {
            return '-';
        }
    }
}
