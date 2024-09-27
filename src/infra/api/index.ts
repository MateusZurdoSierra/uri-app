import axios, { AxiosInstance } from 'axios';

class HttpClient {
  private instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error('API error:', error);
        return Promise.reject(error);
      }
    );
  }

  public get<T>(url: string, params?: object): Promise<T> {
    return this.instance.get(url, { params }).then((res) => res.data);
  }

  public post<T>(url: string, body: object): Promise<T> {
    return this.instance.post(url, body).then((res) => res.data);
  }

  public put<T>(url: string, body: object): Promise<T> {
    return this.instance.put(url, body).then((res) => res.data);
  }

  public delete<T>(url: string): Promise<T> {
    return this.instance.delete(url).then((res) => res.data);
  }
}

export const apiClient = new HttpClient('https://uriapi.com');
