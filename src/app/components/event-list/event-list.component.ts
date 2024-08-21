import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent implements OnInit {
  eventResponse: any;
  eventData: any;
  imageUrl = 'https://api.trlkrosaki.com';

  selectedYear: string = '';
  search: string = '';
  // years: string[] = ['2022', '2023', '2024', '2019'];
  years: string[] = [];
  noDataFound: boolean | undefined;
  isClearButtonVisible: boolean = false;

  constructor(private eventService: GlobalService){}

  ngOnInit(): void {
    this.getEventList();
    this.loadYears();
  }

 async getEventList(){
  const params = {
    language: 'en',
      pageIndex: 1,
      search: this.search,
      pageSize: 12,
      year: this.selectedYear
  }
  try{
    this.eventResponse = await this.eventService.getEvents(params);
    this.eventData = this.eventResponse.data;
    this.noDataFound = this.eventData.length === 0;
    // console.log(this.eventData);
  } catch(error){
    console.log('Error:', JSON.stringify(error));
    this.noDataFound = true;
  }
 }

 clearSearch(): void {
  this.search = '';
  this.selectedYear = '';
  this.isClearButtonVisible = false;
  this.getEventList();
}

onInputChange(): void {
  this.isClearButtonVisible = !!this.search;
}

async loadYears() {
  try {
    const response: any = await this.eventService.getEvents({ language: 'en', pageIndex: 1, pageSize: 100 });
    const yearsSet = new Set<string>();
    response.data.forEach((event: any) => {
      const year = event.start_date_text.split('-')[2];
      yearsSet.add(year);
    });
    this.years = Array.from(yearsSet).sort((a, b) => parseInt(b) - parseInt(a)); // Sort years in descending order
  } catch (error) {
    console.log('Error fetching years:', JSON.stringify(error));
  }
}

}
