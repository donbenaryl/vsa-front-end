import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';

import {fromEvent} from 'rxjs';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  @ViewChild('serviceContainer', {static: true}) _div: any;
  @ViewChild('whyOurServiceContainer', {static: true}) _div2: any;

  @HostListener('window:scroll', [])
  onWindowScroll() {
      const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

      // OUR SERVICES
      const serviceTopPosition = this._div.nativeElement.offsetTop;
      const scrollServiceOffset = scrollOffset - serviceTopPosition;
      
      if (scrollServiceOffset >=  -400 && scrollServiceOffset <  250) {
        this.serviceClass = 'pl-0';
      }
      else if (scrollServiceOffset >=  250) {
        this.serviceClass = 'pl-n-1200';
      }
      else {
        this.serviceClass = 'pl-n-1200';
      }

      // WHY OUR SERVICES
      const whyOurServiceTopPosition = this._div2.nativeElement.offsetTop;
      const scrollWhyOurServiceOffset = scrollOffset - whyOurServiceTopPosition;
      
      if (scrollWhyOurServiceOffset >=  -400) {
        this.whyOurServiceClass = 'pr-0';
      }
      else {
        this.whyOurServiceClass = 'pr-n-1200';
      }
  }

  serviceClass = 'pl-n-1200';

  whyOurServiceClass = 'pr-n-1200';

  whyOurServices = [
    {
      title: 'Access to Top Talent',
      description: 'We connect you with a curated selection of highly skilled professionals who are experts in their respective fields, ensuring you have access to the best talent available.'
    },
    {
      title: 'Tailored Solutions',
      description: 'Our platform uses advanced algorithms to match you with virtual staff members who precisely meet your specific project requirements and company culture.'
    },
    {
      title: 'Cost-Effectiveness',
      description: 'Save on overhead costs associated with traditional in-house hires, such as office space, equipment, and benefits, while still benefiting from top-tier expertise.'
    },
    {
      title: 'Flexibility and Scalability',
      description: 'Scale your team effortlessly to meet changing business needs without the limitations of geographic boundaries, providing you with agility and adaptability.'
    },
    {
      title: 'Enhanced Productivity',
      description: 'Leverage remote collaboration tools to streamline communication and project management, boosting productivity and accelerating project timelines.'
    },
    {
      title: 'Global Perspective',
      description: 'Collaborate with professionals from diverse cultural backgrounds, gaining fresh insights and innovative ideas that can lead to breakthroughs in your business strategies.'
    },
    {
      title: '24/7 Operations',
      description: 'By tapping into talent from different time zones, you can maintain round-the-clock operations and maximize efficiency without overburdening your local team.'
    },
    {
      title: 'Strategic Focus',
      description: 'Delegate routine tasks to virtual staff, allowing your core team to focus on high-value tasks, innovation, and strategic decision-making.'
    },
    {
      title: 'Reduced Risk',
      description: 'Our carefully vetted virtual staff members are committed to delivering quality results, minimizing the risk associated with hiring unknown freelancers.'
    },
    {
      title: 'Global Branding',
      description: "Harness the power of a global workforce to enhance your brand's presence on an international scale, positioning your business for global success."
    },
    {
      title: 'Customizable Contracts',
      description: "Choose the engagement model that suits your needs, whether it's short-term project-based collaborations or long-term partnerships."
    },
    {
      title: 'Constant Learning',
      description: 'We offer continuous learning opportunities to our virtual staff, ensuring they remain updated with the latest industry trends and technologies.'
    },
    {
      title: 'Expert Support',
      description: 'Benefit from expert consultation services that provide guidance on optimizing your remote work strategy and maximizing the potential of your virtual team.'
    },
  ]

  services = [
    {
      img: 'services/1.webp',
      title: 'Virtual Staff Placement',
      description:'Find the perfect virtual staff members, including virtual assistants, designers, developers, marketers, customer support agents, and more.'
    },
    {
      img: 'services/2.jpg',
      title: 'Custom Talent Matching',
      description:'Our AI-driven system matches businesses with the most suitable virtual staff based on their requirements and preferences.'
    },
    {
      img: 'services/3.png',
      title: 'Project Management Tools',
      description:'Access integrated tools for efficient project tracking, communication, and collaboration, ensuring seamless teamwork across time zones.'
    },
    {
      img: 'services/4.avif',
      title: 'Flexible Contracts',
      description:'Choose from a range of contract options, from short-term projects to long-term partnerships, providing businesses the adaptability they need.'
    },
    {
      img: 'services/5.jpg',
      title: 'Training & Development',
      description:'Empower virtual staff with continuous learning opportunities to stay updated with industry trends and enhance their skill sets.'
    },
    {
      img: 'services/6.avif',
      title: 'Consultation Services',
      description:'Benefit from expert guidance on remote work strategies, team optimization, and operational efficiency.'
    },
  ]

  ngOnInit(): void {
  }

}
