import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  headers = new HttpHeaders({
    accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  constructor(private httpClient: HttpClient) {
  }

  async get(url: string, extraHeaders?: object): Promise<Object> {
    return await firstValueFrom(
      this.httpClient.request('GET', url, {
        headers: this.headers,
        ...extraHeaders,
      })
    );
  }

  async post(
    url: string,
    body: object,
    extraHeaders?: object
  ): Promise<Object> {
    return await firstValueFrom(
      this.httpClient.post(url, body, {
        headers: this.headers,
        ...extraHeaders,
      })
    );
  }

  async postFile(url: string, body: object): Promise<Object> {
    return await firstValueFrom(
      this.httpClient.post(url, body, {
        reportProgress: true,
      })
    );
  }

  async put(url: string, body: object, extraHeaders?: object): Promise<Object> {
    return await firstValueFrom(
      this.httpClient.put(url, body, {
        headers: this.headers,
        ...extraHeaders,
      })
    );
  }

  async patch(
    url: string,
    body: object,
    extraHeaders?: object
  ): Promise<Object> {
    return await firstValueFrom(
      this.httpClient.patch(url, body, {
        headers: this.headers,
        ...extraHeaders,
      })
    );
  }

  async delete(url: string, extraHeaders?: object): Promise<Object> {
    return await firstValueFrom(
      this.httpClient.delete(url, {headers: this.headers, ...extraHeaders})
    );
  }
}
