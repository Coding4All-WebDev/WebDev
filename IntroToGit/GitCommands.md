### Git and GitHub

#### 1. About

> What is version control in software development ?


Version control, also known as source control, is the practice of tracking and managing changes to software code. Version control systems are software tools that help software teams manage changes to source code over time.

Large teams when collaborating require tools to manage software, and changes done to it.
And hence we require tools.


---

> What is Git ?


Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.


---

> What is GitHub ?

GitHub is a website and cloud-based service that helps developers store and manage their code, as well as track and control changes to their code. 

GitHub understands the "Git" program and helps in managing software versions online.

This helps many developers access code from a common place, like GitHub and they can contribute their code, using the Git tool.


---

#### 2. Some Git commands used with GitHub

##### a. To start tracking a folder using git
```
git init
```
---

##### b. Create a repository on GitHub (explained in class)

---

##### c. Type the following commands in the terminal / command line

```
git remote origin add "https://.."
git branch -M main
```

---

##### d. After creating new files / updating new files

>  It is now time for you to upload / push your code onto your GitHub repository

```Note: Staging or staging area is done before first commit / save with git```


    // Case 1. If you want to add a file to staging then type

            git add <file-name>

    // Case 2. If you want to add many files to staging

            git add <file1> <file2> ....

        eg: if my file names are a.js, b.js, c.js

            git add a.js b.js c.js
    
    // Case 3. If you want to add all the files in your folder to staging

            git add .



---

##### e. You can check the status of your files before and after you add and commit

```
    git status
```

---

##### f. To finalize your changes with Git (after saving the content to your computer)

> Note: "-m" is an option to the commit used to give a message (it is mandatory)

```
    git commit -m "<type_your_message>"
```

---

##### g. To upload or "push" your new files and code to GitHub use the following command

```
    git push origin main
```

---

#### 3. Important Note

```
    Steps 2.d to 2.f are done every time you want to tell git you have updated your source code
```
