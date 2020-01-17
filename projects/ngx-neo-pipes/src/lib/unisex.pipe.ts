/**
 * @author Sebastian Larrieu
 * @email slarrieu@team.neocomplexx.com
 * @create date 2020-01-17 16:31:32
 */
import { Pipe, PipeTransform, Injectable } from '@angular/core';

/**
 * Filter object array from property
 */
@Pipe({
    name: 'unisex'
})
@Injectable()
export class UnisexPipe implements PipeTransform {

    transform(value: string, last: string = 'x') {
        if (value) {
            if (value.slice(-1) === last) {
                return `${value.slice(0, -1)}o/a`;
            }
            return value;
        } else {
            throw new Error('Undefined value in unisex pipe');
        }
    }
}
