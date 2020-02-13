import React from "react";

export const ArrowLeft = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <path
        d="M6.13868 12.3458L17.1388 23.8459C17.3301 24.0442 17.6466 24.053 17.8458 23.8615C18.045 23.6706 18.0518 23.3542 17.8614 23.1545L7.19239 12.0001L17.8614 0.84568C18.0519 0.64599 18.045 0.329582 17.8458 0.138659C17.7491 0.0458927 17.6241 1.90735e-06 17.5001 1.90735e-06C17.3683 1.90735e-06 17.2374 0.0517502 17.1388 0.154314L6.13868 11.6544C5.95408 11.8478 5.95408 12.1525 6.13868 12.3458Z"
        fill={props.color ? props.color : "#303C42"}
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          x="24"
          y="24"
          width="24"
          height="24"
          transform="rotate(-180 24 24)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export const ArrowRight = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <path
        d="M17.8614 11.6542L6.86128 0.154077C6.66988 -0.0441597 6.35347 -0.0529723 6.15425 0.138467C5.95503 0.329391 5.94819 0.6458 6.13864 0.84549L16.8076 11.9999L6.1386 23.1543C5.94814 23.354 5.95499 23.6704 6.15421 23.8613C6.25091 23.9541 6.37588 24 6.49991 24C6.63177 24 6.7626 23.9482 6.86123 23.8457L17.8614 12.3456C18.0459 12.1522 18.0459 11.8475 17.8614 11.6542Z"
        fill={props.color ? props.color : "#303C42"}
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const Phone = props => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <path
        d="M18.5117 14.0137L16.1497 11.6518C15.4985 11.0006 14.4389 11.0006 13.7878 11.6518L12.7141 12.7254C12.2208 13.2187 11.4181 13.2186 10.9249 12.7256L6.27139 8.06807C5.7769 7.57359 5.77683 6.77325 6.27139 6.27869C6.44432 6.10576 6.94088 5.6092 7.345 5.20508C7.99334 4.55678 8.00239 3.50046 7.34437 2.84251L4.98302 0.488583C4.33182 -0.162576 3.27224 -0.162576 2.62279 0.486876C2.1368 0.968631 1.98005 1.12405 1.76214 1.34006C-0.586142 3.68831 -0.586142 7.50921 1.76203 9.85738L9.13538 17.2346C11.4892 19.5884 15.2988 19.5886 17.6528 17.2346L18.5117 16.3757C19.1629 15.7245 19.1629 14.6649 18.5117 14.0137ZM3.40839 1.2759C3.62545 1.05884 3.97858 1.05881 4.19634 1.27649L6.55769 3.63042C6.77526 3.84799 6.77526 4.20012 6.55769 4.41773L6.16399 4.81139L3.01674 1.66414L3.40839 1.2759ZM9.92284 16.4474L2.54946 9.0701C0.732653 7.2533 0.632792 4.40051 2.24234 2.4644L5.38046 5.60252C4.55589 6.53727 4.59025 7.96164 5.48389 8.85528L10.1373 13.5125C10.1373 13.5126 10.1374 13.5127 10.1374 13.5127C11.0301 14.4054 12.4544 14.442 13.3903 13.6163L16.5285 16.7545C14.5985 18.3613 11.7522 18.2767 9.92284 16.4474ZM17.7244 15.5884L17.3307 15.9821L14.1815 12.8327L14.5751 12.4391C14.7922 12.222 15.1453 12.222 15.3624 12.4391L17.7244 14.8011C17.9415 15.0182 17.9415 15.3714 17.7244 15.5884Z"
        fill={props.color ? props.color : "#FD8369"}
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="19" height="19" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const Pin = props => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.5 0C5.57104 0 2.375 3.19642 2.375 7.125C2.375 12.3814 8.94878 18.6289 9.22866 18.8925C9.30518 18.964 9.40259 19 9.5 19C9.59741 19 9.69482 18.964 9.77138 18.8925C10.0512 18.6289 16.625 12.3814 16.625 7.125C16.625 3.19642 13.429 0 9.5 0ZM9.5 18.0502C8.25606 16.8082 3.16665 11.4606 3.16665 7.125C3.16665 3.63286 6.00786 0.791654 9.5 0.791654C12.9921 0.791654 15.8333 3.63286 15.8333 7.125C15.8333 11.4606 10.7439 16.8082 9.5 18.0502Z"
      fill={props.color ? props.color : "#FD8369"}
    />
    <path
      d="M9.49997 3.16675C7.31746 3.16675 5.54163 4.94258 5.54163 7.12509C5.54163 9.30761 7.3175 11.0834 9.49997 11.0834C11.6824 11.0834 13.4583 9.30761 13.4583 7.12509C13.4583 4.94258 11.6825 3.16675 9.49997 3.16675ZM9.49997 10.2917C7.75349 10.2917 6.33332 8.87116 6.33332 7.12509C6.33332 5.37902 7.75353 3.95844 9.49997 3.95844C11.2464 3.95844 12.6666 5.37902 12.6666 7.12509C12.6666 8.87116 11.2465 10.2917 9.49997 10.2917Z"
      fill={props.color ? props.color : "#FD8369"}
    />
  </svg>
);

export const SocialGithub = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 0C5.40894 0 0 5.40894 0 12C0 17.6245 3.94666 22.7336 9.1875 24V20.0299C8.66821 20.1436 8.19031 20.1469 7.66168 19.9911C6.95251 19.7818 6.37628 19.3094 5.94855 18.5891C5.6759 18.1291 5.19269 17.6303 4.6886 17.6669L4.565 16.2662C5.65503 16.1728 6.59802 16.9303 7.15778 17.8707C7.40643 18.2889 7.69263 18.5341 8.05994 18.6425C8.41498 18.7471 8.7962 18.6969 9.24042 18.54C9.35193 17.6506 9.75934 17.3177 10.0671 16.849V16.8483C6.94153 16.3821 5.69586 14.7239 5.20148 13.415C4.54633 11.6772 4.89789 9.5061 6.0564 8.13409C6.07892 8.10736 6.11957 8.03741 6.10382 7.98853C5.57263 6.38397 6.21991 5.05664 6.24371 4.91583C6.85675 5.09711 6.95636 4.73346 8.90662 5.91833L9.24371 6.12085C9.3847 6.2049 9.34039 6.15692 9.48138 6.1463C10.2957 5.92511 11.1541 5.80298 11.9998 5.79199C12.852 5.80298 13.7049 5.92511 14.5529 6.15527L14.662 6.16626C14.6525 6.16479 14.6917 6.1593 14.7574 6.12012C17.1936 4.64447 17.1061 5.12677 17.7594 4.91437C17.783 5.05536 18.4217 6.4043 17.8962 7.98853C17.8253 8.20679 20.0083 10.2057 18.7983 13.4145C18.304 14.7239 17.0585 16.3821 13.9329 16.8483V16.849C14.3335 17.4597 14.8149 17.7845 14.8123 19.0443V24C20.0533 22.7336 23.9998 17.6245 23.9998 12C24 5.40894 18.5911 0 12 0V0Z"
      fill="#D891DA"
    />
  </svg>
);

export const SocialInstagram = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0)">
      <path
        d="M20.4844 0H3.51562C1.57727 0 0 1.57727 0 3.51562V20.4844C0 22.4227 1.57727 24 3.51562 24H20.4844C22.4227 24 24 22.4227 24 20.4844V3.51562C24 1.57727 22.4227 0 20.4844 0ZM12.0469 18.2812C8.55743 18.2812 5.71875 15.4426 5.71875 11.9531C5.71875 8.46368 8.55743 5.625 12.0469 5.625C15.5363 5.625 18.375 8.46368 18.375 11.9531C18.375 15.4426 15.5363 18.2812 12.0469 18.2812ZM19.0781 7.03125C17.915 7.03125 16.9688 6.08496 16.9688 4.92188C16.9688 3.75879 17.915 2.8125 19.0781 2.8125C20.2412 2.8125 21.1875 3.75879 21.1875 4.92188C21.1875 6.08496 20.2412 7.03125 19.0781 7.03125Z"
        fill="#FD8369"
      />
      <path
        d="M19.0781 4.21875C18.6901 4.21875 18.375 4.53387 18.375 4.92188C18.375 5.30988 18.6901 5.625 19.0781 5.625C19.4661 5.625 19.7812 5.30988 19.7812 4.92188C19.7812 4.53387 19.4661 4.21875 19.0781 4.21875Z"
        fill="#FD8369"
      />
      <path
        d="M12.0469 7.03125C9.33325 7.03125 7.125 9.2395 7.125 11.9531C7.125 14.6667 9.33325 16.875 12.0469 16.875C14.7605 16.875 16.9688 14.6667 16.9688 11.9531C16.9688 9.2395 14.7605 7.03125 12.0469 7.03125Z"
        fill="#FD8369"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const SocialLinkedIn = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.4844 0H3.51562C1.57727 0 0 1.57727 0 3.51562V20.4844C0 22.4227 1.57727 24 3.51562 24H20.4844C22.4227 24 24 22.4227 24 20.4844V3.51562C24 1.57727 22.4227 0 20.4844 0ZM8.48438 19.0312H5.67188V9.1875H8.48438V19.0312ZM8.48438 7.78125H5.67188V4.96875H8.48438V7.78125ZM18.3281 19.0312H15.5156V13.4062C15.5156 12.631 14.8846 12 14.1094 12C13.3341 12 12.7031 12.631 12.7031 13.4062V19.0312H9.89062V9.1875H12.7031V9.71759C13.4399 9.48853 13.9186 9.1875 14.8125 9.1875C16.7199 9.18951 18.3281 10.9006 18.3281 12.9229V19.0312Z"
      fill="#303C42"
    />
  </svg>
);

export const SocialTwitter = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0)">
      <path
        d="M8.95368 21.8457C7.91583 21.8457 6.8476 21.7617 5.77295 21.5932C3.88019 21.2962 1.96417 20.3062 1.422 20.0097L0 19.2323L1.53955 18.726C3.22247 18.1726 4.24622 17.8293 5.51349 17.2917C4.24457 16.6772 3.2666 15.5718 2.79584 14.1429L2.43768 13.0556L2.73138 13.1004C2.45288 12.8197 2.23297 12.5348 2.0625 12.2757C1.45624 11.3549 1.13525 10.2297 1.20355 9.26548L1.27094 8.31644L1.83911 8.53653C1.59943 8.0839 1.42621 7.6005 1.3244 7.09384C1.07629 5.85825 1.28394 4.54557 1.90924 3.39768L2.40418 2.48911L3.0661 3.28415C5.15955 5.79892 7.8111 7.29068 10.9581 7.72739C10.8296 6.84134 10.9259 5.98624 11.2447 5.21976C11.6158 4.3273 12.2761 3.57053 13.1536 3.0311C14.1281 2.43216 15.3098 2.14194 16.4811 2.2139C17.7239 2.29026 18.8522 2.75589 19.7483 3.56137C20.1859 3.44767 20.5084 3.32627 20.9442 3.1622C21.2064 3.06351 21.5037 2.95145 21.8758 2.82328L23.2469 2.35086L22.3528 4.90445C22.4117 4.89951 22.4725 4.8953 22.5361 4.89255L24.0002 4.82627L23.1348 6.00894C23.0852 6.07669 23.0726 6.09592 23.055 6.12247C22.9852 6.22757 22.8984 6.35831 21.7106 7.94437C21.4133 8.34153 21.2648 8.8588 21.2924 9.40116C21.3977 11.4622 21.1448 13.3269 20.5404 14.9434C19.9688 16.4727 19.0829 17.7848 17.9077 18.8434C16.4535 20.1529 14.5992 21.0496 12.3961 21.5081C11.3154 21.7329 10.1548 21.8457 8.95368 21.8457Z"
        fill="#6BD5E1"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="24.0001" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
