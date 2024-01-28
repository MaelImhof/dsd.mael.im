import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DSD.mael.im",
  description: "Tips and tricks about Digital System Design at EPFL",
  themeConfig: {
    siteTitle: false,
    editLink: {
      pattern: "https://github.com/MaelImhof/dsd.mael.im/edit/main/docs/:path",
      text: "Edit this page on GitHub"
    },
    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg',
      alt: 'DSD',
    },
    nav: [
      { text: 'English', link: '/en/' },
      { text: 'Français', link: '/fr/' },
    ]
  },
  locales: {
      en: {
        label: "English",
        lang: "en",
        link: "/en/",
        description: "Tips and tricks about Digital System Design at EPFL",
        themeConfig: {
          nav: [
            { text: 'Home', link: '/en/' }
          ],

          sidebar: [
            {
              text: 'Logisim',
              items: [
                { text: 'Install Logisim', link: '/en/tips/logisim/download-logisim' },
                { text: 'General Logisim UI', link: '/en/tips/logisim/general-logisim-ui' },
                { text: 'Keep It Organized', link: '/en/tips/logisim/keep-it-organized' },
                { text: 'Generate Circuits', link: '/en/tips/logisim/generate-circuits' },
                { text: 'Properties In Logisim', link: '/en/tips/logisim/properties-in-logisim' },
                { text: 'Splitter', link: '/en/tips/logisim/splitter' },
                { text: 'D-Flip-Flop', link: '/en/tips/logisim/d-flip-flop' },
                { text: 'Toggle Clock', link: '/en/tips/logisim/toggle-clock' },
                { text: 'DIP-Switch', link: '/en/tips/logisim/dip-switch' },
                { text: '7-Segment Display', link: '/en/tips/logisim/seven-segment-display' },
                { text: 'Master Subcircuits', link: '/en/tips/logisim/master-subcircuits' }
              ]
            }
          ],

          socialLinks: [
            { icon: 'github', link: 'https://github.com/MaelImhof/dsd.mael.im' }
          ]
        }
      },
      fr: {
        label: "Français",
        lang: "fr",
        link: "/fr/",
        description: "Conseils et astuces pour le cours de Digital System Design à l'EPFL",
        themeConfig: {
          nav: [
            { text: 'Accueil', link: '/fr/' },
            {
              text: 'Contributions',
              items: [
                { text: 'Comment contribuer', link: '/fr/contributing/contributing'},
                { text: 'Contributeurs/contributrices', link: '/fr/contributing/contributors'}
              ]
            }
          ],

          editLink: {
            pattern: "https://github.com/MaelImhof/dsd.mael.im/edit/main/docs/:path",
            text: "Modifier cette page sur GitHub"
          },
      
          sidebar: {
            '/fr/': [
              {
                text: 'Logisim',
                items: [
                  { text: 'Installer Logisim', link: '/fr/tips/logisim/download-logisim' },
                  { text: 'Interface générale de Logisim', link: '/fr/tips/logisim/general-logisim-ui' },
                  { text: 'Organiser ses câbles', link: '/fr/tips/logisim/keep-it-organized' },
                  { text: 'Générer des circuits', link: '/fr/tips/logisim/generate-circuits' },
                  { text: 'Propriétés dans Logisim', link: '/fr/tips/logisim/properties-in-logisim' },
                  { text: 'Le Splitter', link: '/fr/tips/logisim/splitter' },
                  { text: 'Le D-Flip-Flop', link: '/fr/tips/logisim/d-flip-flop' },
                  { text: 'Activer/Désactiver la clock', link: '/fr/tips/logisim/toggle-clock' },
                  { text: 'Le DIP-Switch', link: '/fr/tips/logisim/dip-switch' },
                  { text: 'Le 7-Segment Display', link: '/fr/tips/logisim/seven-segment-display' },
                  { text: 'Maîtriser les sous-circuits', link: '/fr/tips/logisim/master-subcircuits' }
                ]
              },
            ],
            '/fr/contributing/': [
              {
                text: 'Contribuer',
                items: [
                  { text: 'Comment contribuer', link: '/fr/contributing/contributing'},
                  { text: 'Contributeurs/contributrices', link: '/fr/contributing/contributors'}
                ]
              }
            ]
          },
      
          socialLinks: [
            { icon: 'github', link: 'https://github.com/MaelImhof/dsd.mael.im' }
          ],

          docFooter: {
            prev: "Page précédente",
            next: "Page suivante"
          },

          outline: {
            label: "Sommaire"
          },

          returnToTopLabel: "Retour en haut"
        }
      }
  },
})
