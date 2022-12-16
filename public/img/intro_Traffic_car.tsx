import React from "react";

const Traffic = ({
  bgcolor,
  filter,
  matrixValues,
  feBlendValues,
}: {
  bgcolor: string;
  filter: string;
  matrixValues: string;
  feBlendValues: string;
}) => {
  return (
    <svg
      width="39"
      height="31"
      viewBox="0 0 39 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter={`url(#${filter})`}>
        <path
          d="M20.225 5H11.9225C11.4733 5 11.0792 5.29954 10.959 5.73236L9.44108 11.1969C9.38199 11.4096 9.25418 11.5968 9.07756 11.7293L6.84995 13.4C6.59815 13.5889 6.44995 13.8852 6.44995 14.2V20.675C6.44995 21.2273 6.89767 21.675 7.44995 21.675H20.225"
          stroke={bgcolor}
        />
        <path
          d="M6.45005 19.8625H6.36255C5.81026 19.8625 5.36255 20.3102 5.36255 20.8625V24.6625C5.36255 25.2148 5.81026 25.6625 6.36255 25.6625H7.62505C8.17733 25.6625 8.62505 25.2148 8.62505 24.6625V21.3125"
          stroke={bgcolor}
        />
        <path
          d="M9.35 11.67L7.83778 9.73433C7.64826 9.49175 7.35759 9.34998 7.04975 9.34998H6C5.44772 9.34998 5 9.79769 5 10.35V10.38C5 10.9323 5.44772 11.38 6 11.38H7.06912C7.3659 11.38 7.64735 11.5118 7.83735 11.7398L8.2625 12.25"
          stroke={bgcolor}
        />
        <path
          d="M20.225 6.45001H12.7726C12.3075 6.45001 11.9037 6.77076 11.7985 7.22388L11.0847 10.2989C10.9391 10.9258 11.4152 11.525 12.0588 11.525H20.225"
          stroke={bgcolor}
        />
        <path
          d="M20.225 18.4125H11.8001C11.2478 18.4125 10.8 18.8602 10.8 19.4125V19.5875C10.8 20.1398 11.2478 20.5875 11.8 20.5875H20.225"
          stroke={bgcolor}
        />
        <path
          d="M20.225 13.7H9.07002C8.62401 13.7 8.26245 14.0616 8.26245 14.5076V14.5076C8.26245 14.8836 8.52201 15.2099 8.88843 15.2945L12.864 16.2119C12.9377 16.2289 13.0132 16.2375 13.0888 16.2375H20.225"
          stroke={bgcolor}
        />
        <path d="M10.4375 13.7V15.5125" stroke={bgcolor} />
        <path d="M14.7875 13.7V16.2375" stroke={bgcolor} />
        <path
          d="M18.775 5H27.0775C27.5267 5 27.9208 5.29954 28.041 5.73236L29.5589 11.1969C29.618 11.4096 29.7458 11.5968 29.9224 11.7293L32.15 13.4C32.4019 13.5889 32.55 13.8852 32.55 14.2V20.675C32.55 21.2273 32.1023 21.675 31.55 21.675H18.775"
          stroke={bgcolor}
        />
        <path
          d="M32.55 19.8625H32.6375C33.1897 19.8625 33.6375 20.3102 33.6375 20.8625V24.6625C33.6375 25.2148 33.1897 25.6625 32.6375 25.6625H31.375C30.8227 25.6625 30.375 25.2148 30.375 24.6625V21.3125"
          stroke={bgcolor}
        />
        <path
          d="M29.65 11.67L31.1622 9.73433C31.3517 9.49175 31.6424 9.34998 31.9502 9.34998H33C33.5523 9.34998 34 9.79769 34 10.35V10.38C34 10.9323 33.5523 11.38 33 11.38H31.9309C31.6341 11.38 31.3526 11.5118 31.1627 11.7398L30.7375 12.25"
          stroke={bgcolor}
        />
        <path
          d="M18.775 6.45001H26.2274C26.6925 6.45001 27.0963 6.77076 27.2015 7.22388L27.9153 10.2989C28.0609 10.9258 27.5848 11.525 26.9412 11.525H18.775"
          stroke={bgcolor}
        />
        <path
          d="M18.775 18.4125H27.1999C27.7522 18.4125 28.2 18.8602 28.2 19.4125V19.5875C28.2 20.1398 27.7522 20.5875 27.2 20.5875H18.775"
          stroke={bgcolor}
        />
        <path
          d="M18.775 13.7H29.93C30.376 13.7 30.7375 14.0616 30.7375 14.5076V14.5076C30.7375 14.8836 30.478 15.2099 30.1116 15.2945L26.136 16.2119C26.0623 16.2289 25.9868 16.2375 25.9112 16.2375H18.775"
          stroke={bgcolor}
        />
        <path d="M28.5625 13.7V15.5125" stroke={bgcolor} />
        <path d="M24.2125 13.7V16.2375" stroke={bgcolor} />
      </g>
      <defs>
        <filter
          id={`${filter}`}
          x="0.5"
          y="0.5"
          width="38"
          height="29.6625"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values={matrixValues} />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result={`effect1_dropShadow_${feBlendValues}`}
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2={`effect1_dropShadow_${feBlendValues}`}
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Traffic;
