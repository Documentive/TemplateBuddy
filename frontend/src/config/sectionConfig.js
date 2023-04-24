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
} from "@mui/icons-material";

export const socialsSectionConfig = {
  fieldsMap: {
    network: {
      type: "TextField",
      label: "Network",
    },
    username: {
      type: "TextField",
      label: "Username",
    },
    url: {
      type: "TextField",
      label: "URL",
    },
  },
  fieldName: "Socials",
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
    },
    url: {
      type: "TextField",
      label: "URL",
    },
    area: {
      type: "TextField",
      label: "Area of Study",
    },
    studyType: {
      type: "TextField",
      label: "Study Type",
    },
    startDate: {
      type: "Date",
      label: "Start Date",
    },
    endDate: {
      type: "Date",
      label: "End Date",
      helperText: "Leave this field blank, if still in this institution",
    },
    score: {
      type: "TextField",
      label: "Score",
    },
    courses: {
      type: "MultiEntryList",
      label: "Courses",
    },
  },
  fieldName: "Education",
  fieldIcon: <School />,
  fieldGroups: [
    ["institution", "studyType", "area", "score", "startDate", "endDate"],
    ["url"],
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
    },
    location: {
      type: "TextField",
      label: "Location",
    },
    role: {
      type: "TextField",
      label: "Role",
    },
    startDate: {
      type: "Date",
      label: "Start Date",
    },
    endDate: {
      type: "Date",
      label: "End Date",
      helperText: "Leave blank if you are still working here",
    },
    summary: {
      type: "TextField",
      label: "Summary",
      rows: 5,
    },
  },
  fieldName: "Work Experience",
  fieldIcon: <Work />,
  fieldGroups: [
    ["name", "role"],
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
    },
    description: {
      type: "TextField",
      label: "Description",
    },
    highlights: {
      type: "MultiEntryList",
      label: "Highlights",
    },
    keywords: {
      type: "MultiEntryList",
      label: "Keywords",
    },
    startDate: {
      type: "Date",
      label: "Start Date",
    },
    endDate: {
      type: "Date",
      label: "End Date",
      helperText: "Leave this field blank, if still working on this project",
    },
    url: {
      type: "TextField",
      label: "URL",
    },
    roles: {
      type: "MultiEntryList",
      label: "Roles",
    },
    entity: {
      type: "TextField",
      label: "Entity",
    },
    type: {
      type: "TextField",
      label: "Type",
    },
  },
  fieldName: "Projects",
  fieldIcon: <Groups />,
  fieldGroups: [
    ["name", "description", "startDate", "endDate"],
    ["url"],
    ["entity", "type"],
    ["highlights"],
    ["roles"],
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
    },
    level: {
      type: "TextField",
      label: "Level",
    },
    keywords: {
      type: "MultiEntryList",
      label: "Keywords",
    },
  },
  fieldName: "Skills",
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
    },
    dateCertified: {
      type: "Date",
      label: "Date Certified",
    },
    awarder: {
      type: "TextField",
      label: "Awarder",
    },
    summary: {
      type: "TextField",
      label: "Summary",
      rows: 5,
    },
  },
  fieldName: "Certifications",
  fieldIcon: <Redeem />,
  fieldGroups: [["name", "dateCertified"], ["awarder"], ["summary"]],
  displayField: "name",
  dbField: ["certificates"],
};

export const languagesSectionConfig = {
  fieldsMap: {
    language: {
      type: "TextField",
      label: "Language",
    },
    fluency: {
      type: "TextField",
      label: "Fluency",
    },
  },
  fieldName: "Languages",
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
    },
    publisher: {
      type: "TextField",
      label: "Publisher",
    },
    releaseDate: {
      type: "Date",
      label: "Release Date",
    },
    url: {
      type: "TextField",
      label: "URL",
    },
    summary: {
      type: "TextField",
      label: "Summary",
      rows: 5,
    },
  },
  fieldName: "Publications",
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
    },
    date: {
      type: "Date",
      label: "Date awarded",
    },
    awarder: {
      type: "TextField",
      label: "Awarder",
    },
    summary: {
      type: "TextField",
      label: "Summary",
      rows: 5,
    },
  },
  fieldName: "Awards",
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
    },
    keywords: {
      type: "MultiEntryList",
      label: "Keywords",
    },
  },
  fieldName: "Interests",
  fieldIcon: <OutdoorGrill />,
  fieldGroups: [["name"], ["keywords"]],
  displayField: "name",
  dbField: ["interests"],
};

export const volunteerSectionConfig = {
  fieldsMap: {
    organization: {
      type: "TextField",
      label: "Organization",
    },
    position: {
      type: "TextField",
      label: "Position",
    },
    url: {
      type: "TextField",
      label: "URL",
    },
    startDate: {
      type: "Date",
      label: "Start Date",
    },
    endDate: {
      type: "Date",
      label: "End Date",
      helperText: "Leave this field blank, if still volunteering here",
    },
    summary: {
      type: "TextField",
      label: "Summary",
      rows: 5,
    },
    highlights: {
      type: "MultiEntryList",
      label: "Highlights",
    },
  },
  fieldName: "Volunteer",
  fieldIcon: <VolunteerActivism />,
  fieldGroups: [
    ["organization", "position", "startDate", "endDate"],
    ["url"],
    ["summary"],
    ["highlights"],
  ],
  displayField: "organization",
  dbField: ["volunteer"],
};

export const referencesSectionConfig = {
  fieldsMap: {
    name: {
      type: "TextField",
      label: "Name",
    },
    reference: {
      type: "TextField",
      label: "Reference",
      rows: 5,
    },
  },
  fieldName: "References",
  fieldIcon: <Handshake />,
  fieldGroups: [["name"], ["reference"]],
  displayField: "name",
  dbField: ["references"],
};
