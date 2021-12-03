import { ReactNode } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

// https://markoskon.com/scroll-reveal-animations-with-react-spring/#a-solution-with-css-transitions

interface Props {
  children?: ReactNode;
  timing: string;
}

function ScrollRevealAnimation({ children, timing }: Props) {
  return (
    <VisibilitySensor>
      {({ isVisible }) => (
        <div
          style={
            isVisible
              ? { transition: `${timing}s ease-in-out`, opacity: 1 }
              : {
                  opacity: 0,
                  transform: 'translateY(-13px)',
                  transition: `${timing}s ease-in-out`,
                }
          }
        >
          {children}
        </div>
      )}
    </VisibilitySensor>
  );
}

export default ScrollRevealAnimation;
