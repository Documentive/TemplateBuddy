import { Work } from "@mui/icons-material";

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
