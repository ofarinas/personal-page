import {AfterViewInit, Component, OnInit} from '@angular/core';
import {jsPDF} from "jspdf";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit() {

  }

  download() {
    const doc = new jsPDF();
    doc.text('Hello world!', 20, 20,);
    doc.text('This is client-side Javascript, pumping out a PDF.', 20, 30);
    doc.addPage();
    doc.text('Do you like that?', 20, 20);

    // Save the PDF
    doc.save('Test.pdf');
  }

  ngAfterViewInit(): void {
    console.log('view init');
  }

}
