import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export const MobileMenuIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_8918_227074)">
        <path d="M4.00024 6C4.00024 5.44772 4.44796 5 5.00024 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5.00024C4.44796 7 4.00024 6.55228 4.00024 6Z" />
        <path d="M4 18C4 17.4477 4.44772 17 5 17L19 17C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19L5 19C4.44772 19 4 18.5523 4 18Z" />
        <path d="M4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11H4Z" />
      </g>
      <defs>
        <clipPath id="clip0_8918_227074">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};
