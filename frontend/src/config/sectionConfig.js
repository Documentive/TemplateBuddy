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
    },
    area: {
      type: "TextField",
      label: "Area of Study",
    },
    studyType: {
      type: "TextField",
      label: "Degree",
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
    },
    location: {
      type: "TextField",
      label: "Location",
    },
    position: {
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
    },
    description: {
      type: "TextField",
      label: "Description",
    },
    summary: {
      type: "TextField",
      label: "Summary",
      rows: 5,
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
    },
    date: {
      type: "Date",
      label: "Date Certified",
    },
    issuer: {
      type: "TextField",
      label: "Awarder",
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
    },
    fluency: {
      type: "TextField",
      label: "Fluency",
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
    },
    position: {
      type: "TextField",
      label: "Position",
    },
    organization: {
      type: "TextField",
      label: "Company",
    },
    reference: {
      type: "TextField",
      label: "Reference",
      rows: 5,
    },
  },
  fieldName: "References",
  modalHeading: "Reference",
  fieldIcon: <Handshake />,
  fieldGroups: [["name", "position"], ["organization"], ["reference"]],
  displayField: "name",
  dbField: ["references"],
};
