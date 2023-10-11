import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService  {

  constructor(private http:HttpClient ) {}

commonGet(url:any)
{
 return this.http.get(url)
}

commonPost(url:any,data:any,headers:any)
{
return this.http.post(url,data,headers)
}

commonPut(url:any,data:any)
{
  return this.http.put(url,data)
}

commonDelete(url:any)
{
  return this.http.delete(url)
}
}

