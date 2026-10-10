# AI Prompt: Library Management System Website for Indira Institute

Design and develop a modern, responsive, secure, and professional **Library Management System** for **Indira Institute**. The website should have a clean UI with the institute's branding, responsive design for desktop/mobile/tablet, role-based authentication, and a dashboard for students, faculty, librarians, and administrators.

## General Requirements

* Modern professional UI
* Responsive across all devices
* Fast loading
* Secure authentication
* Attractive dashboard
* Search and filter functionality
* Dark Mode and Light Mode
* Institute logo and branding
* Notification system
* Email notifications
* Export records to PDF and Excel
* Audit logs
* Data backup support

---

# Authentication Module

## Login Page

Include:

* Institute Logo
* Library Management System Title
* Username / Email
* Password
* Remember Me
* Forgot Password
* Login Button
* Student Login
* Faculty Login
* Librarian Login
* Admin Login

After successful login redirect users based on their role.

---

## Registration Page

Collect:

* Full Name
* Student/Faculty ID
* Roll Number
* Department
* Course
* Semester
* Mobile Number
* Email Address
* Date of Birth
* Gender
* Address
* Password
* Confirm Password
* Upload Profile Photo
* Agree to Terms

Generate a unique Library Membership ID after registration.

---

# Dashboard

Display:

* Welcome Message
* User Profile
* Library Card
* Total Books Issued
* Books Returned
* Pending Requests
* Due Books
* Fine Amount
* Notifications
* Latest News
* Research Publications
* Quick Actions

---

# Library Card Module

Digital Library Card containing:

* Library Card Number
* Membership ID
* Name
* Student Photo
* Department
* Course
* Semester
* Valid Until
* QR Code
* Barcode
* Status (Active / Expired)

Allow:

* Download PDF
* Print Card

---

# Book Management

Store complete information for every book.

Fields:

* Book ID
* ISBN
* Book Title
* Author
* Publisher
* Edition
* Category
* Language
* Shelf Number
* Rack Number
* Number of Copies
* Available Copies
* Book Cover Image
* Purchase Date
* Price
* Status

Features:

* Search
* Filter
* Sort
* Pagination

---

# Book Request Module

Users can:

* Search Book
* Request Book
* Select Pickup Date
* Add Notes

Admin receives approval request.

Statuses:

* Pending
* Approved
* Rejected
* Collected

---

# Book Issue Module

Librarian can:

Issue Book

Generate:

* Issue Date
* Due Date
* Return Date
* Book Status
* QR Code

Automatically update inventory.

---

# Book Submission Module

When returning:

* Scan QR Code
* Update Return Date
* Calculate Due Days
* Calculate Fine Automatically
* Generate Receipt

---

# Due Date & Fine Module

Automatically calculate:

* Remaining Days
* Overdue Days
* Fine Per Day
* Total Fine

Display:

Green = Safe

Orange = Near Due

Red = Overdue

Send reminders:

* Email
* SMS
* Dashboard Notification

---

# Library Record History

Maintain complete history.

Include:

Issued Books

Returned Books

Renewed Books

Requested Books

Rejected Requests

Cancelled Requests

Fine History

Payment History

Login History

Activity History

Filters:

* Date
* Department
* Student
* Book
* Faculty

Export:

* Excel
* PDF

---

# Research Publications

Dedicated section for:

Research Papers

Journal Publications

Conference Papers

Patents

Projects

Faculty Publications

Student Publications

Include:

Title

Author

Department

Abstract

Publication Date

DOI

Download PDF

Search and Filter

---

# Newsletter Section

Upcoming Events

Library Announcements

Book Fair

Seminars

Workshops

Competitions

Monthly Newsletter

Recent News

Featured Books

Downloads

---

# User Dashboard

Students and Faculty can:

View Profile

View Library Card

Search Books

Request Books

Renew Books

Return Status

Fine Status

Payment History

Notifications

Download Library Card

View Research Papers

Read Newsletters

Edit Profile

Change Password

Logout

---

# Admin Dashboard

Admin can manage:

Users

Students

Faculty

Librarians

Departments

Books

Categories

Publishers

Authors

Issue Books

Return Books

Fine Collection

Payments

Library Cards

Research Papers

Newsletters

Announcements

Reports

Settings

Permissions

Backup Database

Restore Database

Audit Logs

Analytics Dashboard

Charts:

Books Issued

Books Returned

Most Read Books

Active Users

Fine Collection

Department Statistics

Monthly Reports

---

# User Access Levels

## Student

Search Books

Request Books

Renew Books

View Profile

View Library Card

View Fine

Download Card

Research Papers

Newsletter

---

## Faculty

Everything Student has plus:

Longer Borrow Duration

Higher Book Limit

Publication Upload Request

---

## Librarian

Manage Books

Issue Books

Return Books

Approve Requests

Generate Reports

Manage Fine

---

## Administrator

Full Control

Manage Users

Manage Roles

Database

Website Settings

Permissions

Reports

Analytics

Backup

Restore

Audit Logs

---

# Reports

Generate:

Daily Report

Weekly Report

Monthly Report

Yearly Report

Books Report

Student Report

Faculty Report

Fine Report

Inventory Report

Export:

PDF

Excel

CSV

---

# Notifications

Dashboard Notifications

Email Alerts

Book Due Reminder

Book Approval

Book Returned

Fine Alert

Newsletter

Research Publication Updates

---

# Search Features

Global Search

Search by:

Book Title

Author

ISBN

Publisher

Department

Student Name

Faculty Name

Library ID

---

# Security

Role-Based Authentication

Password Encryption

Session Timeout

OTP Password Reset

Login Activity

Audit Logs

SQL Injection Protection

XSS Protection

CSRF Protection

Captcha

---

# Logout Page

Display:

"Thank you for using the Indira Institute Library Management System."

Options:

* Login Again
* Return to Home Page

Automatically clear the user session and redirect securely.

---

# Technology Stack

Frontend:

* HTML5
* CSS3
* Bootstrap 5
* JavaScript
* React.js

Backend:

* Node.js with Express.js (or PHP Laravel)

Database:

* MySQL

Authentication:

* JWT / Session Authentication

Storage:

* Cloudinary or Local Storage for images

Reports:

* PDF and Excel Export

Deployment:

* Docker
* Nginx
* HTTPS
* SSL Security

---

# UI Design

Use the official Indira Institute branding with a blue, white, and gold color palette. Include a collapsible sidebar, top navigation bar, dashboard cards, charts, tables, responsive forms, profile avatars, book cover images, QR codes, icons, smooth animations, and accessible typography. The interface should feel modern, intuitive, and suitable for educational institutions.

The final application should be a complete, production-ready Library Management System with secure authentication, role-based access control, comprehensive book management, automated due-date and fine calculations, digital library cards, reporting, research publication management, newsletters, notifications, and an attractive user experience.
