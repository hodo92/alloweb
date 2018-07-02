import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ParentService } from '../services/parent.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Parent } from '../models/parent';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor() { }

  addNewUser(){
    console.log('login service works!')
  }

}
