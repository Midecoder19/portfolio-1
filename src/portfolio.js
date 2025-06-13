
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 
// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true 
};

const greeting = {
  username: "Midecoder",
  title: "Hi, I'm Ayomide",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 with hands-on experience in building modern, high-performance web applications using JavaScript, React.js, Node.js, Python, and other powerful frameworks and tools. I focus on writing clean, scalable code and delivering impactful solutions through intuitive UI and robust backend systems."
  ),
  resumeLink:
    "file:///C:/Users/ayomi/Downloads/Ayomide-Babarinde-FlowCV-Resume-20250611.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Midecoder19",
  linkedin: "https://www.linkedin.com/in/midecoder-1aa96b251/",
  gmail: "midecoder1@gmail.com",

  facebook: "https://web.facebook.com/Midecoder1",
  stackoverflow: "https://stackoverflow.com/users/26410388/midecoder",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications in normal and SPA Stacks"),
    
  ],


  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-Bootstrap"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "java",
    //   fontAwesomeClassname: "fab fa-java"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
   
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fab fa-Mongodb"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Talent Model College",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "2015 - 2021",
      desc: "Participated in the research of web and published 3 papers.",
     
    },
    {
      schoolName: "The Polytechnic Ibadan",
      logo: require("./assets/images/polylogo.jpg"),
      subHeader: "National Diploma in Computer Science",
      duration: "2022 - 2024",
      desc: "Ranked top 90% in the program. Took courses about Software Engineering, Web Security, Operating Systems...",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Developer",
      company: "Boldlinks Technology",
      companylogo: require("./assets/images/1726316007732.jpg"),
      date: "June 2021 – 2023",
      desc: "As a Web Developer, I specialize in creating dynamic and responsive websites for diverse clients, ensuring optimal performance, and implementing best practices in UI/UX",
      descBullets: [
        "Developed and maintained multiple web applications using modern JavaScript frameworks like React.",
        "Optimized website performance and SEO, improving page load time by 30%.",
        "Led backend integration using Node.js and Express, ensuring secure and scalable web solutions."
      ]
    },
    {
      role: "Front-End Developer",
      company: "NextSwitch",
      companylogo: require("./assets/images/log.jpg"),
      date: "2023 – 2024",
      desc: "As a Front-End Developer, I was responsible for crafting user-friendly and visually engaging web interfaces using HTML, CSS, and JavaScript. My role focused on creating responsive and interactive websites that enhanced the user experience.",
      descBullets:[
        "Developed high-quality, responsive web pages using HTML5, CSS3, and JavaScript.",
        "Optimized website performance and usability, improving page load times by 25%.",
        "Utilized frameworks like Bootstrap and jQuery to streamline development and ensure mobile responsiveness."
        
      ]
    },
   
  ]
};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  


const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Blog website",
      projectDesc: "A modern and responsive blogging platform built for sharing articles and stories with ease.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://blogging-site-official.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Freelance Platform",
      projectDesc: "A modern freelance platform for connecting service providers with client",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://gig-x.netlify.app/"
        }
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Project Managemnet",
      projectDesc: "Website use for managing and tracking your project",
      footerLink: [
        {
          name: "Visit website",
          url: "projects-managent.vercel.app"
        }
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "",
      projectDesc: "",
      footerLink: [
        {
          name: "More Projects",
          url: "https://github.com/Midecoder19"
        }
      ]
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
   
    {
      title: "Bl Web App Developer",
      subtitle: "Completed Certifcation from Boldlinks Web App Development",
      image: require("./assets/images/1726316007732.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://github.com/Midecoder19/school-management"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false// Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+234(9075628234)",
  email_address: "ayomidebabarinde07@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Midecoder01", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
