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
  id: "67a8c862-7b60-4527-acc1-405bdf7d883f",
  data: { label: "initial_data", type: "root" },
  children: [
    {
      id: "8880f080-3ef0-431f-a158-86b07a78719b",
      data: { label: "sclowy.com", type: "domain" },
      children: [
        {
          id: "31ec1e8c-be6e-407a-b9e2-b13cf03958b3",
          data: { label: "contact info", type: "contact info" },
          children: [
            {
              id: "8aca771d-e69c-4d31-960a-7872e0a68a70",
              data: { label: "+852 3405 1300", type: "phone" },
              children: [],
            },
            {
              id: "98e68918-aa1d-4c4b-b1fa-371bc0fa6736",
              data: { label: "+85234051300", type: "sanitized_phone" },
              children: [],
            },
            {
              id: "b5054ad3-5a36-4e0f-813d-99cb9397407d",
              data: { label: "http://www.linkedin.com/company/sclowy", type: "linkedin_url" },
              children: [],
            },
            {
              id: "b1fe0343-965e-4c1d-bb01-1fae97013a34",
              data: { label: "https://twitter.com/sclowynews", type: "twitter_url" },
              children: [],
            },
            {
              id: "7fa00e90-0c3c-4c73-b1cb-f8b379143b29",
              data: { label: "8 Queen's Rd, Hong Kong, Hong Kong", type: "address" },
              children: [],
            },
          ],
        },
        {
          id: "0a07dfe1-115e-4d5c-8d5e-95ac92825279",
          data: { label: "financial data", type: "financial data" },
          children: [
            {
              id: "432765db-0d9b-45cd-ae56-ee5b1640df43",
              data: { label: 2009, type: "founded_year" },
              children: [],
            },
            {
              id: "b27e6c61-70e9-43d8-8320-d2d99e8bfa29",
              data: { label: 450000000, type: "total_funding" },
              children: [],
            },
            {
              id: "d18d7a5e-5ca0-4cf2-8a51-9a0fec68ab17",
              data: { label: "450M", type: "total_funding_printed" },
              children: [],
            },
            {
              id: "434fc680-824d-4b16-9d32-c2ed909b163b",
              data: { label: "Other", type: "latest_funding_stage" },
              children: [],
            },
            {
              id: "3d819ef4-520c-4c4b-9b49-e7225f2f5faa",
              data: { label: "2022-09-01T00:00:00.000+00:00", type: "latest_funding_round_date" },
              children: [],
            },
          ],
        },
        {
          id: "af101668-c85b-415e-a5df-ea0ebc9bb6e7",
          data: { label: "technological data", type: "technological data" },
          children: [
            {
              id: "a4d4592a-8c2e-4e5a-b19f-4536e49b648f",
              data: {
                label:
                  "['Adobe Media Optimizer', 'Apache', 'Cedexis Radar', 'DigitalOcean', 'Google Font API', 'Google Maps', 'Google Maps (Non Paid Users)', 'Google Tag Manager', 'Gravity Forms', 'Mobile Friendly', 'Nginx', 'Outlook', 'Vimeo', 'WordPress.org', 'reCAPTCHA']",
                type: "technologies",
              },
              children: [],
            },
            {
              id: "9604b58b-c6df-4e94-ac12-52607d653b76",
              data: {
                label:
                  "[{'uid': 'adobe_media_optimizer', 'name': 'Adobe Media Optimizer', 'category': 'Search Marketing'}, {'uid': 'apache', 'name': 'Apache', 'category': 'Load Balancers'}, {'uid': 'cedexis_radar', 'name': 'Cedexis Radar', 'category': 'Web Performance Monitoring'}, {'uid': 'digitalocean', 'name': 'DigitalOcean', 'category': 'Hosting'}, {'uid': 'google_font_api', 'name': 'Google Font API', 'category': 'Fonts'}, {'uid': 'google_maps', 'name': 'Google Maps', 'category': 'Other'}, {'uid': 'google_maps_non_paid_users', 'name': 'Google Maps (Non Paid Users)', 'category': 'Other'}, {'uid': 'google_tag_manager', 'name': 'Google Tag Manager', 'category': 'Tag Management'}, {'uid': 'gravity_forms', 'name': 'Gravity Forms', 'category': 'Hosted Forms'}, {'uid': 'mobile_friendly', 'name': 'Mobile Friendly', 'category': 'Other'}, {'uid': 'nginx', 'name': 'Nginx', 'category': 'Load Balancers'}, {'uid': 'outlook', 'name': 'Outlook', 'category': 'Email Providers'}, {'uid': 'vimeo', 'name': 'Vimeo', 'category': 'Online Video Platforms'}, {'uid': 'wordpress_org', 'name': 'WordPress.org', 'category': 'CMS'}, {'uid': 'recaptcha', 'name': 'reCAPTCHA', 'category': 'Captcha'}]",
                type: "current_technologies",
              },
              children: [],
            },
          ],
        },
        {
          id: "be38cca3-a2e2-4f69-880b-fe76f2cdcd66",
          data: { label: "description data", type: "description data" },
          children: [
            {
              id: "3f5b5e12-5d03-4882-918b-01d0603cc6c8",
              data: {
                label:
                  "SC Lowy is a leading alternative asset manager with $1.6 billion in assets under management, specializing in opportunistic credit, special situations, and private credit across Asia Pacific, the Middle East, and Europe. Founded in 2009, the firm operates out of nine global offices with a team of over 50 experienced professionals.\n\nAt SC Lowy, we leverage our deep market expertise and local presence to overcome barriers to entry in fragmented markets. Our dedicated local teams cultivate long-standing relationships, granting us prime access to untapped investment opportunities. We focus on solid, cash-generating businesses and prioritize capital preservation, with a strong emphasis on downside protection through senior secured lending backed by hard assets.\n\nWith a proven track record in both private credit closed-end and open-ended funds, SC Lowy is committed to delivering innovative financial solutions that maximize value for our investors. Our approach combines rigorous credit analysis with a focus on mitigating risk, ensuring robust returns while safeguarding capital.",
                type: "short_description",
              },
              children: [],
            },
            {
              id: "d4d30457-2237-49a3-8916-413d7e56409b",
              data: { label: "", type: "seo_description" },
              children: [],
            },
            {
              id: "ef8acaf4-4cdb-4d13-9a6b-c982b69d1c27",
              data: {
                label:
                  "['asset management', 'private credit', 'distressed', 'high yield', 'special situations']",
                type: "keywords",
              },
              children: [],
            },
            {
              id: "7e08712d-4604-443f-b7ac-11d1af943ba2",
              data: { label: "investment management", type: "industry" },
              children: [],
            },
            {
              id: "4baa520e-1b01-41df-9384-ee893cddc294",
              data: { label: "59", type: "estimated_num_employees" },
              children: [],
            },
          ],
        },
      ],
    },
  ],
};
