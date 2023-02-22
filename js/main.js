const { createApp } = Vue;

createApp({
  data() {
    return {
      // DATI DELL' AZIENDA MADRE
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
      // DATI DEL PROGETTO ANIDIO
      anidioProjectcData: {
        logo: {
          footerLogo: "footer-logo.png",
          headerLogo: "logo.png",
          url: "www.anidio.com",
        },

        headerButton: {
          class: "btn btn-primary my-light-button",
          text: "Get a Quote",
        },

        social: {
          facebook: {
            url: "https://it-it.facebook.com/",
            classLogo: "fa-brands fa-facebook-f",
          },
          twitter: {
            url: "https://twitter.com/",
            classLogo: "fa-brands fa-twitter",
          },
          instagram: {
            url: "https://www.instagram.com/",
            classLogo: "fa-brands fa-instagram",
          },
        },

        links: [
          {
            text: "Home",
            url: "home.com",
            header: true,
            footer: false,
          },
          {
            text: "About Us",
            url: "AboutUs.com",
            header: true,
            footer: true,
          },

          {
            text: "Portfolio",
            url: "Portfolio.com",
            header: true,
            footer: true,
          },
          {
            text: "Our Process",
            url: "OurProcess.com",
            header: true,
            footer: false,
          },
          {
            text: "Pricing",
            url: "Pricing.com",
            header: true,
            footer: true,
          },
          {
            text: "Blog",
            url: "Blog.com",
            header: true,
            footer: false,
          },
          {
            text: "Contact",
            url: "Contact.com",
            header: true,
            footer: true,
          },
          {
            text: "Career",
            url: "Career.com",
            header: false,
            footer: true,
          },
        ],
      },
    };
  },

  computed: {},
}).mount("#app");
