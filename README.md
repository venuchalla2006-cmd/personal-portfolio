# 🚀 Premium B.Tech CSE Fresher Portfolio & Interactive Resume

A state-of-the-art, professionally designed single-page portfolio specifically tailored for **B.Tech Computer Science & Engineering freshers**. This portfolio showcases technical skills, projects, certifications, and features a dual light/dark modern theme, dynamic interactive modals, and an automatic print-ready A4 PDF resume layout.

---

## ✨ Features Included

1. **🌟 Sleek Hero Visuals**:
   - Dynamic self-typing roles animation.
   - Live hiring status visual indicators with glowing pulse effects.
   - An elegant mockup coding terminal detailing background variables in JavaScript.
   - Interactive statistics pills that float smoothly.

2. **🎓 Timeline Education Section**:
   - Highly aesthetic timeline representing B.Tech, Intermediate, and Secondary Schooling.
   - Clear grading visual markers (CGPA / Percentages).

3. **💻 Interactive Skill Matrix**:
   - Filtering buttons grouping skills by category (Languages, Frontend, Backend & DB, Tools).
   - Animated visual percentage progress meters showing core skill competencies.

4. **📁 Interactive Projects Showcase**:
   - Filter-based grid cards dividing full-stack web applications from core Java DBMS programs.
   - Popups Details Modals loading in feature lists, tech stack tags, and repository links dynamically.

5. **🏆 Dynamic Credentials & Certifications**:
   - Professional layout containing mock certificates (AWS, Java Full Stack, React.js).
   - "View Credentials" triggers a beautiful digital completion certificate mockup displaying signatures, unique IDs, stamps, and issuing authorities in an overlay modal.

6. **📄 Printer-Ready PDF Resume**:
   - Includes a beautifully structured inline paper resume.
   - Clicking **"Print / Save PDF Resume"** overrides all styles to format the card into a clean, 1-page standard A4 black-and-white printout. This allows you to export your profile as a high-quality PDF resume file instantly!

7. **✉️ Contact Integration**:
   - Floating label glassmorphism fields with validation.
   - Emulates secure SMTP sending pipelines, presenting a gorgeous success banner toast upon message receipt.

---

## 🛠️ How To Customize Your Portfolio

All parameters have been modularized to make customization extremely straightforward:

1. **Personal Information**:
   - Open [index.html](index.html) and search for `Venu Challa` or `venu.challa2006@gmail.com` to swap in your name, social media profiles, and contact channels.
   
2. **Technical Skill Bar Capacities**:
   - Open [index.html](index.html) and look inside `<section id="skills">`. Locate the skill rows and change their bar percentages (`style="width: 85%"`).

3. **Modifying Projects**:
   - Open [script.js](script.js) and locate the `projectsData` constant at the top. You can edit, delete, or append projects using standard JSON layout properties, which will instantly load onto the interactive details modal card.

4. **Modifying Credentials**:
   - Open [script.js](script.js) and edit the `certsData` database map keys (`aws`, `java`, `react`) to change names, credential registration IDs, and dates on the completion stamps.

---

## 💻 Running the App

### Option A: Local Browser (Instant)
Simply double-click the `index.html` file or drag it directly into any modern browser (Chrome, Edge, Firefox, Safari).

### Option B: Local Dev Server (Recommended)
If you wish to host it via a local development server for testing across devices:
1. Open PowerShell or Command Prompt inside the `personal-portfolio` folder.
2. Run any static server utility, for example:
   ```bash
   npx http-server .
   ```
3. Open `http://localhost:8080` in your web browser.

---

## 🖨️ Printing or Saving as PDF

To get your professional 1-page PDF resume:
1. Scroll down to the **"Interactive Resume"** section.
2. Click the **"Print / Save PDF Resume"** button.
3. In the system print dialog:
   - Select **"Save as PDF"** under the printer list.
   - Adjust page sizing (Standard A4, 100% scale).
   - Check or uncheck **"Background Graphics"** according to your preference (it will hide header bars and clean up pages automatically).
   - Click **Save**!
