import React, { useState } from 'react';
import AddressLogo from '../assets/address logo.svg';
import '../styles/flashcard.css';
import Title from '../helpers/Title';
import Frame from '../helpers/Frame';
import AddIcon from '@mui/icons-material/AddOutlined';
import DownIcon from '@mui/icons-material/KeyboardArrowDown';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import Logo2 from '../assets/logo2.svg';

function FlashCard() {
  const faqs = [
    {
      'maintext': 'Can education flashcards be used for all age groups?',
      'subtext': 'Yes, education flashcards can be tailored to different age groups and learning levels. There are flashcards designed for preschoolers, elementary school students, high school students, and even for college-level and adult learners.'
    },
    {
      'maintext': 'How do education flashcards work?',
      'subtext': 'Education flashcards work by presenting a question or prompt on one side and the corresponding answer or information on the other. Users can review the cards repeatedly, reinforcing their memory and enhancing learning through repetition.'
    },
    {
      'maintext': 'Can education flashcards be used for test preparation?',
      'subtext': 'Absolutely. Flashcards are an excellent tool for test preparation, allowing students to review key concepts, terms, and facts. They provide a quick and focused way to reinforce knowledge before exams.'
    }
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleItemClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className='ml-24 mt-6'>
      <img src={AddressLogo} alt="" />
      <div id='Heading' className='mt-4 text-3xl gradient-text'>
        Relations and Functions ( Mathematics )
      </div>
      <Title />
      <Frame />
      <span id='logo2' className='inline-block relative -left-6'>
        <img src={Logo2} alt="" />
      </span>
      <span id="createFlashcard" className='w-fit float-end mr-11 mt-14 inline-block gradient-text font-bold text-2xl'>
        <AddIcon className='text-white bg-boxBG rounded-full' /> Create Flashcard
      </span>

      <div id='faqheading' className='gradient-text text-5xl font-bold w-fit'>FAQ</div>
      <div id="faq" className="mt-6">
        {faqs.map((faq, index) => (
          <div key={index} className={`mb-4 questions ${expandedIndex === index ? 'expanded' : ''}`} onClick={() => handleItemClick(index)}>
            <div className='ml-4' style={{ maxWidth: '800px', position: 'relative' }}>
              {faq.maintext}
              {expandedIndex === index ? (
                <UpIcon className='absolute right-0 mt-1 cursor-pointer' onClick={() => handleItemClick(index)} />
              ) : (
                <DownIcon className='absolute right-0 mt-1 cursor-pointer' onClick={() => handleItemClick(index)} />
              )}
            </div>
            {expandedIndex === index && (
              <div className='ml-4 text-gray-700' style={{ maxWidth: '600px' }}>
                {faq.subtext}
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}

export default FlashCard;
