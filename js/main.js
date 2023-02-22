const { createApp } = Vue;

createApp({
  data() {
    return {
      mainCompanyData: {
        generics: {
          name: "Softivus",
          url: "#",
        },
        copyright: {
          text: "Copyright ©",
          year: 2023,
        },

        rightReserved: "All right reserved.",
      },

      anidioProjectcData: {
        logo: {
          footerLogo: "footer-logo.png",
          headerLogo: "logo.png",
        },

        headerButton: {
          class: "btn btn-primary my-light-button",
          text: "Get a Quote",
        },

        social: {
          facebook: {
            url: "#",
            classLogo: "fa-brands fa-facebook-f",
          },
          twitter: {
            url: "#",
            classLogo: "fa-brands fa-twitter",
          },
          instagram: {
            url: "#",
            classLogo: "fa-brands fa-instagram",
          },
        },

        links: [
          {
            text: "Home",
            url: "#",
            header: true,
            footer: false,
          },
          {
            text: "About Us",
            url: "#",
            header: true,
            footer: true,
          },

          {
            text: "Portfolio",
            url: "#",
            header: true,
            footer: true,
          },
          {
            text: "Our Process",
            url: "#",
            header: true,
            footer: false,
          },
          {
            text: "Pricing",
            url: "#",
            header: true,
            footer: true,
          },
          {
            text: "Blog",
            url: "#",
            header: true,
            footer: false,
          },
          {
            text: "Contact",
            url: "#",
            header: true,
            footer: true,
          },
          {
            text: "Career",
            url: "#",
            header: false,
            footer: true,
          },
        ],
      },
    };
  },

  computed: {},
}).mount("#app");
