import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../../services/global.service';
import AOS from 'aos';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Lightbox } from 'ngx-lightbox';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit, AfterViewInit {
  slug: string | null = null;
  eventPost: any;
  eventPostApiData: any;
  eventPostImages: any;
  imageUrl = 'https://api.trlkrosaki.com';

  swiper: any;
  album: any[] = [];

  basicData: any;
  basicOptions: any;

  constructor(private eventService: GlobalService, private route: ActivatedRoute, private lightbox: Lightbox) {}

  ngOnInit(): void {
    this.getEventDetails();
  }

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000,
      offset: 200,
      once: false,
      mirror: true
    });
    AOS.refresh();
    window.addEventListener('scroll', AOS.refresh);

    this.swiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 4,
      spaceBetween: 25,
      pagination: { clickable: true }
    });
  }

  async getEventDetails() {
    this.slug = this.route.snapshot.paramMap.get('slug');
    if (this.slug) {
      try {
        this.eventPostApiData = await this.eventService.getEventBySlug(this.slug);
        this.eventPost = this.eventPostApiData.data;
        this.eventPostImages = this.eventPostApiData.images;

        this.eventPostImages.forEach((image: any) => {
          this.album.push({
            src: this.imageUrl + image.image_large,
            caption: this.eventPost.title,
            thumb: this.imageUrl + image.image_large
          });
        });

      } catch (error) {
        console.log('Error', JSON.stringify(error));
      }
    }
  }

  slidePrev() {
    this.swiper.slidePrev();
  }

  slideNext() {
    this.swiper.slideNext();
  }

  openLightbox(index: number): void {
    this.lightbox.open(this.album, index);
  }

  closeLightbox(): void {
    this.lightbox.close();
  }

  isFirstSlide(): boolean {
    if (this.swiper) {
      return this.swiper.isBeginning;
    }
    return true;
  }

  isLastSlide(): boolean {
    if (this.swiper) {
      return this.swiper.isEnd;
    }
    return true;
  }
}
