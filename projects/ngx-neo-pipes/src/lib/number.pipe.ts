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
    name: 'padLeft'
})
@Injectable()
export class PadLeftPipe implements PipeTransform {

    transform(value: number | string, size: number, pad: string) {
        let s = String(value);
        while (s.length < (size || 2)) { s = pad + s; }
        return s;
    }
}
