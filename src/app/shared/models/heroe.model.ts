export class Heroe {
    //Atributos
    public nombre: string;
    public poder: number;
    public honor: number;
    public ataque: number;
    public defensa: number;
    public vida: number;
    public imagen: string;

    constructor (nombre:string, poder:number, honor:number, ataque:number, defensa:number, vida:number, imagen:string) {
        this.nombre = nombre;
        this.poder = poder;
        this.honor = honor;
        this.ataque = ataque;
        this.defensa = defensa;
        this.vida = vida;
        this.imagen = imagen;
    }



}