import type Emoji from "./components/OgImage/Emoji.vue";

export default defineAppConfig({
  general: {
    title: "Au Cœur des Artistes",
    logo: "",
    iconLogo: "",
  },
  site: {
    name: "Au Cœur des Artistes",
    description: "Au Cœur des Artistes, collectif d’artisans au Mans, propose créations uniques, boutique, salon de thé et ateliers pour valoriser l’artisanat local.",
    lang: "fr",
    url: "https://aucoeurdesartistes.com",
    favicon: {
      image: "",
      emoji: "❤️",
    },
  },
  directory: {
    search: {
      placeholder: "Rechercher parmi {0} créations",
      icon: "tabler:search",
      tags: {
        display: "select",
        intersection: false,
      },
    },
    grid: {
      list: false,
      emptyState: {
        text: "Aucune création trouvée dans nos archives.",
        type: "button",
        icon: "tabler:exclamation-mark",
      },
      card: {
        image: true,
        type: "shadow",
      },
      submit: {
        show: true,
        first: false,
        title: "Proposer une création",
        description: "Mettez en avant vos réalisations auprès de notre communauté.",
        hideable: true,
      },
    },
    featured: {
      showOnAllPages: true,
      showOnSide: true,
      icon: "tabler:star",
      labelForCard: "À la Une ✨",
    },
    tags: ["Bijoux", "Céramique", "Décoration", "Illustration", "Mode", "Papeterie", "Sculpture", "Textile", "Verrerie"
    ],
    tagPages: {
      title: "{0} disponibles :",
      description: "Découvrez toutes les créations dans la catégorie {0}.",
    },
  },
  header: {
    banner: {
      show: false, // Désactivé par défaut
    },
    navbar: {
      colorModeSelector: true,
      links: [
        { name: "Accueil", to: "/" },
        { name: "La Boutique", to: "/boutique" },
        { name: "Le Salon de Thé", to: "/salon" },
        { name: "Notre Atelier", to: "/atelier" },
        { name: "Les Artisans", to: "/artisans" },
        { name: "Blog", to: "/blog" },
      ],
    },
    actionButton: {
      text: "Contactez-nous",
      href: "/contact",
    },
  },
  footer: {
    description: "Au Cœur des Artistes, collectif d'artisans du Mans.",
    socials: {
      facebook: {
        link: "https://www.facebook.com/aucoeurdesartisteslemans/",
        icon: "tabler:brand-facebook",
      },
      instagram: {
        link: "https://www.instagram.com/au_coeur_des_artistes/",
        icon: "tabler:brand-instagram",
      },
    },
  },
  ui: {
    icons: {
      dark: "tabler:moon",
      light: "tabler:sun",
    },
  },
});
