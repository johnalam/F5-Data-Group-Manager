import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap, timeout } from 'rxjs/operators';


const endpoint = '/mgmt/tm/';
const partition = '~Common~';
const elmnt = 'ltm/data-group/internal/';
const cliscript = 'cli/script';
var s1 = "YWRtaW46YWRtaW4=";


//  bigip1  'Authorization': 'Basic YWRtaW46Ym13MjAwMSE=',

//     YWRtaW46YWRtaW4=',

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    //'Authorization': 'Basic '+s1,
    'target': ''
  })
};

@Injectable({
  providedIn: 'root'
})


export class RestService {

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }



  getGroupsFromDevice(elmnt, dest, s1): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'target': dest
      })
    };
    
    return this.http.get(endpoint + elmnt , httpOptions).pipe(
      map(this.extractData));
  }

  getgrpFromURL(loc, url): Observable<any> {
    const URLOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'target': url
      })
    };

    return this.http.get(loc , URLOptions).pipe(
      map(this.extractData));
  }

  getGrpFromDevice(id, dest, s1): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'target': dest
      })
    };

    return this.http.get(endpoint + elmnt + partition + id, httpOptions)
    .pipe(
      timeout(10000),
      map(this.extractData),
      catchError((err: any) => {
        //console.log(err);
        return throwError(err);
        })
      );
  }

  addDataGroup (group, dest , s1): Observable<any> {
    
    let datagroup = {"name": group.name, "partition": "Common", "type": group.type, "description": group.desc };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //'Authorization': 'Basic '+s1,
        'target': dest
      })
    };

    console.log(endpoint + 'ltm/data-group/' +'internal/', JSON.stringify(datagroup), httpOptions);

    return this.http.post<any>(endpoint + 'ltm/data-group/' + 'internal/', JSON.stringify(datagroup), httpOptions).pipe(
      tap((group) => console.log(`added group w/ id=${JSON.stringify(group.name)}`)),
      catchError(this.handleError<any>('addProduct'))
    );
  }

  addGroup (group, dest, s1): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //'Authorization': 'Basic '+s1,
        'target': dest
      })
    };

    console.log('** Grp:', group);
    let datagroup = {"name": group.name, "partition": "Common", "type": group.type };

    console.log(endpoint + 'data-group/' +'internal/', JSON.stringify(datagroup), httpOptions);

    return this.http.post<any>(endpoint + 'data-group/' + 'internal/', JSON.stringify(datagroup), httpOptions).pipe(
      tap((group) => console.log(`added group w/ id=${JSON.stringify(group.name)}`)),
      catchError(this.handleError<any>('addProduct'))
    );
  }


  
  updateProduct (id, product): Observable<any> {
    return this.http.put(endpoint + 'products/' + id, JSON.stringify(product), httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }
  

  deleteRecord (groupname, recname, dest, s1): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //'Authorization': 'Basic '+s1,
        'target': dest
      })
    };    
    let record = { "command":"run" , "name":"/Common/add-rec", "utilCmdArgs": "delete-record " + groupname + " \'\{ "+recname+" \}\'" };
    return this.http.post(endpoint + cliscript , JSON.stringify(record) , httpOptions).pipe(
      tap(_ => console.log(`deleted record id=${recname}`)),
      catchError(this.handleError<any>('deleteProduct'))
    );
  }

  recordOps (operation, groupname, record, dest , s1): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //'Authorization': 'Basic '+s1,
        'target': dest
      })
    };

    let rec = {};
    if ( operation == 'replace-all') {
      rec = { "command":"run" , "name":"/Common/add-rec", "utilCmdArgs": "replace-all " + groupname + " \'" + record + "\'"}
    } else {
      let oper = (operation == 'ADD') ? "add" : "edit";
      rec = { "command":"run" , "name":"/Common/add-rec", "utilCmdArgs": oper +"-record " + groupname + " \'\{"+ record.name + "{ data "+ record.data +"\}\}\'" };
    }      
    return this.http.post(endpoint + cliscript , JSON.stringify(rec) , httpOptions).pipe(
      tap(_ => {
        console.log(operation );

      }),
      catchError(this.handleError<any>('Record '+operation +' fail.'))
    );
  }


  patchDG (id, records, dest, s1): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'target': dest
      })
    };

    let rec= '{ "records": '+ JSON.stringify(records) + '}';

    return this.http.patch(endpoint + elmnt + partition + id, rec , httpOptions)
    .pipe(
      timeout(10000),
      map(this.extractData),
      tap(_ => {
        console.log('DG Patch success to '+id+' on'+dest );

      }),
      catchError((err: any) => {
        //console.log(err);
        return throwError(err);
        })
      );
  }


  exportToAS3 (keyword, dest ): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //'Authorization': 'Basic '+s1,
        'target': dest
      })
    };
    let rec = {"command": "run", "utilCmdArgs": "-c 'tmsh run cli script tmpl_export -k " + keyword + "'"};
    return this.http.post(endpoint + 'util/bash' , JSON.stringify(rec) , httpOptions).pipe(
      tap((declar) => {
        console.log(declar);

      }),
      catchError(this.handleError<any>('Export to AS3 with '+keyword+ ' From '))
    );
  }


  saveConfig () {
   let rec = { "command":"run" , "name":"/Common/add-rec", "utilCmdArgs": "save" };
    return this.http.post(endpoint + cliscript , JSON.stringify(rec) , httpOptions).pipe(
      tap(_ => console.log(`Config Saved.`)),
      catchError(this.handleError<any>('saveConfig'))
    );

  }

  deleteDataGroup (name, dest, s1): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //'Authorization': 'Basic '+s1,
        'target': dest
      })
    };
    return this.http.delete<any>(endpoint + elmnt + partition + name, httpOptions).pipe(
      tap(_ => console.log(`deleted record id=${name}`)),
      catchError(this.handleError<any>('deleteProduct'))
    );
  }


  uploadScript(dest, s1, script) {
    console.log ('Upload scripts from rest mod to ', dest);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //'Authorization': 'Basic '+s1,
        'target': dest
      })
    };

    return this.http.post<any>('/mgmt/tm/cli/script/' , JSON.stringify(script), httpOptions).pipe(
      tap((group) => console.log('Script uploaded to', dest)),
      catchError( (err: any) => {
        return throwError(err);
        } ));
  }

  deleteScript(dest, s1): Observable<any> {
    console.log ('Delete scripts from rest mod to ', dest);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //'Authorization': 'Basic '+s1,
        'target': dest
      })
    };

    return this.http.delete<any>('/mgmt/tm/cli/script/~Common~add-rec' , httpOptions).pipe(
      tap((group) => console.log('Script deleted from ', dest)),
      catchError( (err: any) => {
        return throwError(err);
        } ));
  }




  handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      //console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.error.message}`);


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

