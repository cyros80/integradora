////////HTML Personajes///////

export interface Personas {
  datos: Datos[];
  datos2: Datos[];
}

export interface Datos {
  descripcion: string;
  genero: string;
  id: number;
  imagen: string;
  nombre: string;
  planeta: string;
  raza: string;
}

////////Detalle Enemigos///////

export interface Datos2 {
  descripcion?: string;
  genero?: string;
  id?: number;
  imagen?: string;
  nombre?: string;
  planeta?: string;
  raza?: string;
}