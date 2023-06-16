const RadixUI = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill='none'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clipPath='url(#a)'>
      <path
        d='M11.5 24a7.7 7.7 0 1 1 0-15.4V24Zm0-24H3.8v7.7h7.7V0Zm4.8 7.7a3.8 3.8 0 1 0 0-7.7 3.8 3.8 0 0 0 0 7.7Z'
        fill='currentColor'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v24H0z' fill='#fff' />
      </clipPath>
    </defs>
  </svg>
);

export default RadixUI;
