// "use client";

// import Link from 'next/link';
// import { Nav } from 'react-bootstrap';

// const instructorNavItems = [
//   { href: '/dashboard', label: 'Dashboard', icon: 'bi-grid-1x2-fill' },
//   { href: '/courses', label: 'Courses', icon: 'bi-book' },
//   { href: '/schedule', label: 'Schedule', icon: 'bi-calendar3' },
//   { href: '/students', label: 'Students', icon: 'bi-people' },
//   { href: '/resource', label: 'Resource', icon: 'bi-folder2-open' },
//   { href: '/transaction', label: 'Transaction', icon: 'bi-arrow-left-right' },
//   { href: '/live-class', label: 'Live Class', icon: 'bi-camera-video' },
// ];

// const studentNavItems = [
//   { href: '/student/dashboard', label: 'Dashboard', icon: 'bi-grid-1x2-fill' },
//   { href: '/courses', label: 'Courses', icon: 'bi-book' },
//   { href: '/schedule', label: 'Schedule', icon: 'bi-calendar3' },
//   { href: '/instructors', label: 'Instructors', icon: 'bi-person-badge' },
//   { href: '/profile', label: 'Profile', icon: 'bi-person' },
//   { href: '/activity', label: 'Activity', icon: 'bi-activity' },
// ];

// export default function Sidebar({ variant = 'instructor' }) {
//   const navItems = variant === 'student' ? studentNavItems : instructorNavItems;
//   const activeHref = variant === 'student' ? '/student/dashboard' : '/dashboard';
//   const navClassName = variant === 'student' ? 'dashboard-nav student-nav' : 'dashboard-nav';

//   return (
//     <div className="dashboard-sidebar">
//      <div className="sidebar-brand">
//   <Link href="/">
//     <img
//       src="/assets/logo1.svg"
//       alt="MaxSkills Logo"
//       className="sidebar-logo"
//     />
//   </Link>
// </div>

//       <Nav defaultActiveKey={activeHref} className={`flex-column ${navClassName}`}>
//         {navItems.map((item) => (
//           <Nav.Link
//             key={item.href}
//             as={Link}
//             href={item.href}
//             className={`nav-item ${item.href === activeHref ? 'active' : ''}`}
//           >
//             <span className="nav-icon">
//               <i className={`bi ${item.icon}`} aria-hidden="true" />
//             </span>
//             <span className="nav-label">{item.label}</span>
//           </Nav.Link>
//         ))}
//       </Nav>

//       <div className="sidebar-upgrade student-upgrade">
//         <div className="upgrade-medal" aria-hidden="true">
//           <i className="bi bi-award-fill" />
//         </div>
//         <h6>Upgrade your Account to Pro</h6>
//         <p>Upgrade to premium to get premium features</p>
//         <button type="button" className="btn-upgrade">
//           Upgrade
//         </button>
//       </div>
//     </div>
//   );
// }



"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav } from "react-bootstrap";

const instructorNavItems = [
  { href: "/dashboard", label: "Dashboard", icon: "bi-grid-1x2-fill" },
  { href: "/courses", label: "Courses", icon: "bi-book" },
  { href: "/schedule", label: "Schedule", icon: "bi-calendar3" },
  { href: "/students", label: "Students", icon: "bi-people" },
  { href: "/resource", label: "Resource", icon: "bi-folder2-open" },
  { href: "/transaction", label: "Transaction", icon: "bi-arrow-left-right" },
  { href: "/live-class", label: "Live Class", icon: "bi-camera-video" },
];

const studentNavItems = [
  { href: '/student/dashboard', label: 'Dashboard', icon: 'bi-grid-1x2-fill' },
  { href: '/student/courses', label: 'Courses', icon: 'bi-book' },
  { href: '/student/schedule', label: 'Schedule', icon: 'bi-calendar3' },
  { href: '/student/instructors', label: 'Instructors', icon: 'bi-person-badge' },
  { href: '/student/profile', label: 'Profile', icon: 'bi-person' },
  { href: '/student/activity', label: 'Activity', icon: 'bi-activity' },
];

export default function Sidebar({ variant = "instructor" }) {
  const pathname = usePathname();

  const navItems =
    variant === "student" ? studentNavItems : instructorNavItems;

  const navClassName =
    variant === "student"
      ? "dashboard-nav student-nav"
      : "dashboard-nav";

  return (
   <div className="sidebar-inner">
      <div className="sidebar-brand">
        <Link href="/">
          <img
            src="/assets/logo1.svg"
            alt="MaxSkills Logo"
            className="sidebar-logo"
          />
        </Link>
      </div>

      <Nav className={`flex-column ${navClassName}`}>
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (pathname.startsWith(item.href + "/") &&
              item.href !== "/dashboard" &&
              item.href !== "/student/dashboard");

          return (
            <Nav.Link
              key={item.href}
              as={Link}
              href={item.href}
              className={`nav-item ${isActive ? "active" : ""}`}
            >
              <span className="nav-icon">
                <i className={`bi ${item.icon}`} aria-hidden="true" />
              </span>

              <span className="nav-label">{item.label}</span>
            </Nav.Link>
          );
        })}
      </Nav>

      <div className="sidebar-upgrade student-upgrade">
        <div className="upgrade-medal" aria-hidden="true">
          <i className="bi bi-award-fill" />
        </div>

        <h6>Upgrade your Account to Pro</h6>

        <p>Upgrade to premium to get premium features</p>

        <button type="button" className="btn-upgrade">
          Upgrade
        </button>
      </div>
    </div>
  );
}