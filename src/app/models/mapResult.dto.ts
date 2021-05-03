export interface IMapResultDto {
  id: number;
  name: string;
  info: string;
  gallery: string;
  video: string;
  type: number;
  geometry: IMapResultGeometryDto;
}

export interface IMapResultGeometryDto {
  type: string;
  coordinates: number[];
}
