const navLinks = [
  { href: "#home", text: "home" },
  { href: "#doctors", text: "doctors" },
  { href: "#services", text: "services" },
  { href: "#about", text: "about" },
];

const receptionNavLinks = [
  { id: 1, href: "/", text: "بحث عن مريض" },
  { id: 2, href: "/add-patient", text: "إضافة مريض" },
];

const managerNavLinks = [
  { id: 1, href: "/", text: "Home" },
  { id: 2, href: "/add-employee", text: "Add Employee" },
  { id: 3, href: "/delete-employee", text: "Delete Employee" },
];

const pharmacistNavLinks = [
  { id: 1, href: "/", text: "Home" },
  { id: 2, href: "/add-medicine", text: "Add Medicine" },
  { id: 3, href: "/delete-medicine", text: "Delelte Medicine" },
];

const nursingAdminNavLinks = [
  { id: 1, href: "/", text: "Medicine Requests" },
  { id: 2, href: "/lab-requests", text: "Lab Requests" },
  { id: 3, href: "/radiology-requests", text: "Radiology Requests" },
  { id: 4, href: "/oxygen-requests", text: "Oxygen Requests" },
];

const labAdminNavLinks = [
  { id: 1, href: "/", text: "Lab Requests" },
  { id: 2, href: "/upload-result", text: "Upload Lab Result" },
];

const radiologistNavLinks = [
  { id: 1, href: "/", text: "Radiology Requests" },
  { id: 2, href: "/upload-result", text: "Upload Radiology Result" },
  { id: 3, href: "/x-ray", text: "x-ray Helper" },
  { id: 4, href: "/ct-scan", text: "ct-scan Helper" },
];

export {
  navLinks,
  receptionNavLinks,
  managerNavLinks,
  pharmacistNavLinks,
  nursingAdminNavLinks,
  labAdminNavLinks,
  radiologistNavLinks,
};
