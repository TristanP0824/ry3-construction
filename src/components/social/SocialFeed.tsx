import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

// Define interfaces for window extensions
interface FacebookSDK {
  XFBML: {
    parse: (element: HTMLElement | null) => void;
  };
}

interface TwitterSDK {
  widgets: {
    load: (element: HTMLElement | null) => void;
  };
}

interface WindowWithSocialSDKs extends Window {
  FB?: FacebookSDK;
  twttr?: TwitterSDK;
}

type SocialPlatform = 'facebook' | 'instagram' | 'twitter';

interface SocialFeedProps {
  platform: SocialPlatform;
  url: string;
  height?: string;
  width?: string;
  className?: string;
}

const FeedContainer = styled.div<{ $height: string; $width: string }>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  background-color: ${({ theme }) => theme.colors.white};
`;

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: 500;
`;

const SocialFeed: React.FC<SocialFeedProps> = ({
  platform,
  url,
  height = '500px',
  width = '100%',
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  
  useEffect(() => {
    const loadSocialScript = () => {
      const extendedWindow = window as WindowWithSocialSDKs;
      
      if (platform === 'facebook') {
        // Load Facebook SDK
        if (!extendedWindow.FB) {
          const script = document.createElement('script');
          script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0';
          script.async = true;
          script.defer = true;
          script.crossOrigin = 'anonymous';
          script.onload = () => {
            if (extendedWindow.FB) {
              extendedWindow.FB.XFBML.parse(containerRef.current);
              setIsLoading(false);
            }
          };
          document.body.appendChild(script);
        } else {
          extendedWindow.FB.XFBML.parse(containerRef.current);
          setIsLoading(false);
        }
      } else if (platform === 'twitter') {
        // Load Twitter SDK
        if (!extendedWindow.twttr) {
          const script = document.createElement('script');
          script.src = 'https://platform.twitter.com/widgets.js';
          script.async = true;
          script.onload = () => {
            if (extendedWindow.twttr) {
              extendedWindow.twttr.widgets.load(containerRef.current);
              setIsLoading(false);
            }
          };
          document.body.appendChild(script);
        } else {
          extendedWindow.twttr.widgets.load(containerRef.current);
          setIsLoading(false);
        }
      } else if (platform === 'instagram') {
        // For Instagram, we'll use their embed code
        setIsLoading(false);
      }
    };
    
    loadSocialScript();
    
    return () => {
      // Cleanup if needed
    };
  }, [platform, url]);
  
  const renderSocialEmbed = () => {
    switch (platform) {
      case 'facebook':
        return (
          <div
            className="fb-page"
            data-href={url}
            data-tabs="timeline"
            data-width=""
            data-height=""
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote cite={url} className="fb-xfbml-parse-ignore">
              <a href={url}>R&R Construction</a>
            </blockquote>
          </div>
        );
      
      case 'twitter':
        return (
          <a
            className="twitter-timeline"
            href={url}
            data-height={height}
            data-theme="light"
          >
            Tweets by R&R Construction
          </a>
        );
      
      case 'instagram':
        return (
          <iframe
            title="Instagram Feed"
            src={`https://www.instagram.com/p/${url}/embed`}
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            allowTransparency
            onLoad={() => setIsLoading(false)}
          />
        );
      
      default:
        return null;
    }
  };
  
  return (
    <FeedContainer
      ref={containerRef}
      $height={height}
      $width={width}
      className={className}
    >
      {isLoading ? (
        <LoadingContainer>Loading social feed...</LoadingContainer>
      ) : (
        renderSocialEmbed()
      )}
    </FeedContainer>
  );
};

export default SocialFeed;
