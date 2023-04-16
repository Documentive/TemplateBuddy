import {
  EmojiEvents,
  Language,
  Redeem,
  School,
  Work,
} from "@mui/icons-material";

export const workExperienceSectionConfig = {
  fieldsMap: {
    company: {
      type: "TextField",
      label: "Company",
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
  displayField: "company",
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
  displayField: "name",
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
  displayField: "language",
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
  displayField: "title",
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
  displayField: "institution",
};
