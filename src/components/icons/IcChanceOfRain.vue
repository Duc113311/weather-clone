<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_849_66805)">
      <path
        d="M8 19C8 20.1046 8.89543 21 10 21C11.1046 21 12 20.1046 12 19V11M12 11C13.1256 11 14.1643 11.3719 15 11.9996C15.8357 11.3719 16.8744 11 18 11C19.1258 11 20.1643 11.3721 21 12C21 10.6615 20.7078 9.39123 20.1837 8.24952M12 11C10.8744 11 9.83566 11.3719 9 11.9996C8.16434 11.3719 7.12561 11 6 11C4.87439 11 3.83566 11.3723 3 12C3 7.02944 7.02944 3 12 3C12.4557 3 12.9034 3.03386 13.3409 3.0992"
        stroke="var(--color-chance-of-rain)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.0253 2.76802C15.4158 3.15854 16.049 3.15854 16.4395 2.76802C16.83 2.37749 16.83 1.74433 16.4395 1.35381C16.049 0.963281 15.4158 0.963281 15.0253 1.35381C14.6348 1.74433 14.6348 2.37749 15.0253 2.76802Z"
        fill="var(--color-chance-of-rain)"
      />
      <path
        d="M15.5 5.82861L19.5 1.82861"
        stroke="var(--color-chance-of-rain)"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.5605 6.30342C18.951 6.69394 19.5842 6.69394 19.9747 6.30342C20.3652 5.91289 20.3652 5.27973 19.9747 4.88921C19.5842 4.49868 18.951 4.49868 18.5605 4.88921C18.1699 5.27973 18.1699 5.91289 18.5605 6.30342Z"
        fill="var(--color-chance-of-rain)"
      />
    </g>
    <defs>
      <clipPath id="clip0_849_66805">
        <rect width="24" height="24" fill="var(--color-chance-of-rain)" />
      </clipPath>
    </defs>
  </svg>
</template>
<script>
export default {
  name: "Ic-Chance-Of-Rain",

  props: {
    width: {
      type: String,
      default: "24", // default value if no width is provided
    },
    height: {
      type: String,
      default: "24", // default value if no height is provided
    },
  },
};
</script>
<style lang=""></style>
