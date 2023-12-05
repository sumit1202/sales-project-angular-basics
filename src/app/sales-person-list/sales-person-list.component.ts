import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sales-person-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './sales-person-list.component.html',
  styleUrl: './sales-person-list.component.css',
})
export class SalesPersonListComponent{
  
  salesPersonList: SalesPerson[] = [
    new SalesPerson('John', 'Dey', 'john.dey@email.com', 100),
    new SalesPerson('Natalia', 'Punk', 'punk.nat@email.com', 500),
    new SalesPerson('Julie', 'Pitt', 'julie.pitt@email.com', 300),
    new SalesPerson('Sarah', 'Connor', 'sarah.c@email.com', 200),
    new SalesPerson('Tiger', 'Puth', 'puth.tiger@email.com', 800),
  ];
}
