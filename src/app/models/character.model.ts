import { LocationModel } from "./location.model";
import { OriginModel } from "./origin.model";

export class CharacterModel {
  id: number = 0;
  name: string = '';
  status: string = '';
  species: string = '';
  type: string = '';
  gender: string = '';
  origin: OriginModel | undefined;
  location: LocationModel | undefined;
  image: string = '';
  episode: string[] = [];
  url: string = '';
  created: string = '';
}
