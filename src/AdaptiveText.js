import React, { useRef, useEffect } from 'react';
import './AdaptiveText.css';

const AdaptiveText = ({ width, height, text }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  const resizeFont = () => {
    if (!containerRef.current || !textRef.current) return;

    let fontSize = 100;
    textRef.current.style.fontSize = fontSize + 'px';

    while (textRef.current.scrollHeight > containerRef.current.clientHeight) {
      fontSize -= 0.5;
      textRef.current.style.fontSize = fontSize + 'px';
      if (fontSize < 12) {
        break;
      }
    }

    while (
      textRef.current.scrollHeight <= containerRef.current.clientHeight &&
      fontSize <= 100
    ) {
      fontSize += 0.5;
      textRef.current.style.fontSize = fontSize + 'px';
      if (textRef.current.scrollHeight > containerRef.current.clientHeight) {
        fontSize -= 0.5;
        textRef.current.style.fontSize = fontSize + 'px';
        break;
      }
    }

    if (
      fontSize < 12 &&
      textRef.current.scrollHeight > containerRef.current.clientHeight
    ) {
      const scale =
        containerRef.current.clientHeight / textRef.current.scrollHeight;
      textRef.current.style.transform = `scale(1,${scale})`;
      textRef.current.style.transformOrigin = 'left';
    } else {
      textRef.current.style.transform = 'none';
    }
  };

  useEffect(() => {
    resizeFont();
  }, [text]);

  return (
    <div
      className="container"
      ref={containerRef}
      style={{ width: width, height: height }}
    >
      <span ref={textRef}>{text}</span>
    </div>
  );
};

export default AdaptiveText;
