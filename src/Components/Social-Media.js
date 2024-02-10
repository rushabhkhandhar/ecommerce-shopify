import React from 'react';
import './style.css'
import { IonIcon } from '@ionic/react';
import { logoInstagram } from 'ionicons/icons';

const SocialMedia = () => {
  return (
    <section className="section insta-post">
      <ul className="insta-post-list has-scrollbar">
        <li className="insta-post-item">
          <img src="./assets/images/insta-1.jpg" width="100" height="100" loading="lazy" alt="Instagram post" className="insta-post-banner image-contain" />
          <a href="#" className="insta-post-link">
            <IonIcon icon={logoInstagram} />
          </a>
        </li>
        <li className="insta-post-item">
          <img src="./assets/images/insta-2.jpg" width="100" height="100" loading="lazy" alt="Instagram post" className="insta-post-banner image-contain" />
          <a href="#" className="insta-post-link">
            <IonIcon icon={logoInstagram} />
          </a>
        </li>
        <li className="insta-post-item">
          <img src="./assets/images/insta-3.jpg" width="100" height="100" loading="lazy" alt="Instagram post" className="insta-post-banner image-contain" />
          <a href="#" className="insta-post-link">
            <IonIcon icon={logoInstagram} />
          </a>
        </li>
        <li className="insta-post-item">
          <img src="./assets/images/insta-4.jpg" width="100" height="100" loading="lazy" alt="Instagram post" className="insta-post-banner image-contain" />
          <a href="#" className="insta-post-link">
            <IonIcon icon={logoInstagram} />
          </a>
        </li>
        <li className="insta-post-item">
          <img src="./assets/images/insta-5.jpg" width="100" height="100" loading="lazy" alt="Instagram post" className="insta-post-banner image-contain" />
          <a href="#" className="insta-post-link">
            <IonIcon icon={logoInstagram} />
          </a>
        </li>
      
        <li className="insta-post-item">
          <img src="./assets/images/insta-6.jpg" width="100" height="100" loading="lazy" alt="Instagram post" className="insta-post-banner image-contain" />
          <a href="#" className="insta-post-link">
            <IonIcon icon={logoInstagram} />
          </a>
        </li>
        <li className="insta-post-item">
          <img src="./assets/images/insta-7.jpg" width="100" height="100" loading="lazy" alt="Instagram post" className="insta-post-banner image-contain" />
          <a href="#" className="insta-post-link">
            <IonIcon icon={logoInstagram} />
          </a>
        </li>
        <li className="insta-post-item">
          <img src="./assets/images/insta-8.jpg" width="100" height="100" loading="lazy" alt="Instagram post" className="insta-post-banner image-contain" />
          <a href="#" className="insta-post-link">
            <IonIcon icon={logoInstagram} />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default SocialMedia;
