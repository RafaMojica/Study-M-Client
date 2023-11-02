export function MenuBook({ width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "20"}
      height={height || "20"}
      viewBox="0 0 24 24"
    >
      <path
        fill="white"
        d="M21 5c-1.11-.35-2.33-.5-3.5-.5c-1.95 0-4.05.4-5.5 1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v15.5C2.45 20.4 4.55 20 6.5 20s4.05.4 5.5 1.5c1.45-1.1 3.55-1.5 5.5-1.5c1.17 0 2.39.15 3.5.5c.75.25 1.4.55 2 1V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5c-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5c1.2 0 2.4.15 3.5.5v11.5z"
      />
      <path
        fill="white"
        d="M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99zM13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99c.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24c-1.7 0-3.24.3-4.5.83zm4.5 1.84c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99c.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24z"
      />
    </svg>
  );
}

export function Clock({ width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "1em"}
      height={height || "1em"}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7h1.5Z"
      />
    </svg>
  );
}

export function Check({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
    >
      <g fill="none" fillRule="evenodd">
        <path d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01l-.184-.092Z" />
        <path
          fill={color || "currentColor"}
          d="M19.495 3.133a1 1 0 0 1 1.352.308l.99 1.51a1 1 0 0 1-.155 1.28l-.003.004l-.014.013l-.057.053l-.225.215a83.86 83.86 0 0 0-3.62 3.736c-2.197 2.416-4.806 5.578-6.562 8.646c-.49.856-1.687 1.04-2.397.301l-6.485-6.738a1 1 0 0 1 .051-1.436l1.96-1.768A1 1 0 0 1 5.6 9.2l3.309 2.481c5.168-5.097 8.1-7.053 10.586-8.548Z"
        />
      </g>
    </svg>
  );
}

export function DashIcons({ width, height }) {
  return (
    <svg
      width={width || "20"}
      height={height || "20"}
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M45 45L11.43 31.59L13.5 81H4.5L6.66 29.655L0 27L45 9L90 27L45 45ZM45 22.5C42.525 22.5 40.5 23.49 40.5 24.75C40.5 26.01 42.525 27 45 27C47.475 27 49.5 26.01 49.5 24.75C49.5 23.49 47.475 22.5 45 22.5ZM45 49.5L70.065 39.465C73.26 43.695 75.465 48.78 76.185 54.315C74.835 54.135 73.44 54 72 54C60.525 54 50.49 60.165 45 69.345C42.2134 64.6684 38.2601 60.7956 33.5271 58.1057C28.7942 55.4158 23.4439 54.0011 18 54C16.56 54 15.165 54.135 13.815 54.315C14.535 48.78 16.74 43.695 19.935 39.465L45 49.5Z"
        fill="white"
      />
    </svg>
  );
}

export function Percent({ width, height }) {
  return (
    <svg
      width={width || "20"}
      height={height || "20"}
      viewBox="0 0 67 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_118_2681)">
        <path
          d="M65.3598 20.8477C67.5408 18.6504 67.5408 15.082 65.3598 12.8848C63.1788 10.6875 59.6369 10.6875 57.4559 12.8848L1.62256 69.1348C-0.558431 71.332 -0.558431 74.9004 1.62256 77.0977C3.80355 79.2949 7.34547 79.2949 9.52646 77.0977L65.3598 20.8477ZM22.3332 22.5C22.3332 19.5163 21.1567 16.6548 19.0626 14.545C16.9684 12.4353 14.1282 11.25 11.1666 11.25C8.20498 11.25 5.3647 12.4353 3.27054 14.545C1.17639 16.6548 -9.76902e-05 19.5163 -9.76902e-05 22.5C-9.76902e-05 25.4837 1.17639 28.3452 3.27054 30.455C5.3647 32.5647 8.20498 33.75 11.1666 33.75C14.1282 33.75 16.9684 32.5647 19.0626 30.455C21.1567 28.3452 22.3332 25.4837 22.3332 22.5ZM66.9999 67.5C66.9999 64.5163 65.8234 61.6548 63.7293 59.5451C61.6351 57.4353 58.7948 56.25 55.8332 56.25C52.8717 56.25 50.0314 57.4353 47.9372 59.5451C45.8431 61.6548 44.6666 64.5163 44.6666 67.5C44.6666 70.4837 45.8431 73.3452 47.9372 75.4549C50.0314 77.5647 52.8717 78.75 55.8332 78.75C58.7948 78.75 61.6351 77.5647 63.7293 75.4549C65.8234 73.3452 66.9999 70.4837 66.9999 67.5Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_118_2681">
          <rect width="67" height="90" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Signal({ width, height }) {
  return (
    <svg
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 7C15 6.73478 15.1054 6.48043 15.2929 6.29289C15.4804 6.10536 15.7348 6 16 6C16.2652 6 16.5196 6.10536 16.7071 6.29289C16.8946 6.48043 17 6.73478 17 7V17C17 17.2652 16.8946 17.5196 16.7071 17.7071C16.5196 17.8946 16.2652 18 16 18C15.7348 18 15.4804 17.8946 15.2929 17.7071C15.1054 17.5196 15 17.2652 15 17V7ZM7 15C7 14.7348 7.10536 14.4804 7.29289 14.2929C7.48043 14.1054 7.73478 14 8 14C8.26522 14 8.51957 14.1054 8.70711 14.2929C8.89464 14.4804 9 14.7348 9 15V17C9 17.2652 8.89464 17.5196 8.70711 17.7071C8.51957 17.8946 8.26522 18 8 18C7.73478 18 7.48043 17.8946 7.29289 17.7071C7.10536 17.5196 7 17.2652 7 17V15ZM12 10C11.7348 10 11.4804 10.1054 11.2929 10.2929C11.1054 10.4804 11 10.7348 11 11V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V11C13 10.7348 12.8946 10.4804 12.7071 10.2929C12.5196 10.1054 12.2652 10 12 10Z"
        fill="black"
      />
    </svg>
  );
}

export function User({ width, height }) {
  return (
    <svg
      width={width || "20"}
      height={height || "20"}
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M45 15C48.9782 15 52.7936 16.5804 55.6066 19.3934C58.4196 22.2064 60 26.0218 60 30C60 33.9782 58.4196 37.7936 55.6066 40.6066C52.7936 43.4196 48.9782 45 45 45C41.0218 45 37.2064 43.4196 34.3934 40.6066C31.5804 37.7936 30 33.9782 30 30C30 26.0218 31.5804 22.2064 34.3934 19.3934C37.2064 16.5804 41.0218 15 45 15ZM45 52.5C61.575 52.5 75 59.2125 75 67.5V75H15V67.5C15 59.2125 28.425 52.5 45 52.5Z"
        fill="white"
      />
    </svg>
  );
}

export function Plus({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "20"}
      height={height || "20"}
      viewBox="0 0 12 12"
    >
      <path
        fill={color || "currentColor"}
        d="M6.5 1.75a.75.75 0 0 0-1.5 0V5H1.75a.75.75 0 0 0 0 1.5H5v3.25a.75.75 0 0 0 1.5 0V6.5h3.25a.75.75 0 0 0 0-1.5H6.5V1.75Z"
      />
    </svg>
  );
}

export function Pencil({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "20"}
      height={height || "20"}
      viewBox="0 0 24 24"
    >
      <path
        fill={color || "currentColor"}
        d="M8.707 19.707L18 10.414L13.586 6l-9.293 9.293a1.003 1.003 0 0 0-.263.464L3 21l5.242-1.03c.176-.044.337-.135.465-.263zM21 7.414a2 2 0 0 0 0-2.828L19.414 3a2 2 0 0 0-2.828 0L15 4.586L19.414 9L21 7.414z"
      />
    </svg>
  );
}

export function Trash({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "20"}
      height={height || "20"}
      viewBox="0 0 256 256"
    >
      <path
        fill={color || "currentColor"}
        d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM112 168a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm0-120H96v-8a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8Z"
      />
    </svg>
  );
}

export function ArrowReload({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "20"}
      height={height || "20"}
      viewBox="0 0 24 24"
    >
      <path
        fill={color || "currentColor"}
        stroke={color || "currentColor"}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M14 16h5v5M10 8H5V3m14.418 6.003A8 8 0 0 0 5.086 7.976m-.504 7.021a8 8 0 0 0 14.331 1.027"
      />
    </svg>
  );
}

export function BurgerMenu({ width, height, color }) {
  return (
    <svg
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.6309 8.00012C19.6309 8.29849 19.5123 8.58464 19.3014 8.79562C19.0904 9.00659 18.8042 9.12512 18.5059 9.12512H2.00586C1.70749 9.12512 1.42134 9.00659 1.21036 8.79562C0.999386 8.58464 0.880859 8.29849 0.880859 8.00012C0.880859 7.70175 0.999386 7.41561 1.21036 7.20463C1.42134 6.99365 1.70749 6.87512 2.00586 6.87512H18.5059C18.8042 6.87512 19.0904 6.99365 19.3014 7.20463C19.5123 7.41561 19.6309 7.70175 19.6309 8.00012ZM2.00586 3.12512H18.5059C18.8042 3.12512 19.0904 3.0066 19.3014 2.79562C19.5123 2.58464 19.6309 2.29849 19.6309 2.00012C19.6309 1.70175 19.5123 1.41561 19.3014 1.20463C19.0904 0.993648 18.8042 0.875122 18.5059 0.875122H2.00586C1.70749 0.875122 1.42134 0.993648 1.21036 1.20463C0.999386 1.41561 0.880859 1.70175 0.880859 2.00012C0.880859 2.29849 0.999386 2.58464 1.21036 2.79562C1.42134 3.0066 1.70749 3.12512 2.00586 3.12512ZM18.5059 12.8751H2.00586C1.70749 12.8751 1.42134 12.9936 1.21036 13.2046C0.999386 13.4156 0.880859 13.7018 0.880859 14.0001C0.880859 14.2985 0.999386 14.5846 1.21036 14.7956C1.42134 15.0066 1.70749 15.1251 2.00586 15.1251H18.5059C18.8042 15.1251 19.0904 15.0066 19.3014 14.7956C19.5123 14.5846 19.6309 14.2985 19.6309 14.0001C19.6309 13.7018 19.5123 13.4156 19.3014 13.2046C19.0904 12.9936 18.8042 12.8751 18.5059 12.8751Z"
        fill={color || "#FAF2F2"}
      />
    </svg>
  );
}

export function Heart({ width, height }) {
  return (
    <svg
      width={width || "1em"}
      height={height || "1em"}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.06909 11.2953L7 11.3626L6.924 11.2953C3.64218 8.39132 1.47273 6.47109 1.47273 4.5239C1.47273 3.17636 2.50909 2.16571 3.89091 2.16571C4.95491 2.16571 5.99128 2.83948 6.35746 3.7558H7.64255C8.00873 2.83948 9.04509 2.16571 10.1091 2.16571C11.4909 2.16571 12.5273 3.17636 12.5273 4.5239C12.5273 6.47109 10.3578 8.39132 7.06909 11.2953ZM10.1091 0.818176C8.90691 0.818176 7.75309 1.36393 7 2.21961C6.24691 1.36393 5.09309 0.818176 3.89091 0.818176C1.76291 0.818176 0.0909119 2.44196 0.0909119 4.5239C0.0909119 7.064 2.44 9.14594 5.99819 12.2924L7 13.1818L8.00182 12.2924C11.56 9.14594 13.9091 7.064 13.9091 4.5239C13.9091 2.44196 12.2371 0.818176 10.1091 0.818176Z"
        fill="#A31616"
      />
    </svg>
  );
}

export function CartShopPlus() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5111 14.1778C10.8412 14.1778 11.1577 14.3089 11.3911 14.5423C11.6244 14.7757 11.7556 15.0922 11.7556 15.4222C11.7556 15.7523 11.6244 16.0688 11.3911 16.3022C11.1577 16.5356 10.8412 16.6667 10.5111 16.6667C10.1811 16.6667 9.86454 16.5356 9.63116 16.3022C9.39778 16.0688 9.26667 15.7523 9.26667 15.4222C9.26667 14.7316 9.82045 14.1778 10.5111 14.1778ZM0.555557 4.22223H2.59022L3.17511 5.46667H12.3778C12.5428 5.46667 12.7011 5.53223 12.8178 5.64892C12.9344 5.76561 13 5.92387 13 6.0889C13 6.19467 12.9689 6.30045 12.9253 6.40001L10.6978 10.4258C10.4862 10.8053 10.0756 11.0667 9.60889 11.0667H4.97334L4.41334 12.0809L4.39467 12.1556C4.39467 12.1968 4.41106 12.2364 4.44023 12.2656C4.4694 12.2947 4.50897 12.3111 4.55022 12.3111H11.7556V13.5556H4.28889C3.95884 13.5556 3.64231 13.4245 3.40894 13.1911C3.17556 12.9577 3.04445 12.6412 3.04445 12.3111C3.04445 12.0933 3.10045 11.888 3.19378 11.7138L4.04 10.1893L1.8 5.46667H0.555557V4.22223ZM4.28889 14.1778C4.61894 14.1778 4.93547 14.3089 5.16885 14.5423C5.40222 14.7757 5.53334 15.0922 5.53334 15.4222C5.53334 15.7523 5.40222 16.0688 5.16885 16.3022C4.93547 16.5356 4.61894 16.6667 4.28889 16.6667C3.95884 16.6667 3.64231 16.5356 3.40894 16.3022C3.17556 16.0688 3.04445 15.7523 3.04445 15.4222C3.04445 14.7316 3.59822 14.1778 4.28889 14.1778ZM9.88889 9.82223L11.6187 6.71112H3.75378L5.22222 9.82223H9.88889Z"
        fill="#E7DEDE"
      />
      <path
        d="M13.5185 3.96294C13.381 3.96294 13.2491 3.90831 13.1519 3.81107C13.0546 3.71383 13 3.58194 13 3.44442C13 3.3069 13.0546 3.17502 13.1519 3.07777C13.2491 2.98053 13.381 2.9259 13.5185 2.9259H18.7037C18.8412 2.9259 18.9731 2.98053 19.0704 3.07777C19.1676 3.17502 19.2222 3.3069 19.2222 3.44442C19.2222 3.58194 19.1676 3.71383 19.0704 3.81107C18.9731 3.90831 18.8412 3.96294 18.7037 3.96294H13.5185Z"
        fill="white"
      />
      <path
        d="M15.5926 0.851831C15.5926 0.714312 15.6472 0.582425 15.7445 0.485184C15.8417 0.387943 15.9736 0.333313 16.1111 0.333313C16.2486 0.333313 16.3805 0.387943 16.4778 0.485184C16.575 0.582425 16.6296 0.714312 16.6296 0.851831V6.03702C16.6296 6.17454 16.575 6.30642 16.4778 6.40366C16.3805 6.50091 16.2486 6.55554 16.1111 6.55554C15.9736 6.55554 15.8417 6.50091 15.7445 6.40366C15.6472 6.30642 15.5926 6.17454 15.5926 6.03702V0.851831Z"
        fill="white"
      />
    </svg>
  );
}

export function UilArrow1({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path
        fill={color || "currentColor"}
        d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"
      />
    </svg>
  );
}

export function UilArrow2({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path
        fill={color || "currentColor"}
        d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"
      />
    </svg>
  );
}

export function CartShopSimple({ width, height }) {
  return (
    <svg
      width={width || "20"}
      height={height || "20"}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9475 11.3971C11.3052 11.3971 11.6483 11.5381 11.9013 11.789C12.1542 12.04 12.2963 12.3804 12.2963 12.7353C12.2963 13.0902 12.1542 13.4306 11.9013 13.6816C11.6483 13.9325 11.3052 14.0735 10.9475 14.0735C10.5898 14.0735 10.2467 13.9325 9.9938 13.6816C9.74085 13.4306 9.59875 13.0902 9.59875 12.7353C9.59875 11.9926 10.199 11.3971 10.9475 11.3971ZM0.157288 0.691177H2.36254L2.99647 2.02941H12.9707C13.1496 2.02941 13.3211 2.09991 13.4476 2.22539C13.574 2.35088 13.6451 2.52107 13.6451 2.69853C13.6451 2.81228 13.6114 2.92603 13.5642 3.03309L11.1498 7.36228C10.9206 7.77044 10.4755 8.05147 9.96967 8.05147H4.94546L4.33851 9.14213L4.31828 9.22243C4.31828 9.26679 4.33604 9.30934 4.36766 9.34071C4.39927 9.37208 4.44216 9.38971 4.48687 9.38971H12.2963V10.7279H4.20363C3.84591 10.7279 3.50284 10.5869 3.2499 10.336C2.99695 10.085 2.85485 9.74463 2.85485 9.38971C2.85485 9.15551 2.91554 8.93471 3.0167 8.74735L3.93387 7.10801L1.50607 2.02941H0.157288V0.691177ZM4.20363 11.3971C4.56135 11.3971 4.90441 11.5381 5.15736 11.789C5.41031 12.04 5.55241 12.3804 5.55241 12.7353C5.55241 13.0902 5.41031 13.4306 5.15736 13.6816C4.90441 13.9325 4.56135 14.0735 4.20363 14.0735C3.84591 14.0735 3.50284 13.9325 3.2499 13.6816C2.99695 13.4306 2.85485 13.0902 2.85485 12.7353C2.85485 11.9926 3.45506 11.3971 4.20363 11.3971ZM10.2731 6.71324L12.1479 3.36765H3.62365L5.21521 6.71324H10.2731Z"
        fill="#F7EDED"
      />
    </svg>
  );
}

export function Arrow({ width, height, color }) {
  return (
    <svg
      width={width || "16"}
      height={height || "12"}
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.23121 0.278381C9.35228 0.177385 9.49208 0.101239 9.6426 0.0542964C9.79312 0.00735364 9.95141 -0.00946573 10.1084 0.00479903C10.2655 0.0190638 10.4181 0.0641332 10.5577 0.137432C10.6973 0.21073 10.8211 0.31082 10.922 0.431981L14.9216 5.23198C15.027 5.35241 15.1072 5.49269 15.1575 5.64458C15.2079 5.79646 15.2273 5.95688 15.2147 6.1164C15.2022 6.27592 15.1578 6.43131 15.0843 6.57343C15.0108 6.71555 14.9096 6.84154 14.7867 6.94397C14.6637 7.04641 14.5216 7.12323 14.3685 7.16991C14.2155 7.21659 14.0546 7.23219 13.8955 7.21579C13.7363 7.19939 13.582 7.15133 13.4417 7.07442C13.3014 6.99752 13.1779 6.89333 13.0784 6.76798L9.07761 1.96798C8.87401 1.72352 8.77582 1.40822 8.80462 1.09138C8.83342 0.774549 8.98686 0.48212 9.23121 0.278381Z"
        fill={color || "black"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.23121 11.7216C8.98686 11.5178 8.83342 11.2254 8.80462 10.9086C8.77582 10.5917 8.87401 10.2764 9.07761 10.032L13.0784 5.23196C13.1779 5.10661 13.3014 5.00242 13.4417 4.92552C13.582 4.84861 13.7363 4.80055 13.8955 4.78415C14.0546 4.76775 14.2155 4.78335 14.3685 4.83003C14.5216 4.87671 14.6637 4.95353 14.7867 5.05597C14.9096 5.1584 15.0108 5.28439 15.0843 5.42651C15.1578 5.56863 15.2022 5.72402 15.2147 5.88354C15.2273 6.04305 15.2079 6.20347 15.1575 6.35536C15.1072 6.50724 15.027 6.64753 14.9216 6.76796L10.922 11.568C10.8211 11.6891 10.6973 11.7892 10.5577 11.8625C10.4181 11.9358 10.2655 11.9809 10.1084 11.9951C9.95141 12.0094 9.79312 11.9926 9.6426 11.9456C9.49208 11.8987 9.35228 11.8226 9.23121 11.7216Z"
        fill={color || "black"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.8 5.99999C12.8 6.31825 12.6736 6.62347 12.4485 6.84852C12.2235 7.07356 11.9182 7.19999 11.6 7.19999L1.99999 7.19999C1.68173 7.19999 1.3765 7.07356 1.15146 6.84851C0.926416 6.62347 0.799987 6.31825 0.799987 5.99999C0.799987 5.68173 0.926416 5.3765 1.15146 5.15146C1.3765 4.92642 1.68173 4.79999 1.99999 4.79999L11.6 4.79999C11.9182 4.79999 12.2235 4.92642 12.4485 5.15146C12.6736 5.3765 12.8 5.68173 12.8 5.99999Z"
        fill={color || "black"}
      />
    </svg>
  );
}

export function Close({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "20"}
      height={height || "20"}
      viewBox="0 0 24 24"
    >
      <path
        fill={color || "currentColor"}
        d="m16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z"
      />
    </svg>
  );
}

export function BurgerDots({ width, height, color }) {
  return (
    <svg
      width={width || "40"}
      height={height || "40"}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66667 21.6667C7.58333 21.6667 8.33333 20.9167 8.33333 20C8.33333 19.0833 7.58333 18.3333 6.66667 18.3333C5.75 18.3333 5 19.0833 5 20C5 20.9167 5.75 21.6667 6.66667 21.6667ZM6.66667 28.3333C7.58333 28.3333 8.33333 27.5833 8.33333 26.6667C8.33333 25.75 7.58333 25 6.66667 25C5.75 25 5 25.75 5 26.6667C5 27.5833 5.75 28.3333 6.66667 28.3333ZM6.66667 15C7.58333 15 8.33333 14.25 8.33333 13.3333C8.33333 12.4167 7.58333 11.6667 6.66667 11.6667C5.75 11.6667 5 12.4167 5 13.3333C5 14.25 5.75 15 6.66667 15ZM13.3333 21.6667H33.3333C34.25 21.6667 35 20.9167 35 20C35 19.0833 34.25 18.3333 33.3333 18.3333H13.3333C12.4167 18.3333 11.6667 19.0833 11.6667 20C11.6667 20.9167 12.4167 21.6667 13.3333 21.6667ZM13.3333 28.3333H33.3333C34.25 28.3333 35 27.5833 35 26.6667C35 25.75 34.25 25 33.3333 25H13.3333C12.4167 25 11.6667 25.75 11.6667 26.6667C11.6667 27.5833 12.4167 28.3333 13.3333 28.3333ZM11.6667 13.3333C11.6667 14.25 12.4167 15 13.3333 15H33.3333C34.25 15 35 14.25 35 13.3333C35 12.4167 34.25 11.6667 33.3333 11.6667H13.3333C12.4167 11.6667 11.6667 12.4167 11.6667 13.3333ZM6.66667 21.6667C7.58333 21.6667 8.33333 20.9167 8.33333 20C8.33333 19.0833 7.58333 18.3333 6.66667 18.3333C5.75 18.3333 5 19.0833 5 20C5 20.9167 5.75 21.6667 6.66667 21.6667ZM6.66667 28.3333C7.58333 28.3333 8.33333 27.5833 8.33333 26.6667C8.33333 25.75 7.58333 25 6.66667 25C5.75 25 5 25.75 5 26.6667C5 27.5833 5.75 28.3333 6.66667 28.3333ZM6.66667 15C7.58333 15 8.33333 14.25 8.33333 13.3333C8.33333 12.4167 7.58333 11.6667 6.66667 11.6667C5.75 11.6667 5 12.4167 5 13.3333C5 14.25 5.75 15 6.66667 15ZM13.3333 21.6667H33.3333C34.25 21.6667 35 20.9167 35 20C35 19.0833 34.25 18.3333 33.3333 18.3333H13.3333C12.4167 18.3333 11.6667 19.0833 11.6667 20C11.6667 20.9167 12.4167 21.6667 13.3333 21.6667ZM13.3333 28.3333H33.3333C34.25 28.3333 35 27.5833 35 26.6667C35 25.75 34.25 25 33.3333 25H13.3333C12.4167 25 11.6667 25.75 11.6667 26.6667C11.6667 27.5833 12.4167 28.3333 13.3333 28.3333ZM11.6667 13.3333C11.6667 14.25 12.4167 15 13.3333 15H33.3333C34.25 15 35 14.25 35 13.3333C35 12.4167 34.25 11.6667 33.3333 11.6667H13.3333C12.4167 11.6667 11.6667 12.4167 11.6667 13.3333Z"
        fill={color || "currentColor"}
      />
    </svg>
  );
}

export function Vector({ width, height, color }) {
  return (
    <svg
      width={width || "35"}
      height={height || "21"}
      viewBox="0 0 35 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.1094 4.14062H1.89062C1.43064 4.14062 0.989495 3.9579 0.664237 3.63264C0.338978 3.30738 0.15625 2.86623 0.15625 2.40625C0.15625 1.94627 0.338978 1.50512 0.664237 1.17986C0.989495 0.854603 1.43064 0.671875 1.89062 0.671875H33.1094C33.5694 0.671875 34.0105 0.854603 34.3358 1.17986C34.661 1.50512 34.8438 1.94627 34.8438 2.40625C34.8438 2.86623 34.661 3.30738 34.3358 3.63264C34.0105 3.9579 33.5694 4.14062 33.1094 4.14062ZM27.3281 12.2344H7.67188C7.21189 12.2344 6.77074 12.0516 6.44549 11.7264C6.12023 11.4011 5.9375 10.96 5.9375 10.5C5.9375 10.04 6.12023 9.59887 6.44549 9.27361C6.77074 8.94835 7.21189 8.76562 7.67188 8.76562H27.3281C27.7881 8.76562 28.2293 8.94835 28.5545 9.27361C28.8798 9.59887 29.0625 10.04 29.0625 10.5C29.0625 10.96 28.8798 11.4011 28.5545 11.7264C28.2293 12.0516 27.7881 12.2344 27.3281 12.2344ZM20.3906 20.3281H14.6094C14.1494 20.3281 13.7082 20.1454 13.383 19.8201C13.0577 19.4949 12.875 19.0537 12.875 18.5938C12.875 18.1338 13.0577 17.6926 13.383 17.3674C13.7082 17.0421 14.1494 16.8594 14.6094 16.8594H20.3906C20.8506 16.8594 21.2918 17.0421 21.617 17.3674C21.9423 17.6926 22.125 18.1338 22.125 18.5938C22.125 19.0537 21.9423 19.4949 21.617 19.8201C21.2918 20.1454 20.8506 20.3281 20.3906 20.3281Z"
        fill={color || "black"}
      />
    </svg>
  );
}

export function Share({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "20"}
      height={height || "20"}
      viewBox="0 0 24 24"
    >
      <path
        fill={color || "currentColor"}
        d="M18 22q-1.25 0-2.125-.875T15 19q0-.175.025-.363t.075-.337l-7.05-4.1q-.425.375-.95.588T6 15q-1.25 0-2.125-.875T3 12q0-1.25.875-2.125T6 9q.575 0 1.1.213t.95.587l7.05-4.1q-.05-.15-.075-.337T15 5q0-1.25.875-2.125T18 2q1.25 0 2.125.875T21 5q0 1.25-.875 2.125T18 8q-.575 0-1.1-.212t-.95-.588L8.9 11.3q.05.15.075.338T9 12q0 .175-.025.363T8.9 12.7l7.05 4.1q.425-.375.95-.587T18 16q1.25 0 2.125.875T21 19q0 1.25-.875 2.125T18 22Z"
      />
    </svg>
  );
}

export function Download({ width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "20"}
      height={height || "20"}
      viewBox="0 0 24 24"
    >
      <g fill="none">
        <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
        <path
          fill="currentColor"
          d="M8 5v2H5v13h14V7h-3V5h3a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3Zm4-3a1 1 0 0 1 1 1v10.828L14.828 12a1 1 0 1 1 1.415 1.414l-3.36 3.359a1.25 1.25 0 0 1-1.767 0l-3.359-3.359A1 1 0 1 1 9.172 12L11 13.828V3a1 1 0 0 1 1-1Z"
        />
      </g>
    </svg>
  );
}

export function Save({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "16"}
      height={height || "16"}
      viewBox="0 0 16 16"
    >
      <path
        fill={color || "currentColor"}
        fill-rule="evenodd"
        d="m13.353 1.146l1.5 1.5L15 3v11.5l-.5.5h-13l-.5-.5v-13l.5-.5H13l.353.146zM2 2v12h12V3.208L12.793 2H11v4H4V2H2zm6 0v3h2V2H8z"
        clip-rule="evenodd"
      />
    </svg>
  );
}

export function CartShopPlusBgBlack() {
  return (
    <svg
      width="69"
      height="69"
      viewBox="0 0 69 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1667_500)">
        <circle cx="34.5" cy="30.5" r="30.5" fill="#1E1E1E" />
      </g>
      <path
        d="M36.2622 40.3955C36.8375 40.3955 37.3891 40.6241 37.7959 41.0308C38.2026 41.4375 38.4311 41.9892 38.4311 42.5644C38.4311 43.1397 38.2026 43.6913 37.7959 44.0981C37.3891 44.5048 36.8375 44.7333 36.2622 44.7333C35.687 44.7333 35.1354 44.5048 34.7286 44.0981C34.3219 43.6913 34.0934 43.1397 34.0934 42.5644C34.0934 41.3607 35.0585 40.3955 36.2622 40.3955ZM18.9111 23.0444H22.4573L23.4766 25.2133H39.5156C39.8032 25.2133 40.079 25.3276 40.2824 25.5309C40.4858 25.7343 40.6 26.0102 40.6 26.2978C40.6 26.4821 40.5458 26.6665 40.4699 26.84L36.5876 33.8563C36.2189 34.5179 35.5031 34.9733 34.6898 34.9733H26.6107L25.6347 36.741L25.6022 36.8711C25.6022 36.943 25.6307 37.012 25.6816 37.0628C25.7324 37.1136 25.8014 37.1422 25.8733 37.1422H38.4311V39.3111H25.4178C24.8426 39.3111 24.2909 39.0826 23.8842 38.6758C23.4774 38.2691 23.2489 37.7174 23.2489 37.1422C23.2489 36.7627 23.3465 36.4048 23.5092 36.1011L24.984 33.4443L21.08 25.2133H18.9111V23.0444ZM25.4178 40.3955C25.993 40.3955 26.5447 40.6241 26.9514 41.0308C27.3582 41.4375 27.5867 41.9892 27.5867 42.5644C27.5867 43.1397 27.3582 43.6913 26.9514 44.0981C26.5447 44.5048 25.993 44.7333 25.4178 44.7333C24.8426 44.7333 24.2909 44.5048 23.8842 44.0981C23.4774 43.6913 23.2489 43.1397 23.2489 42.5644C23.2489 41.3607 24.2141 40.3955 25.4178 40.3955ZM35.1778 32.8044L38.1926 27.3822H24.4852L27.0445 32.8044H35.1778Z"
        fill="#E7DEDE"
      />
      <path
        d="M41.5038 22.5926C41.2641 22.5926 41.0343 22.4974 40.8648 22.3279C40.6953 22.1584 40.6001 21.9286 40.6001 21.6889C40.6001 21.4492 40.6953 21.2194 40.8648 21.0499C41.0343 20.8804 41.2641 20.7852 41.5038 20.7852H50.5408C50.7805 20.7852 51.0104 20.8804 51.1799 21.0499C51.3493 21.2194 51.4445 21.4492 51.4445 21.6889C51.4445 21.9286 51.3493 22.1584 51.1799 22.3279C51.0104 22.4974 50.7805 22.5926 50.5408 22.5926H41.5038Z"
        fill="#EFE3E3"
      />
      <path
        d="M45.1187 17.1704C45.1187 16.9307 45.2139 16.7008 45.3833 16.5314C45.5528 16.3619 45.7827 16.2667 46.0224 16.2667C46.262 16.2667 46.4919 16.3619 46.6614 16.5314C46.8308 16.7008 46.9261 16.9307 46.9261 17.1704V26.2074C46.9261 26.4471 46.8308 26.6769 46.6614 26.8464C46.4919 27.0159 46.262 27.1111 46.0224 27.1111C45.7827 27.1111 45.5528 27.0159 45.3833 26.8464C45.2139 26.6769 45.1187 26.4471 45.1187 26.2074V17.1704Z"
        fill="#EFE3E3"
      />
      <defs>
        <filter
          id="filter0_d_1667_500"
          x="0"
          y="0"
          width="69"
          height="69"
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
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1667_500"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1667_500"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
