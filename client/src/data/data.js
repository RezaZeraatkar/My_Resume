import {
  faBriefcase,
  faGlobe,
  faGraduationCap,
  faCode,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";

export default () => [
  {
    icon: faBriefcase,
    header: "Skills",
    Skills: [
      {
        skillName: "ReactJS/Redux",
        Level: "90%"
      },
      {
        skillName: "Javascript",
        Level: "90%"
      },
      {
        skillName: "JQuery",
        Level: "100%"
      },
      {
        skillName: "Bootstrap",
        Level: "100%"
      },
      {
        skillName: "NodeJS",
        Level: "50%"
      },
      {
        skillName: "Express",
        Level: "50%"
      },
      {
        skillName: "MySQL/PostgeSQL/MonogDB",
        Level: "50%"
      },
      {
        skillName:
          "familarity with Desing Patterns and Modular Programming in js",
        Level: "50%"
      },
      {
        skillName: "HTML",
        Level: "90%"
      },
      {
        skillName: "CSS/SCSS",
        Level: "90%"
      },
      {
        skillName: "Docker",
        Level: "90%"
      },
      {
        skillName: "‫‪Git‬‬",
        Level: "80%"
      },
      {
        skillName: "CI/CD",
        Level: "90%"
      },
      {
        skillName: "Python",
        Level: "90%"
      },
      {
        skillName: "Data Science",
        Level: "90%"
      },
      {
        skillName: "Machine Learning",
        Level: "90%"
      },
      {
        skillName: "Natural Language Processing",
        Level: "90%"
      }
    ]
  },
  [
    {
      icon: faGlobe,
      header: "Languages",
      Languages: [
        {
          skillName: "English",
          icon: faCheckCircle,
          skillType: [
            {
              skill: "Reading",
              Level: "99%"
            },
            {
              skill: "Writing",
              Level: "90%"
            },
            {
              skill: "Speaking",
              Level: "90%"
            },
            {
              skill: "Listening",
              Level: "99%"
            }
          ]
        }
      ]
    },
    {
      icon: faGraduationCap,
      header: "Education",
      Education: [
        {
          university: "at Iran University Of Science and Technology (Tehran)",
          level: "M.Sc",
          field: "E-Commerce",
          startAt: "1396",
          endAt: "1399"
        },
        {
          university: "at Birjand University Of Technology (Iran)",
          level: "B.Sc",
          field: "Information Technology (IT)",
          startAt: "1390",
          endAt: "1395"
        }
      ]
    },
    {
      icon: faCode,
      header: "Portfolio",
      Portfolio: [
        {
          sampleworkName: "name of the sample work",
          url: "www.sampleworkUrl"
        }
      ]
    }
  ]
];
