// NAVBAR
export const NAVBAR_TITLE = 'Book'

// ABOUT ME
export const TITLE_CARD_1 = 'Josué Hernández'
export const CARD_1_SUBTITLE = 'Web Developer'
export const ABOUT_ME_TITLE = 'Acerca de mi'
export const ABOUT_ME_CONTENT = 'Apasionado por el desarrollo de software con gran gusto por aprender nuevas tecnologías y enfrentarme a retos que me hagan mejorar mis habilidades. Durante la carrera presenté  especial interés por el desarrollo web y la inteligencia artificial.'

export const MY_HISTORY_TITLE = 'Mi historia'
export const MY_HISTORY_CONTENT = [
  {normal: 'Cuando tenía 19 años me vi obligado a dejar la carrera de arquitectura junto con mis sueños y aspiraciones para trabajar y generar suficiente dinero para mantenerme. Entonces me di cuenta que el trabajo representa una parte sumamente significativa de la vida adulta.'},
  {normal: 'Tras 4 años de reflexión llegué a la conclusión de que no hay misión más noble que hacer de este mundo un lugar mejor. También descubrí que no hay nada más satisfactorio que trabajar por un propósito más grande que uno mismo.'},
  {strong: 'Hoy estoy seguro de que quiero poder infligir un cambio positivo significativo en la sociedad a través de la tecnología.'},
]

export const IMPORTANT_TEXT = [
  'Hoy estoy seguro de que quiero poder infligir un cambio positivo significativo en la sociedad a través de la tecnología.',
]
export const DOWNLOAD_BUTTON_TEXT = 'Descargar CV'

// SKILLS
export const TITLE_CARD_2 = 'Skills'
export const SKILLS_EXPLICATION_TITLE = 'Herramientas que domino'
export const SKILLS_EXPLICATION_CONTENT = 'A continuación se pueden ver las herramientas con las que he trabajado los últimos 4 años. Las clasifique en tres niveles de dominio: alto, medio y bajo. Favor de pasar el cursor sobre la herramienta deseada para ver el nivel de dominio.'

export const SKILLS_HIGH_SPAN = 'Alto: '
export const SKILLS_HIGH_CONTENT = 'He utilizado esta herramienta en múltiples proyectos complejos y me siento cómodo usándola.'
export const SKILLS_MEDIUM_SPAN = 'Medio: '
export const SKILLS_MEDIUM_CONTENT = 'He utilizado esta herramienta en proyectos medianos o pequeños y me siento medianamente cómodo usándola.'
export const SKILLS_LOW_SPAN = 'Bajo: '
export const SKILLS_LOW_CONTENT = 'Utilice esta herramienta en un proyecto, estoy familiarizado con ella pero puede que en un principio me tome más tiempo desarrollar y debugear.'

export const LANGUAGES_SECTION = {
  title: 'Lenguajes de programación',
  values: [
    {
      name: 'C',
      src: 'c',
      domain: 'high',
      isASalesforceSkill: false
    },
    {
      name: 'Javascript',
      src: 'javascript',
      domain: 'high',
      isASalesforceSkill: false
    },
    {
      name: 'PHP',
      src: 'php',
      domain: 'high',
      isASalesforceSkill: false
    },
    {
      name: 'Java',
      src: 'java',
      domain: 'medium',
      isASalesforceSkill: false
    },
    {
      name: 'Apex',
      src: '',
      domain: 'medium',
      isASalesforceSkill: true
    },
    {
      name: 'Phyton',
      src: 'python',
      domain: 'medium',
      isASalesforceSkill: false
    },
    {
      name: 'Ruby',
      src: 'ruby',
      domain: 'low',
      isASalesforceSkill: false
    },
    {
      name: 'HTML',
      src: 'html',
      domain: 'high',
      isASalesforceSkill: false
    },
    {
      name: 'CSS',
      src: 'css',
      domain: 'high',
      isASalesforceSkill: false
    }
  ]
}
export const FRAMEWORKS_SECTION = {
  title: 'Frameworks',
  values: [
    {
      name: 'Vue',
      src: 'vue',
      domain: 'high',
      isASalesforceSkill: false
    },
    {
      name: 'Nuxt',
      src: 'nuxt',
      domain: 'high',
      isASalesforceSkill: false
    },
    {
      name: 'Django',
      src: 'django',
      domain: 'medium',
      isASalesforceSkill: false
    },
    {
      name: 'Aura',
      src: '',
      domain: 'low',
      isASalesforceSkill: true
    },
    {
      name: 'LWC',
      src: '',
      domain: 'low',
      isASalesforceSkill: true
    },
    {
      name: 'Visualforce',
      src: '',
      domain: 'low',
      isASalesforceSkill: true
    },
    {
      name: 'Cypress',
      src: 'cypress',
      domain: 'medium',
      isASalesforceSkill: false
    },
    {
      name: 'Jest',
      src: '',
      domain: 'medium',
      isASalesforceSkill: false
    }
  ]
}
export const DATABASES_SECTION = {
  title: 'Lenguajes de consulta a BD',
  values: [
    {
      name: 'SQL',
      src: '',
      domain: 'high',
      isASalesforceSkill: false
    },
    {
      name: 'SOQL',
      src: '',
      domain: 'high',
      isASalesforceSkill: true
    },
    {
      name: 'SOSL',
      src: '',
      domain: 'low',
      isASalesforceSkill: true
    }
  ]
}
export const GITHUB_SECTION = {
  title: 'Gestores de versiones',
  values: [
    {
      name: 'GitHub',
      src: 'github-skills',
      domain: 'high',
      isASalesforceSkill: false
    },
    {
      name: 'Git',
      src: 'git',
      domain: 'high',
      isASalesforceSkill: false
    }
  ]
}
export const PROTOTYPING_SECTION = {
  title: 'Prototipado',
  values: [
    {
      name: 'Figma',
      src: '',
      domain: 'medium',
      isASalesforceSkill: false
    },
    {
      name: 'Ilustrator',
      src: '',
      domain: 'high',
      isASalesforceSkill: false
    }
  ]
}

// PROJECTS
export const TITLE_CARD_3 = 'Proyectos'
export const PANDEMIC_SIMULATOR_TITLE = 'Pandemic Simulator'
export const PANDEMIC_SIMULATOR_CONTENT = 'Prueba técnica para demostrar mis habilidades en Vue.js. La prueba consistió en programar una aplicación donde el usuario pueda crear una cuadrícula del ancho y alto especificado por el mismo (máximo 50 x 50 celdas). A continuación el usuario debe poder escoger aquellas celdas que representan un punto de contagio y aquellas que representan un punto de inmunidad. Finalmente el usuario debe poder iniciar la prueba. Los puntos de contagio deben contaminar a 4 celdas adyacentes (arriba, abajo, izquierda, derecha) una y otra vez hasta cubrir toda la cuadrícula exceptuando los puntos de inmunidad.'
export const BOOK_TITLE = 'Book'
export const BOOK_CONTENT = 'Book personal para demostrar proyectos y habilidades de programación. Desarrollado en Nuxt.js como framework de desarrollo, Jest com framework para pruebas unitarias y Cypress para pruebas de integración. Se utilizó Bootstrap para implementar responsividad y estoy trabajando en integrar Less o Sass para eficientizar/ordenar los estilos.'

// FOOTER
export const CONTACT_BLOCK_VALUES = {
  mails: {
    title: 'Correos',
    values: ['josuehr000@gmail.com', 'josue.h.r@outlook.com']
  },
  thelephones: {
    title: 'Telefonos',
    values: ['josuehr000@gmail.com', 'josue.h.r@outlook.com']
  }
}

export const MEDIA_LINKS = {
  gitHub: {
    link: 'https://github.com/Josue0117',
    imageSrc: 'github'
  },
  linkedin: {
    link: 'https://www.linkedin.com/in/josu%C3%A9-hern%C3%A1ndez-3b4671185/',
    imageSrc: 'linkedin'
  }
}
