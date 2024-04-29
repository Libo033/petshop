export interface IAlimentoBalanceado {
  _id: string;
  marca: string;
  descripcion: string;
  cantidadKg: number;
  oferta: number | false;
  precio: number;
  animal: string;
  longevidad: string;
  detalle: string;
  varios: string[];
  stock: number;
}

export interface IOtros {
  _id: string;
  marca: string;
  descripcion: string;
  oferta: number | false;
  precio: number;
  detalle: string;
  varios: string[];
  stock: number;
}
