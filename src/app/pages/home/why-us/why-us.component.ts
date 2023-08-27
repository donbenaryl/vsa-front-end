import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss']
})
export class WhyUsComponent {
  wuClass = 'pr-n-1200';
  why_us = [
    {
      title: "Global Talent Network",
      description: "Gain access to a diverse pool of skilled professionals from around the world, providing you with a wide range of expertise and perspectives to choose from."
    },
    {
      title: "Tailored Solutions",
      description: "Our AI-powered matching system ensures that you're connected with virtual staff who align perfectly with your specific business needs and culture."
    },
    {
      title: "Time and Cost Efficiency",
      description: "Save time and reduce operational costs by tapping into remote talent without the overhead expenses associated with traditional in-house hires."
    },
    {
      title: "Flexible Scaling",
      description: "Easily scale your team up or down as your business demands change, ensuring you always have the right resources to meet your objectives."
    },
    {
      title: "Seamless Collaboration",
      description: "Our advanced project management tools facilitate smooth communication and collaboration, bridging geographical gaps and time zones effortlessly."
    },
    {
      title: "Quality Assurance",
      description: "We rigorously vet and select virtual staff based on their skills, experience, and dedication to excellence, ensuring consistent and top-notch performance."
    },
    {
      title: "Global Competitiveness",
      description: "Position your business as a global player by leveraging international talent, innovative approaches, and 24/7 productivity."
    },
    {
      title: "Work-Life Balance",
      description: "Virtual staff enjoy the benefits of remote work, enabling them to achieve a healthier work-life balance and be more focused and motivated in their roles."
    },
    {
      title: "Expert Guidance:",
      description: "Receive expert consultation on remote work strategies, team optimization, and operational efficiency to maximize the potential of your virtual workforce."
    },
    {
      title: "Continuous Growth",
      description: "Through our training and development opportunities, virtual staff can continuously upgrade their skills, contributing to your business's sustained growth."
    },
    {
      title: "Security and Privacy",
      description: "Our platform employs robust security measures to safeguard sensitive data and ensure the privacy of your business operations."
    },
    {
      title: "Dedicated Support",
      description: "Our customer support team is available to assist you at every step, addressing your inquiries and helping you make the most of our platform."
    },
  ];

  @ViewChild('wuContainer', {static: true}) _div: any;

  @HostListener('window:scroll', [])
  onWindowScroll() {
      const serviceTopPosition = this._div.nativeElement.offsetTop;
      const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const scrollServiceOffset = scrollOffset - serviceTopPosition;
      
      if (scrollServiceOffset >=  -400) {
        this.wuClass = 'pl-0';
      }
      else {
        this.wuClass = 'pl-n-1200';
      }
  }
}
