import React, { useState, useEffect, useRef } from 'react';

const AutoShrinkText = ({ width, height, text }) => {
  const [scale, setScale] = useState(1);
  const innerRef = useRef(null);

  useEffect(() => {
    const inner = innerRef.current;
    const innerWidth = inner.offsetWidth;
    const innerHeight = inner.offsetHeight;
    const widthRatio = width / innerWidth;
    const heightRatio = height / innerHeight;
    const ratio = Math.min(widthRatio, heightRatio);
    setScale(ratio);
  }, [width, height, text]);

  useEffect(() => {
    const inner = innerRef.current;
    const lineHeight = parseFloat(
      window.getComputedStyle(inner)['line-height']
    );
    const numLines = Math.floor(parseFloat(height) / lineHeight);
    const innerHeight = inner.offsetHeight;

    const padding = Math.max((height - innerHeight) / 2, 0);
    inner.style.paddingTop = `${padding}px`;
    inner.style.paddingBottom = `${padding}px`;

    const numLinesElements = inner.children.length;
    for (let i = numLinesElements; i < numLines; i++) {
      inner.insertAdjacentHTML('beforeend', '<div>&nbsp;</div>');
    }
  }, [scale, height, text]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width,
        height,
        overflow: 'hidden',
      }}
    >
      <div
        ref={innerRef}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          display: 'inline-block',
          whiteSpace: 'pre',
          textAlign: 'left',
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default AutoShrinkText;
