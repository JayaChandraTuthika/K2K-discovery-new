import {
  FaUser,
  FaBuilding,
  FaGlobe,
  FaEnvelope,
  FaPhone,
  FaUsers,
  FaShieldAlt,
  FaBriefcase,
  FaMapMarkerAlt,
  FaExclamationTriangle,
  FaCalendar,
} from "react-icons/fa";

export const mockData = {
  id: "root",
  data: { label: "SC LOWY", icon: FaBuilding },
  children: [
    {
      id: "organization",
      data: { label: "Organization Details", icon: FaBuilding },
      children: [
        { id: "org-1", data: { label: "sclowy.com", icon: FaGlobe } },
        { id: "org-2", data: { label: "Investment Management", icon: FaBriefcase } },
        { id: "org-3", data: { label: "59 Employees", icon: FaUsers } },
        { id: "org-4", data: { label: "+852 3405 1300", icon: FaPhone } },
        { id: "org-5", data: { label: "Hong Kong", icon: FaMapMarkerAlt } },
        {
          id: "org-6",
          data: { label: "http://www.linkedin.com/company/sclowy", icon: FaGlobe },
        },
      ],
    },
    {
      id: "people",
      data: { label: "People Details", icon: FaUsers },
      children: [
        {
          id: "person-1",
          data: { label: "Simon Clairet", icon: FaUser },
          children: [
            {
              id: "person-1-title",
              data: { label: "Head of Markets and Fundraising, Asia", icon: FaBriefcase },
            },
            {
              id: "person-1-email",
              data: { label: "email_not_unlocked@domain.com", icon: FaEnvelope },
            },
            { id: "person-1-location", data: { label: "Hong Kong", icon: FaMapMarkerAlt } },
            {
              id: "person-1-linkedin",
              data: { label: "http://www.linkedin.com/in/simon-clairet-291456", icon: FaGlobe },
            },
            {
              id: "person-1-breach",
              data: { label: "Data Breaches", icon: FaExclamationTriangle },
              children: [
                { id: "breach-1", data: { label: "No breaches found", icon: FaShieldAlt } },
              ],
            },
          ],
        },
        {
          id: "person-2",
          data: { label: "Jan Zarzycki", icon: FaUser },
          children: [
            {
              id: "person-2-title",
              data: {
                label: "Business Development - HY, Distressed Debt, Leveraged Credit Sales",
                icon: FaBriefcase,
              },
            },
            { id: "person-2-email", data: { label: "jan.zarzycki@sclowy.com", icon: FaEnvelope } },
            { id: "person-2-location", data: { label: "United Kingdom", icon: FaMapMarkerAlt } },
            {
              id: "person-2-linkedin",
              data: { label: "http://www.linkedin.com/in/janzarzycki", icon: FaGlobe },
            },
            {
              id: "person-2-breach",
              data: { label: "Data Breaches", icon: FaExclamationTriangle },
              children: [
                { id: "breach-1", data: { label: "Adobe (2013-10-04)", icon: FaCalendar } },
                { id: "breach-2", data: { label: "LinkedIn (2012-05-05)", icon: FaCalendar } },
                { id: "breach-3", data: { label: "Collection1 (2019-01-07)", icon: FaCalendar } },
                {
                  id: "breach-4",
                  data: { label: "VerificationsIO (2019-02-25)", icon: FaCalendar },
                },
                { id: "breach-5", data: { label: "DemandScience (2024-02-28)", icon: FaCalendar } },
              ],
            },
          ],
        },
        {
          id: "person-3",
          data: { label: "Lionel", icon: FaUser },
          children: [
            { id: "person-3-title", data: { label: "Chief Strategy Officer", icon: FaBriefcase } },
            {
              id: "person-3-email",
              data: { label: "lionel.de.somer@sclowy.com", icon: FaEnvelope },
            },
            { id: "person-3-location", data: { label: "Belgium", icon: FaMapMarkerAlt } },
            {
              id: "person-3-linkedin",
              data: { label: "http://www.linkedin.com/in/lioneldesomer", icon: FaGlobe },
            },
            {
              id: "person-3-breach",
              data: { label: "Data Breaches", icon: FaExclamationTriangle },
              children: [
                { id: "breach-1", data: { label: "No breaches found", icon: FaShieldAlt } },
              ],
            },
          ],
        },
        {
          id: "person-4",
          data: { label: "Johan Sudiman", icon: FaUser },
          children: [
            { id: "person-4-title", data: { label: "Loan Trader", icon: FaBriefcase } },
            { id: "person-4-email", data: { label: "johan.sudiman@sclowy.com", icon: FaEnvelope } },
            { id: "person-4-location", data: { label: "Hong Kong", icon: FaMapMarkerAlt } },
            {
              id: "person-4-linkedin",
              data: { label: "http://www.linkedin.com/in/johan-sudiman-b02a6511", icon: FaGlobe },
            },
            {
              id: "person-4-breach",
              data: { label: "Data Breaches", icon: FaExclamationTriangle },
              children: [
                { id: "breach-1", data: { label: "No breaches found", icon: FaShieldAlt } },
              ],
            },
          ],
        },
      ],
    },
  ],
};
