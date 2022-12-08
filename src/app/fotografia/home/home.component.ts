import { Component, OnInit } from "@angular/core";


@Component ({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

imagemHome ="https://braziljournal.s3.amazonaws.com/covers/2ea31065-13ca-7631-6940-a7c7103a8d94.jpg";

constructor() {}

ngOnInit(): void {
    
}

}