import React from "react";
import { Link } from "react-router-dom";
import icons from "../../../assets/icons.svg";

interface SocialMediaLink {
  id: string;
  platform: string;
  icon: string;
  url: string;
}

export const FollowUs: React.FC = () => {
  const socialMediaLinks: SocialMediaLink[] = [
    {
      id: "facebook",
      platform: "Facebook",
      icon: "facebook",
      url: "https://www.facebook.com/",
    },
    {
      id: "youtube",
      platform: "YouTube",
      icon: "youtube.svg",
      url: "https://www.youtube.com/",
    },
    {
      id: "twitter",
      platform: "Twitter",
      icon: "twitter",
      url: "https://twitter.com/",
    },
    {
      id: "instagram",
      platform: "Instagram",
      icon: "instagram",
      url: "https://www.instagram.com/",
    },
  ];

  return (
    <div>
      <h2>Follow Us</h2>
      <ul>
        {socialMediaLinks.map((socialMedia) => (
          <li key={socialMedia.id}>
            <Link
              to={socialMedia.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg>
                <use xlinkHref={`${icons}#${socialMedia.icon}`} />
              </svg>
              {socialMedia.platform}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
