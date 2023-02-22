const { createApp } = Vue;

createApp({
  data() {
    return {
      mainCompanyData: {
        generics: {
          name: "Softivus",
          url: "#",
        },
        copiright: {
          text: "Copiright ©",
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

        social:{
            facebook:{
                url:"#",
                classLogo: "fa-brands fa-facebook-f",
            },
            twitter:{
                url:"#",
                classLogo: "fa-brands fa-twitter",
            },
            instagram:{
                url:"#",
                classLogo: "fa-brands fa-instagram",
            },
        }

        Links: {
          homePage: {
            text: "Home",
            url: "#",
            header: true,
            footer: false,
          },

          portfolio: {
            text: "Portfolio",
            url: "#",
            header: true,
            footer: true,
          },
          ourProcess: {
            text: "Our Process",
            url: "#",
            header: true,
            footer: false,
          },
          pricing: {
            text: "Pricing",
            url: "#",
            header: true,
            footer: true,
          },
          blog: {
            text: "Blog",
            url: "#",
            header: true,
            footer: false,
          },
          contact: {
            text: "Contact",
            url: "#",
            header: true,
            footer: true,
          },
        },
      },
    };
  },
}).mount("#app");
