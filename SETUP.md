# 🚀 Student Directory Setup Guide

This guide will walk you through the complete process of setting up your development environment and contributing to the Student Directory project. Follow each step carefully!

---

## 📋 Prerequisites Checklist

Before you start, make sure you have:
- [ ] A computer (Windows, Mac, or Linux)
- [ ] Internet connection
- [ ] A web browser (Chrome, Firefox, Edge, etc.)
- [ ] Basic understanding of HTML/CSS/JavaScript (helpful but not required)

---

## Step 1: Create a GitHub Account

GitHub is where we'll store and collaborate on the project code.

### 1.1 Visit GitHub
1. Open your web browser
2. Go to: https://github.com
3. Click **"Sign up"** (top right corner)

### 1.2 Create Your Account
1. Enter your **email address**
2. Create a **username** (use your name or something memorable)
3. Choose a **strong password**
4. Click **"Create account"**
5. Complete the email verification
6. Fill out your profile information (optional but recommended)

### 1.3 Verify Setup
- You should see your GitHub dashboard
- Your username should appear in the top right corner
- ✅ **Checkpoint**: You can now access https://github.com/yourusername

---

## Step 2: Install Git

Git is the tool that lets us download (clone) and upload (push) code to GitHub.

### 2.1 Download Git

#### For Windows:
1. Go to: https://git-scm.com/download/win
2. Click **"Click here to download"**
3. The download should start automatically

#### For Mac:
1. Go to: https://git-scm.com/download/mac
2. Download the latest version

#### For Linux:
Open terminal and run:
```bash
sudo apt-get update
sudo apt-get install git  # Ubuntu/Debian
# OR
sudo yum install git      # CentOS/RHEL
```

### 2.2 Install Git

#### Windows Installation:
1. Find the downloaded file (usually `Git-*-64-bit.exe`)
2. Double-click to run the installer
3. Click **"Next"** through all the default options
4. When you see **"Adjusting your PATH environment"**, choose **"Git from the command line and also from 3rd-party software"**
5. Complete the installation

#### Mac Installation:
1. Open the downloaded `.dmg` file
2. Drag Git to your Applications folder

### 2.3 Verify Installation

#### Windows:
1. Press `Win + R`, type `cmd`, press Enter
2. Type: `git --version`
3. You should see: `git version 2.x.x`

#### Mac/Linux:
1. Open Terminal application
2. Type: `git --version`
3. You should see: `git version 2.x.x`

### 2.4 Configure Git
Open Command Prompt/Terminal and run:
```bash
git config --global user.name "Your Full Name"
git config --global user.email "your.email@example.com"
```

**Replace with your actual name and the email you used for GitHub!**

---

## Step 3: Fork the Repository

Forking creates your own copy of the project on GitHub.

### 3.1 Find the Project
1. Go to: https://github.com/KaizellMickhos/student-directory
2. Click the **"Fork"** button (top right)

### 3.2 Complete Fork
1. GitHub will create a copy in your account
2. You should now see: `https://github.com/YOURUSERNAME/student-directory`
3. ✅ **Checkpoint**: You have your own copy of the project!

---

## Step 4: Clone the Repository

Cloning downloads the code to your computer.

### 4.1 Get the Clone URL
1. Go to your forked repository: `https://github.com/YOURUSERNAME/student-directory`
2. Click the green **"Code"** button
3. Make sure **"HTTPS"** is selected
4. Click the copy button to copy the URL

### 4.2 Clone in Terminal/Command Prompt

#### Windows:
```cmd
cd Desktop
git clone https://github.com/YOURUSERNAME/student-directory.git
cd student-directory
```

#### Mac/Linux:
```bash
cd Desktop
git clone https://github.com/YOURUSERNAME/student-directory.git
cd student-directory
```

### 4.3 Verify Clone
- You should see project files in your `student-directory` folder
- ✅ **Checkpoint**: You have the code on your computer!

---

## Step 5: Set Up the Project

### 5.1 Open the Project
1. Navigate to the `student-directory` folder on your Desktop
2. Open `index.html` in your web browser
3. You should see the student directory homepage

### 5.2 Test the Current Code
1. Try the search bar - type a name
2. Click "View Profile" buttons (they show alerts for now)
3. ✅ **Checkpoint**: The website works!

---

## Step 6: Create Your Feature Branch

Always work on a separate branch for your changes.

### 6.1 Create and Switch to Branch
```bash
git checkout -b feature/your-name-profile
```

**Replace `your-name` with your actual name (no spaces, use hyphens)**

Example: `feature/john-doe-profile`

### 6.2 Verify Branch
```bash
git branch
```
You should see your branch name with an asterisk (*)

---

## Step 7: Add Your Profile

### 7.1 Edit main.js
1. Open `main.js` in a code editor (Notepad++, VS Code, etc.)
2. Find the `students` array
3. Add your profile using this format:

```javascript
createStudent("Your Full Name", "https://via.placeholder.com/200", "Your short bio (2-3 sentences)", {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  facebook: "https://facebook.com/yourprofile"
})
```

**Example:**
```javascript
createStudent("John Doe", "https://via.placeholder.com/200", "Computer Science student passionate about web development and AI.", {
  github: "https://github.com/johndoe",
  linkedin: "https://linkedin.com/in/johndoe",
  facebook: "https://facebook.com/johndoe"
})
```

### 7.2 Test Your Changes
1. Save the file
2. Refresh `index.html` in your browser
3. Search for your name
4. Your card should appear!

---

## Step 8: Commit Your Changes

### 8.1 Check Status
```bash
git status
```
You should see `main.js` as modified

### 8.2 Stage Changes
```bash
git add main.js
```

### 8.3 Commit Changes
```bash
git commit -m "Add [Your Name] profile to homepage"
```

**Replace `[Your Name]` with your actual name**

---

## Step 9: Push Your Branch

### 9.1 Push to GitHub
```bash
git push origin feature/your-name-profile
```

### 9.2 Verify Push
- Go to your GitHub repository
- You should see your branch in the branch dropdown
- ✅ **Checkpoint**: Your changes are on GitHub!

---

## Step 10: Create a Pull Request

### 10.1 Start Pull Request
1. Go to your forked repository on GitHub
2. Click **"Compare & pull request"** (you should see a banner)
3. Or click **"Pull requests"** tab → **"New pull request"**

### 10.2 Fill Pull Request Details
1. **Base repository**: `KaizellMickhos/student-directory`
2. **Base branch**: `main`
3. **Head repository**: `YOURUSERNAME/student-directory`
4. **Compare branch**: `feature/your-name-profile`

### 10.3 Add Description
```
## What does this PR do?
- Adds my student profile to the homepage

## Testing
- [x] Profile appears on homepage
- [x] Search functionality works
- [x] Social links are valid

## Screenshots
(Add screenshot of your profile card)
```

### 10.4 Create PR
1. Click **"Create pull request"**
2. ✅ **Checkpoint**: Your PR is submitted for review!

---

## Step 11: Code Review Process

### 11.1 Review Others' PRs
1. Go to the original repository: https://github.com/KaizellMickhos/student-directory
2. Click **"Pull requests"**
3. Review at least 2 other students' PRs
4. Leave constructive comments

### 11.2 Address Feedback
1. If you get feedback on your PR, make changes locally
2. Commit and push the fixes
3. The PR will update automatically

### 11.3 Merge
- Once approved, your instructor will merge your PR
- Your profile will be live on the main site!

---

## Step 12: Create Your Profile Page (Advanced)

### 12.1 Create Profile Page
1. Copy `students/amarah-mensah.html` to `students/your-name.html`
2. Customize with your information
3. Update the "View Profile" button in `main.js`:
```javascript
<button onclick="window.location.href='students/your-name.html'">
  View Profile →
</button>
```

### 12.2 Test and Submit
1. Test navigation from home to your profile
2. Commit, push, and create another PR

---

## 🆘 Troubleshooting

### "git command not found"
- Make sure Git is installed correctly
- Restart your terminal/command prompt
- Check your PATH environment variable

### "Permission denied" when pushing
- Make sure you're using HTTPS URL for cloning
- Check your GitHub credentials

### Changes not showing on GitHub
- Make sure you committed: `git commit -m "message"`
- Make sure you pushed: `git push origin branch-name`

### Can't create pull request
- Make sure you forked the repository first
- Make sure your branch is pushed to your fork

### Need help?
- Check GitHub's documentation: https://docs.github.com
- Ask your instructor or classmates
- Use Google to search for specific error messages

---

## 📚 Additional Resources

- [GitHub Hello World Guide](https://docs.github.com/en/get-started/quickstart/hello-world)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Markdown Guide](https://www.markdownguide.org/basic-syntax/)
- [HTML/CSS/JS Tutorials](https://www.freecodecamp.org/)

---

## 🎯 Next Steps

After completing this setup:
1. ✅ You can contribute to the project
2. ✅ You understand Git workflow
3. ✅ You know how to collaborate on GitHub
4. ✅ You're ready for code reviews!

**Remember**: Learning Git and GitHub takes practice. Don't worry if you make mistakes - that's how you learn! 🚀