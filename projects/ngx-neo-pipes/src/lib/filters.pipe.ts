import { Pipe, PipeTransform, Injectable } from '@angular/core';

/**
 * Filter object array from property
 */
@Pipe({
    name: 'functionFilter'
})
@Injectable()
export class FuncFilterPipe implements PipeTransform {
    transform(items: any[], callback: (value: any) => boolean): any[] {

        if (!items || !callback) {
            return [];
        }

        return items.filter(callback);
    }
}

/**
 * Filter object array from property
 */
@Pipe({
    name: 'textFilter'
})
@Injectable()
export class TextPipe implements PipeTransform {
    /**
     * @author jcangelosi
     * Filtra el arreglo items comparando el valor de su campo field (de tipo string) con el valor de value
     * idea general : items.field == value
     * NO FUNCIONA CON NUMEROS
     */
    transform(items: any[], field: string, value: string): any[] {
        if (!items) {
            return [];
        }
        if (!field || !value) {
            return items;
        }
        return items.filter(singleItem => singleItem[field].toLowerCase().includes(value.toLowerCase()));
    }
}
/**
 * Array filter with string value with 2 indirection level
 */
@Pipe({
    name: 'textFilter2Level'
})
@Injectable()
export class TextPipeTwoLevel implements PipeTransform {
    /**
     * @author jcangelosi
     * Filtra el arreglo items comparando el valor de su campo secondfield con el valor de value
     * idea general : items.field.secondField == value
     * NO FUNCIONA CON NUMEROS
     */
    transform(items: any[], firstField: string, secondField: string, value: string): any[] {

        if (!items) {
            return [];
        }
        if (!firstField || !secondField || !value) {
            return items;
        }
        return items.filter(singleItem => (singleItem[firstField][secondField]).toLowerCase().includes(value.toLowerCase()));
    }
}

@Pipe({
    name: 'numberFilter'
})
@Injectable()
export class NumberPipe implements PipeTransform {
    /**
    * @author jcangelosi
    * Filtra el arreglo items comparando el valor de su campo field (de tipo number) con el valor de value
    * idea general : items.field == value
    * SOLO FUNCIONA CON NUMEROS
    */
    transform(items: any[], field: string, value: number): any[] {
        if (!items) {
            return [];
        }
        if (!field || !value) {
            return items;
        }
        return items.filter(singleItem => singleItem[field].toString().includes(value.toString()));
    }
}

@Pipe({
    name: 'toStringFilter'
})
@Injectable()
export class ToStringPipe implements PipeTransform {
    transform(items: any[], value: string): any[] {
        if (!items) {
            return [];
        }
        if (!value) {
            return items;
        }
        return items.filter(singleItem => singleItem.toString().toLowerCase().includes(value.toLowerCase()));
    }
}

@Pipe({
    name: 'numberFilter2Level'
})
@Injectable()
export class NumberPipeTwoLevel implements PipeTransform {
    /**
     * @author jcangelosi
     * Filtra el arreglo items comparando el valor de su campo secondfield con el valor de value
     * idea general : items.field.secondField == value
     * SOLO FUNCIONA CON NUMEROS
     */
    transform(items: any[], firstField: string, secondField: string, value: number): any[] {
        if (!items) {
            return [];
        }
        if (!firstField || !secondField || !value) {
            return items;
        }
        return items.filter(singleItem => singleItem[firstField][secondField].toString().includes(value.toString()));
    }
}

@Pipe({
    name: 'rangeFilter'
})
@Injectable()
export class RangePipe implements PipeTransform {
    /**
     * @author jcangelosi
     *  Filtrara el arreglo en base a un rango de valores numericos dentro de un string
     *  Acepta lo siguiente: <numero, numero1-numero2 (>=numero1 y <numero2), >=numero2
     */
    transform(items: any[], field: string, value: string): any[] {
        if (!items) {
            return [];
        }
        if (!field || !value) {
            return items;
        }
        if (value.toString().includes('<')) { // Caso 1: es menor
            const numeros = value.split('<');
            const numero: number = +numeros[1];
            return items.filter(singleItem => singleItem[field] < numero);
        }
        if (value.toString().includes('-')) { // Caso 2: Rango
            const numeros = value.split('-');
            const numero1: number = + numeros[0];
            const numero2: number = + numeros[1];
            return items.filter(singleItem => singleItem[field] >= numero1 && singleItem[field] < numero2);
        }
        if (value.toString().includes('>=')) { // Caso 3: Mayor o Igual
            const numeros = value.split('>=');
            const numero: number = + numeros[1];
            return items.filter(singleItem => singleItem[field] >= numero);
        }
        // Caso 4, item vacio
        return items;
    }
}

@Pipe({
    name: 'rangeFilter2Level'
})
@Injectable()
export class RangePipeTwoLevel implements PipeTransform {
    /**
     * @author jcangelosi
     * Filtra el arreglo items comparando el valor de su campo secondfield en base a un rango de valores numericos dentro de un string
     *  Acepta lo siguiente: <numero, numero1-numero2 (>=numero1 y <numero2), >=numero2
     */
    transform(items: any[], firstField: string, secondField: string, value: string): any[] {
        if (!items) {
            return [];
        }
        if (!firstField || !secondField || !value) {
            return items;
        }
        if (value.toString().includes('<')) { // Caso 1: es menor
            const numeros = value.split('<');
            const numero: number = +numeros[1];
            return items.filter(singleItem => singleItem[firstField][secondField] < numero);
        }
        if (value.toString().includes('-')) { // Caso 2: Rango
            const numeros = value.split('-');
            const numero1: number = + numeros[0];
            const numero2: number = + numeros[1];
            return items.filter(singleItem => singleItem[firstField][secondField] >= numero1 &&
                singleItem[firstField][secondField] < numero2);
        }
        if (value.toString().includes('>')) { // Caso 3: Mayor o Igual
            const numeros = value.split('>');
            const numero: number = + numeros[1];
            return items.filter(singleItem => singleItem[firstField][secondField] >= numero);
        }
        // Caso 4, item vacio
        return items;
    }
}

@Pipe({
    name: 'dateFilter'
})
@Injectable()
/**
 * Filtrara arreglos mediante un los valores de un campo de tipo fecha
 */
export class DatePipe implements PipeTransform {
    /**
     * @author jcangelosi
     * Filtrara el arreglo items por una fecha representada por un string
     */
    transform(items: string[], field: string, value: string): any[] {
        if (!items) {
            return [];
        }
        if (!field || !value) {
            return items;
        }
        // caso contrario la fecha es valida
        const valores: String[] = value.split('-');
        const fecha: String = valores[2] + '/' + valores[1] + '/' + valores[0];
        return items.filter(singleItem => singleItem[field].toLowerCase().includes(fecha));
    }
}
/**
 * Pipe que se utiliza para separar los string de los nombres de los enumerables por palabra, de manera que queden mas agradables
 * visualmente.
 */
@Pipe({ name: 'beautify' })
export class BeautifyPipe implements PipeTransform {
    transform(text: string) {
        if (text) {
            const palabras: string[] = text.split(/(?=[A-Z])/);
            let palabraAretornar = '';
            for (const palabra of palabras) {
                palabraAretornar = palabraAretornar.concat(' ', palabra);
            }
            return palabraAretornar;
        }
        return text;
    }
}
