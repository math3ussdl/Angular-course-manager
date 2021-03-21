import { Component } from '@angular/core';
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { name, version } from '../../../../../package.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  appName: string = name;
  appVersion: string = version;

  faInstagram = faInstagram;
  faGitHub = faGithub;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
}
