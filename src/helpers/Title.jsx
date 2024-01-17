import React, { useState } from 'react';

function Option(props) {
  const { opt, isSelected, onClick } = props;
  const optionClassName = isSelected ? 'cursor-pointer text-blue-900 border-b-2 border-blue-900 pl-1 pr-1 pb-1' : 'cursor-pointer';

  return (
    <li className={optionClassName} onClick={onClick}>
      {opt}
    </li>
  );
}

function Title() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ['Study', 'Quiz', 'Test', 'Game', 'Others'];

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  return (
    <div>
      <ul className='flex w-fit m-auto mt-8 gap-10 text-xl text-gray-500 font-medium'>
        {options.map((itr, index) => (
          <Option
            key={index}
            opt={itr}
            isSelected={selectedOption === index}
            onClick={() => handleOptionClick(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Title;
