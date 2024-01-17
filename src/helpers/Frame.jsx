import React, { useState } from 'react';
import '../styles/frame.css';
import LightbulbIcon from '@mui/icons-material/LightbulbOutlined';
import SpeakerIcon from '@mui/icons-material/VolumeUp';
import ReplayIcon from '../assets/replay.svg';
import MaximizeIcon from '../assets/maximize.svg';
import LeftIcon from '@mui/icons-material/ChevronLeftOutlined';
import RightIcon from '@mui/icons-material/ChevronRightOutlined';

function Frame() {
  const eqns = ['9 + 6 + 7x - 2x - 3', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eight', 'nineth', 'tenth'];
  const [itr, setItr] = useState(0);
  const [showBox1, setShowBox1] = useState(true);


  const handleLeftIconClick = () => {
    setItr((prevItr) => (prevItr > 0 ? prevItr - 1 : prevItr));
  };

  const handleRightIconClick = () => {
    setItr((prevItr) => (prevItr < eqns.length - 1 ? prevItr + 1 : prevItr));
  };

  const handleReplay = ()=>{
    setItr(0);
  };

  const handleBoxClick = () => {
    setShowBox1((prevShowBox1) => !prevShowBox1);
    setTimeout(() => {
      
    }, 500); 
  };

  return (
    <div id="frame" className='mt-8'>
      <div id='box' className={`m-auto bg-boxBG ${showBox1 ? 'visible' : 'hidden'}`} onClick={handleBoxClick}>
        <LightbulbIcon className='text-white relative left-8 top-8 cursor-pointer' style={{ fontSize: '2rem' }} />
        <SpeakerIcon className='text-white relative float-end top-8 right-8 cursor-pointer' style={{ fontSize: '2rem' }} />
        <div id='eqn' className=' text-3xl text-white relative w-fit h-fit m-auto top-1/3'>{eqns[itr]}</div>
      </div>
      <div id='box2' className={`m-auto bg-backboxBG ${showBox1 ? 'hidden' : 'visible'}`} onClick={handleBoxClick}>
        <LightbulbIcon className='text-white relative left-8 top-8 cursor-pointer' style={{ fontSize: '2rem' }} />
        <SpeakerIcon className='text-white relative float-end top-8 right-8 cursor-pointer' style={{ fontSize: '2rem' }} />
        <div id='eqn2' className=' text-3xl text-white relative w-fit h-fit m-auto top-1/3'>{eqns[itr]}</div>
      </div>
      <div id='controls' className='m-auto mt-4 flex items-center'>
        <img src={ReplayIcon} alt='' onClick={handleReplay} className='cursor-pointer' />
        <div id="slider" className='w-72 ml-auto float text-center text-2xl font-bold'>
          <LeftIcon onClick={handleLeftIconClick} className='bg-boxBG rounded-full text-white cursor-pointer float-start' style={{ fontSize: '2rem' }} />
          {itr+1}/10
          <RightIcon onClick={handleRightIconClick} className='bg-boxBG rounded-full text-white float-end cursor-pointer' style={{ fontSize: '2rem' }} />
        </div>
        <img src={MaximizeIcon} alt='' className='ml-auto cursor-pointer' />
      </div>
    </div>
  );
}

export default Frame;
