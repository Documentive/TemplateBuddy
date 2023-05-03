import {
  EmojiEvents,
  Language,
  Public,
  Redeem,
  School,
  ShapeLine,
  VolunteerActivism,
  Work,
  Groups,
  Handshake,
  AutoStories,
  OutdoorGrill,
  AlternateEmail,
} from "@mui/icons-material";

export const socialsSectionConfig = {
  fieldsMap: {
    network: {
      type: "TextField",
      label: "Network",
      required: true,
    },
    username: {
      type: "TextField",
      label: "Username",
      required: true,
      innerFieldIcon: <AlternateEmail className="mr-2" />,
    },
    url: {
      type: "TextField",
      label: "URL",
      required: false,
    },
  },
  fieldName: "Socials",
  modalHeading: "Social Profile",
  fieldIcon: <Public />,
  fieldGroups: [["network", "username"], ["url"]],
  displayField: "network",
  dbField: ["basics", "profiles"],
};

export const educationSectionConfig = {
  fieldsMap: {
    institution: {
      type: "TextField",
      label: "Institution",
      required: true,
    },
    location: {
      type: "TextField",
      label: "Location",
      required: true,
    },
    area: {
      type: "TextField",
      label: "Area of Study",
      required: true,
    },
    studyType: {
      type: "TextField",
      label: "Degree",
      required: true,
    },
    startDate: {
      type: "Date",
      label: "Start Date",
      required: true,
    },
    endDate: {
      type: "Date",
      label: "End Date",
      helperText: "Leave this field blank, if still in this institution",
      required: false,
    },
    score: {
      type: "TextField",
      label: "Score",
      required: true,
    },
    courses: {
      type: "MultiEntryList",
      label: "Courses",
      required: false,
    },
  },
  fieldName: "Education",
  modalHeading: "Education",
  fieldIcon: <School />,
  fieldGroups: [
    ["institution", "studyType", "area", "score", "startDate", "endDate"],
    ["location"],
    ["courses"],
  ],
  displayField: "institution",
  dbField: ["education"],
};

export const workExperienceSectionConfig = {
  fieldsMap: {
    name: {
      type: "TextField",
      label: "Name of Company",
      required: true,
    },
    location: {
      type: "TextField",
      label: "Location",
      required: true,
    },
    position: {
      type: "TextField",
      label: "Role",
      required: true,
    },
    startDate: {
      type: "Date",
      label: "Start Date",
      required: true,
    },
    endDate: {
      type: "Date",
      label: "End Date",
      helperText: "Leave blank if you are still working here",
      required: false,
    },
    summary: {
      type: "TextField",
      label: "Summary",
      rows: 5,
      required: false,
    },
  },
  fieldName: "Work Experience",
  modalHeading: "Work Experience",
  fieldIcon: <Work />,
  fieldGroups: [
    ["name", "position"],
    ["location"],
    ["startDate", "endDate"],
    ["summary"],
  ],
  displayField: "name",
  dbField: ["work"],
};

export const projectsSectionConfig = {
  fieldsMap: {
    name: {
      type: "TextField",
      label: "Name",
      required: true,
    },
    description: {
      type: "TextField",
      label: "Description",
      required: true,
    },
    summary: {
      type: "TextField",
      label: "Summary",
      rows: 5,
      required: false,
    },
    keywords: {
      type: "MultiEntryList",
      label: "Keywords",
      required: false,
    },
    startDate: {
      type: "Date",
      label: "Start Date",
      required: true,
    },
    endDate: {
      type: "Date",
      label: "End Date",
      helperText: "Leave this field blank, if still working on this project",
      required: false,
    },
    url: {
      type: "TextField",
      label: "URL",
      required: false,
    },
  },
  fieldName: "Projects",
  modalHeading: "Project",
  fieldIcon: <Groups />,
  fieldGroups: [
    ["name", "description", "startDate", "endDate"],
    ["url"],
    ["summary"],
    ["keywords"],
  ],
  displayField: "name",
  dbField: ["projects"],
};

export const skillsSectionConfig = {
  fieldsMap: {
    name: {
      type: "TextField",
      label: "Name",
      required: true,
    },
    level: {
      type: "TextField",
      label: "Level",
      required: false,
    },
    keywords: {
      type: "MultiEntryList",
      label: "Keywords",
      required: false,
    },
  },
  fieldName: "Skills",
  modalHeading: "Skill",
  fieldIcon: <ShapeLine />,
  fieldGroups: [["name", "level"], ["keywords"]],
  displayField: "name",
  dbField: ["skills"],
};

export const certificationsSectionConfig = {
  fieldsMap: {
    name: {
      type: "TextField",
      label: "Name",
      required: true,
    },
    date: {
      type: "Date",
      label: "Date Certified",
      required: false,
    },
    issuer: {
      type: "TextField",
      label: "Awarder",
      required: true,
    },
    url: {
      type: "TextField",
      label: "URL",
      required: false,
    },
    summary: {
      type: "TextField",
      label: "Summary",
      rows: 5,
      required: false,
    },
  },
  fieldName: "Certifications",
  modalHeading: "Certification",
  fieldIcon: <Redeem />,
  fieldGroups: [["name", "date"], ["issuer", "url"], ["summary"]],
  displayField: "name",
  dbField: ["certificates"],
};

export const languagesSectionConfig = {
  fieldsMap: {
    language: {
      type: "TextField",
      label: "Language",
      required: false,
    },
    fluency: {
      type: "TextField",
      label: "Fluency",
      required: false,
    },
  },
  fieldName: "Languages",
  modalHeading: "Language",
  fieldIcon: <Language />,
  fieldGroups: [["language", "fluency"]],
  displayField: "language",
  dbField: ["languages"],
};

export const publicationsSectionConfig = {
  fieldsMap: {
    name: {
      type: "TextField",
      label: "Name",
      required: false,
    },
    publisher: {
      type: "TextField",
      label: "Publisher",
      required: false,
    },
    releaseDate: {
      type: "Date",
      label: "Release Date",
      required: false,
    },
    url: {
      type: "TextField",
      label: "URL",
      required: false,
    },
    summary: {
      type: "TextField",
      label: "Summary",
      rows: 5,
      required: false,
    },
  },
  fieldName: "Publications",
  modalHeading: "Publication",
  fieldIcon: <AutoStories />,
  fieldGroups: [["name", "publisher", "releaseDate", "url"], ["summary"]],
  displayField: "name",
  dbField: ["publications"],
};

export const awardsSectionConfig = {
  fieldsMap: {
    title: {
      type: "TextField",
      label: "Title",
      required: false,
    },
    date: {
      type: "Date",
      label: "Date awarded",
      required: false,
    },
    awarder: {
      type: "TextField",
      label: "Awarder",
      required: false,
    },
    summary: {
      type: "TextField",
      label: "Summary",
      rows: 5,
      required: false,
    },
  },
  fieldName: "Awards",
  modalHeading: "Award",
  fieldIcon: <EmojiEvents />,
  fieldGroups: [["title", "date"], ["awarder"], ["summary"]],
  displayField: "title",
  dbField: ["awards"],
};

export const interestsSectionConfig = {
  fieldsMap: {
    name: {
      type: "TextField",
      label: "Name",
      required: false,
    },
  },
  fieldName: "Interests",
  modalHeading: "Interest",
  fieldIcon: <OutdoorGrill />,
  fieldGroups: [["name"]],
  displayField: "name",
  dbField: ["interests"],
};

export const volunteerSectionConfig = {
  fieldsMap: {
    organization: {
      type: "TextField",
      label: "Organization",
      required: false,
    },
    position: {
      type: "TextField",
      label: "Position",
      required: false,
    },
    url: {
      type: "TextField",
      label: "URL",
      required: false,
    },
    startDate: {
      type: "Date",
      label: "Start Date",
      required: false,
    },
    endDate: {
      type: "Date",
      label: "End Date",
      helperText: "Leave this field blank, if still volunteering here",
      required: false,
    },
    summary: {
      type: "TextField",
      label: "Summary",
      rows: 5,
      required: false,
    },
  },
  fieldName: "Volunteer",
  modalHeading: "Volunteer Experience",
  fieldIcon: <VolunteerActivism />,
  fieldGroups: [
    ["organization", "position", "startDate", "endDate"],
    ["url"],
    ["summary"],
  ],
  displayField: "organization",
  dbField: ["volunteer"],
};

export const referencesSectionConfig = {
  fieldsMap: {
    name: {
      type: "TextField",
      label: "Name",
      required: false,
    },
    position: {
      type: "TextField",
      label: "Position",
      required: false,
    },
    organization: {
      type: "TextField",
      label: "Company",
      required: false,
    },
    reference: {
      type: "TextField",
      label: "Reference",
      rows: 5,
      required: false,
    },
  },
  fieldName: "References",
  modalHeading: "Reference",
  fieldIcon: <Handshake />,
  fieldGroups: [["name", "position"], ["organization"], ["reference"]],
  displayField: "name",
  dbField: ["references"],
};
