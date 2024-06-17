import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Freelance } from './types/freelance.type';

@Injectable({
  providedIn: 'root',
})
export class FreelanceService {
  private readonly BASE_URL = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {}

  getListFreelance() {
    return this.httpClient.get<Freelance[]>(
      `${this.BASE_URL}/freelance/get/all`
    );
  }

  getFreelanceById(id: number) {
    return this.httpClient.get<Freelance>(
      `${this.BASE_URL}/freelance/get/${id}`
    );
  }
}
