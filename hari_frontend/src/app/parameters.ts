import { environment } from '../environments/environment';

export const baseURL = environment.api_endpoint;
export const itemUnits = [
  'Nos','Kgs','Ltr','Set','Roll'

]
// get ApiURL
export function GetApiurl(path: string) {
  return baseURL + path;

}