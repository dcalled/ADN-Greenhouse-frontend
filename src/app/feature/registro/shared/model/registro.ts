export class Registro {
    id: number;
    nombre: string;
    valorBase: number;
    tiempoVegetacion: number;
    fechaIngreso: Date;
    fechaGerminacion: Date;
    fechaPlantula: Date;
    fechaMacollamiento: Date;
    fechaReproduccion: Date;
    estado: string;

    constructor(id: number, nombre: string,
                valorBase: number, tiempoVegetacion: number,
                fechaIngreso: Date, fechaGerminacion: Date,
                fechaPlantula: Date, fechaMacollamiento: Date,
                fechaReproduccion: Date) {
        this.id = id;
        this.nombre = nombre;
        this.valorBase = valorBase;
        this.tiempoVegetacion = tiempoVegetacion;
        this.fechaIngreso = fechaIngreso;
        this.fechaGerminacion = fechaGerminacion;
        this.fechaPlantula = fechaPlantula;
        this.fechaMacollamiento = fechaMacollamiento;
        this.fechaReproduccion = fechaReproduccion;
    }
}
