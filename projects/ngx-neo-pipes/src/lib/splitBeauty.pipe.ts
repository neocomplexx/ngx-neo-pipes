import { PipeTransform, Pipe } from "@angular/core";

/**
 * Pipe que se utiliza para separar los string de los nombres de los enumerables por palabra, de manera que queden mas agradables
 * visualmente.
 * Se le pasa por parámetro el string separador, el cual no se visualizará en pantalla.
 */
@Pipe({ name: 'splitBeauty' })
export class SplitBeautyPipe implements PipeTransform {
    
    transform(text: string, args: string): string {
        if (text && args) {
            const palabras: string[] = text.split(args);
            let palabraAretornar = '';
            for (const palabra of palabras) {
                palabraAretornar = palabraAretornar.concat(' ', palabra);
            }
            return palabraAretornar;
        }
        return text;
    }
}
