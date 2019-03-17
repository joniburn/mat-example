import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppBarService {

  public fixed = true;
  public short = false;
  public dense = false;
  public prominent = false;

}
