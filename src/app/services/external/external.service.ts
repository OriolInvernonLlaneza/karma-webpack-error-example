import { Injectable } from "@angular/core";
import {
  external
} from "../../../util/external";

@Injectable({
  providedIn: "root",
})
export class ExternalService {
  contact = false;

  constructor() { }

  getExternalInfo() {
    return external();
  }
}
