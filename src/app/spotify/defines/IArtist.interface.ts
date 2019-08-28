import { IAlbum } from "./IAlbum.interface.1";

export interface IArtist{
    id: number;
    name: string;
    gennes: any;
    albums: IAlbum[];
}