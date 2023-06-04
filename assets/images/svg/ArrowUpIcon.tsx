import * as React from 'react';

const ArrowUp: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <path
      fill="#1EB564"
      d="M8 2.95c.089 0 .172.014.25.041.078.028.15.075.217.142l4.4 4.4c.133.134.2.292.2.475a.65.65 0 0 1-.2.475.64.64 0 0 1-.467.2.64.64 0 0 1-.467-.2L8.667 5.217v7.466a.617.617 0 0 1-.192.467.66.66 0 0 1-.475.183.646.646 0 0 1-.475-.192.642.642 0 0 1-.192-.474v-7.45L4.067 8.483a.64.64 0 0 1-.467.2.64.64 0 0 1-.467-.2.65.65 0 0 1-.2-.475c0-.184.067-.342.2-.475l4.4-4.4a.589.589 0 0 1 .217-.142A.722.722 0 0 1 8 2.95Z"
    />
  </svg>
);
export default ArrowUp;