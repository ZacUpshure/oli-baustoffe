import test from '../assets/test.png';
import hero_img from '../assets/hero_img.png';
import logo from '../assets/logo.png';

//lottie
import house1 from '../assets/lottie/house1.json';
import isohouse from '../assets/lottie/isometricHouse.json';
import delivery from '../assets/lottie/delivery.json';
import calender from '../assets/lottie/calender.json';

// icons
import icon1 from '../assets/icons/icon1.png';
import icon2 from '../assets/icons/icon2.png';
import icon3 from '../assets/icons/icon3.png';
import icon4 from '../assets/icons/icon4.png';
import icon5 from '../assets/icons/icon5.svg';
import icon6 from '../assets/icons/icon6.svg';
import icon7 from '../assets/icons/Dachinformationen_Satteldach_links.svg';
import icon8 from '../assets/icons/Dachinformationen_Satteldach_rechts.svg';
import icon9 from '../assets/icons/Dachinformationen_Satteldach_mitte.svg';
import icon10 from '../assets/icons/Dachinformationen_Pultdach_seite1.svg';
import icon11 from '../assets/icons/Dachinformationen_Pultdach_seite2.svg';

// logos
import partnerOne from '../assets/logos/business-insider.png';
import partnerTwo from '../assets/logos/forbes.png';
import partnerThree from '../assets/logos/techcrunch.png';
import partnerFour from '../assets/logos/the-new-york-times.png';
import partnerFive from '../assets/logos/usa-today.png';

// Haupt Bilder
const dachbaustoffe = 'https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/Dachbaustoffe.png';
// import dachplatten from '../assets/Dachplatten.jpg';
const dachplatten = 'https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/lima/BD14_LimaPlus_FRONT_4_panels.jpg';
// import trapezplatten from '../assets/trapezplatten.jpg';
const lkw = 'https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/LKW.jpg';

//Oli Bilder
const haus1 = 'https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0197.JPG';
const haus2 = 'https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/haus2.jpg';
const haus3 = 'https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/haus3.JPG';

// import haus2 from '../assets/DJI_0017.jpg';
// import haus3 from '../assets/haus3.jpg';

//s3 
// const bild = 'https://s3.amazonaws.com/oli-baustoffe-image/Olibaustoffe_bilder/DJI_005.jpg';
// const bild = 's3://oli-baustoffe-images/Olibaustoffe_bilder/DJI_0005.JPG';
const bild = 'https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0005.JPG?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaDGV1LWNlbnRyYWwtMSJGMEQCIEQ7whHmCzmlV9Yq%2BION2KFXqfZ4h987TBrL8ElMwo2JAiAlJnnW%2Fvz20DKkJ3nGFJdt143bgE4W1QvIR0QrlR32jCrkAgguEAAaDDkzNzIwNjkzNzY5NSIM5mL6oRpqMLTpRDZFKsEC6meYRUck7MpVXB4EqWJw3eiwhENbcnU5c0nQB%2FEds92klVPitUOywr9nKlIDdV8AhlvoFiRWi0UjnrC6Qlvn1aQVsIIaGhXn3ZJ1sPovZOhBGU%2BoAXq2R1gZUUXgrAnBtjiwOM8Gwft85VntFRuCShEHoJbPbwI%2F8Q6xQoRrJv37vr0VwtJQuIeF9vLlT9NZk%2Bv6P1CnjFeGPLfDuhJUy8NbX6wySFdEbZ1Ch%2FM3PyM1IyQOi2%2BCCHuCQR9WY42IWOm8gy6nc%2Bt%2BjqfpX6JPWxhTIKcTvGYnxPPZtM1XeIYI0wLdg1ZqFNC10Ps0N04L9QVqB6frpG8ka27k8zKAZdlv9iT%2FYD5yHb5ZZ8GiJIK95jf47vB%2BC8fKoonxu%2BOjQpjX9HoQe3%2BJr%2FO82wLpjxnaTXeeUXNkMV3EFp7qBFjiMLyN2aIGOrQCn62Kq2LOb15PizKgaOF1DqM%2BwVsBQbkzujDVqHKoibE3ZeCkl0CiEekgUcgj%2FoMBaIMdjO4e3gvD8KRbPjJzL%2BMC75UXQhk6iqUKoVf2ue2iJV1K6DunqVKyGSdwhfJwRvAekfDo8qswSUhzJteKb6r%2BL0IxCeraFVlur5EiYriW9nWstgy7NUrFMn%2BlmxdKrqxqc52RPFj8AY8w7DVze7U2xY25Ow6JO3vgRNBnLTJ5tdrZylD9ipf8H%2BkfScWeqe7UwYDWuwET05YuDKLnfc2qCVpyJVS7Cx%2BDfATHFkS6zPr8LA2Lcx1yctL2aYmgX32lK0%2FGPNvleJy4HGJRkk9qFh1sgMGmGQlOcSYxWmI8B5PIMAQNNxUo0zN4%2FdWr18S1QY33lEWlGkUtKYtuwxt%2BHvw%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230506T190822Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA5UNPC7BP2JCQTK5M%2F20230506%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=437188a78021a63b8de8284f749946e7fe349fa96a06a14483cdfc9848ee6354';

// error with dachplatten, trapezplatten, LKW

export default {
    test,
    hero_img,
    logo,
    bild,

    partnerOne,
    partnerTwo,
    partnerThree,
    partnerFour,
    partnerFive,

    dachbaustoffe,
    dachplatten,
    // trapezplatten,
    lkw,

    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    icon6,
    icon7, 
    icon8, 
    icon9, 
    icon10, 
    icon11, 

    house1,
    isohouse,
    delivery,
    calender,

    haus1,
    haus2,
    haus3
};