import * as React from 'react';
import { motion } from 'framer-motion';

interface HoverLinkImageProps {
  to: string;
  reference: string;
  imageSrc: string;
  size?: number;
}

const HoverLinkImage: React.FC<HoverLinkImageProps> = ({
  children,
  to,
  reference,
  imageSrc,
  size = 500,
}) => {
  const [mouse, setMouse] = React.useState({
    mx: null,
    my: null,
    isActive: null,
  });

  return (
    <motion.a
      href={to}
      target="_blank"
      rel="noreferrer"
      className="link"
      onMouseMove={(e) => {
        const { offsetTop, offsetLeft } = e.currentTarget;
        setMouse({
          mx: e.pageX - offsetLeft,
          my: e.pageY - offsetTop,
          isActive: reference,
        });
      }}
      onMouseEnter={() => setMouse({ ...mouse, isActive: reference })}
      onMouseLeave={() => setMouse({ ...mouse, isActive: null })}
      style={{ position: 'relative' }}
    >
      {children}
      {mouse?.isActive === reference && (
        <motion.img
          src={imageSrc}
          width={size}
          animate={{
            opacity: 0.9,
            x: mouse.mx,
            y: mouse.my,
          }}
          style={{
            position: 'absolute',
            bottom: 40,
            left: 0,
          }}
        />
      )}
    </motion.a>
  );
};

export default HoverLinkImage;
