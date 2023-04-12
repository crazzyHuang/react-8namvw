import React, { useState, useEffect, useRef } from 'react';
import AdaptiveText from './AdaptiveText';
import './style.css';

export default function App() {
  const [text, setText] = useState('');
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <input type="text" value={text} onChange={handleTextChange} />
      <AdaptiveText
        width={300}
        height={200}
        text="你很骄傲你好你好大萨达所大所啊实打实大大叔大婶大叔大婶大萨达所大所大萨达所大所多大萨达所大所大叔大婶大叔大婶大师大师大萨斯大大实打实大飒飒大叔大婶大叔大婶大阿萨大萨达所大所大所大所大萨达所大所大所大所大萨达撒打算大萨达洒水大萨达所大所大所大所大萨达萨达大萨达所大所大所大所打撒大萨达所大所大所大所大萨达四大四大撒大萨达所大所大所大所打撒搭搭撒撒大萨达是大萨达所大所大所大所大萨达四大三大萨达所大所大所大所打撒大萨达是的撒大萨达打算大叔大婶大叔大婶大萨达所大所湿哒哒撒啊大萨达是大萨达所大所搭搭撒撒多大四大四大三大叔大婶大叔大婶是大叔大婶大叔大婶大萨达所大所打撒是多少大萨达撒大萨达所大所大萨达湿哒哒实打实大得到对对对萨达大多大四多大四多大四多大四多大四多大四多大四多大四多大四多大四多大四多大四多大四多大四多大四多大四多大四多大四多大四多大四多大四多大四多大四多大四多大四多大四多大四多大四多大四多大四多大四多大四多大四多大四多大四大四多大四多大四大四多大四多大四大四多大四多大四大四多大四多大四大四多大四多大四大四多大四多大四大四多大四多大四大四多大四多大四大四多大四多大四大四多大四多大四大四多大四多大四大四多大四多大四大四多大四多大四大四多大四多大四大四多大四多大四大四多大四多大四大四多大四多大四大四多大四多大四大四多"
      />
    </div>
  );
}
