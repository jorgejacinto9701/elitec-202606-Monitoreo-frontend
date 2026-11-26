import { Datacatalogo } from "./datacatalogo";
import { Pais } from "./pais";

export interface Autor {

    idAutor : number;
    nombres : string;
    apellidos : string;
    fechaNacimiento : Date;
    telefono : string;
    estado : number;
    pais : Pais;
    grado : Datacatalogo;
}
