import { Datacatalogo } from "./datacatalogo";
import { Pais } from "./pais";

export interface Revista {

    idRevista: number;
    nombre: string;
    fechaCreacion: Date;
    estado: number;
    pais: Pais;
    tipoRevista:Datacatalogo;
}
