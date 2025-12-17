// src/assets/images/index.js
// Central image import file for better organization

// Hero Images
import heroHome from './heroes/hero-home.jpg';
import heroAbout from './heroes/hero-about.jpg';
import heroServices from './heroes/hero-services.jpg';
import heroContact from './heroes/hero-contact.jpg';
import heroPortfolio from './heroes/hero-portfolio.jpg';

// Team Images
import teamThomas from './team/team-thomas.jpg';
import teamSarah from './team/team-sarah.jpg';
import teamMichael from './team/team-michael.jpg';

// About Images
import aboutStory from './about/about-story.jpg';

// Portfolio - Weddings
import wedding01 from './portfolio/weddings/wedding-01.jpg';
import wedding02 from './portfolio/weddings/wedding-02.jpg';
import wedding03 from './portfolio/weddings/wedding-03.jpg';
import wedding04 from './portfolio/weddings/wedding-04.jpg';
import wedding05 from './portfolio/weddings/wedding-05.jpg';
import wedding06 from './portfolio/weddings/wedding-06.jpg';
import wedding07 from './portfolio/weddings/wedding-07.jpg';

// Portfolio - Portraits
import portrait01 from './portfolio/portraits/portrait-01.jpg';
import portrait02 from './portfolio/portraits/portrait-02.jpg';
import portrait03 from './portfolio/portraits/portrait-03.jpg';
import portrait04 from './portfolio/portraits/portrait-04.jpg';
import portrait05 from './portfolio/portraits/portrait-05.jpg';
import portrait06 from './portfolio/portraits/portrait-06.jpg';
import portrait07 from './portfolio/portraits/portrait-07.jpg';

// Portfolio - Events
import event01 from './portfolio/events/event-01.jpg';
import event02 from './portfolio/events/event-02.jpg';
import event03 from './portfolio/events/event-03.jpg';
import event04 from './portfolio/events/event-04.jpg';
import event05 from './portfolio/events/event-05.jpg';
import event06 from './portfolio/events/event-06.jpg';

export const heroes = {
  home: heroHome,
  about: heroAbout,
  services: heroServices,
  contact: heroContact,
  portfolio: heroPortfolio,
};

export const team = {
  thomas: teamThomas,
  sarah: teamSarah,
  michael: teamMichael,
};

export const about = {
  story: aboutStory,
};

export const portfolio = {
  weddings: [
    wedding01,
    wedding02,
    wedding03,
    wedding04,
    wedding05,
    wedding06,
    wedding07,
  ],
  portraits: [
    portrait01,
    portrait02,
    portrait03,
    portrait04,
    portrait05,
    portrait06,
    portrait07,
  ],
  events: [
    event01,
    event02,
    event03,
    event04,
    event05,
    event06,
  ],
};

// Export everything as default for convenience
export default {
  heroes,
  team,
  about,
  portfolio,
};
