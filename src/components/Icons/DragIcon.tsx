import React from 'react';

interface IconProps {
  width?: number;
  height?: number;
}

const DragIcon: React.FC<IconProps> = ({ width = 12, height = 24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.57122 2.21429V2.21257L3.42837 2.21429H2.57122ZM2.57122 21.0714C3.5158 21.0714 4.28551 21.8411 4.28551 22.7857C4.28551 23.7303 3.5158 24.5 2.57122 24.5C1.62495 24.5 0.856946 23.7303 0.856946 22.7857C0.856946 21.8411 1.62495 21.0714 2.57122 21.0714ZM9.42837 21.0714C10.3729 21.0714 11.1427 21.8411 11.1427 22.7857C11.1427 23.7303 10.3729 24.5 9.42837 24.5C8.48208 24.5 7.71408 23.7303 7.71408 22.7857C7.71408 21.8411 8.48208 21.0714 9.42837 21.0714ZM2.57121 14.2143C3.51578 14.2143 4.2855 14.984 4.2855 15.9286C4.2855 16.8731 3.51578 17.6429 2.57121 17.6429C1.62493 17.6429 0.856934 16.8731 0.856934 15.9286C0.856934 14.984 1.62493 14.2143 2.57121 14.2143ZM9.42836 14.2143C10.3729 14.2143 11.1426 14.984 11.1426 15.9286C11.1426 16.8731 10.3729 17.6429 9.42836 17.6429C8.48207 17.6429 7.71407 16.8731 7.71407 15.9286C7.71407 14.984 8.48207 14.2143 9.42836 14.2143ZM2.57121 7.35713C3.51578 7.35713 4.2855 8.12685 4.2855 9.07141C4.2855 10.016 3.51578 10.7857 2.57121 10.7857C1.62493 10.7857 0.856934 10.016 0.856934 9.07141C0.856934 8.12685 1.62493 7.35713 2.57121 7.35713ZM9.42836 7.35713C10.3729 7.35713 11.1426 8.12685 11.1426 9.07141C11.1426 10.016 10.3729 10.7857 9.42836 10.7857C8.48207 10.7857 7.71407 10.016 7.71407 9.07141C7.71407 8.12685 8.48207 7.35713 9.42836 7.35713ZM2.57121 0.5C3.51578 0.5 4.2855 1.26971 4.2855 2.21429C4.2855 3.15886 3.51578 3.92858 2.57121 3.92858C1.62493 3.92858 0.856934 3.15886 0.856934 2.21429C0.856934 1.26971 1.62495 0.5 2.57121 0.5ZM9.4275 0.5C10.3721 0.5 11.1418 1.26971 11.1418 2.21429C11.1418 3.15886 10.3721 3.92858 9.4275 3.92858C8.48293 3.92858 7.71321 3.15886 7.71321 2.21429C7.71321 1.26971 8.48295 0.5 9.4275 0.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DragIcon;