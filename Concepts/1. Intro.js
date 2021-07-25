In most of the organizations to pull/push on git we need to use git commands.

so this file will be kind of cheat sheet to refer at any time.


1. to chek git version:-
  - git --version
  
  
2. to set username & email for the first time in git:-
  - git config --global user.name "your name"
  - git config --global user.email "your email id"


3. to check/get username & email 
  - git config --global user.name
  - git config --global user.email
  

4. to initialize git for a repo:-
  - git init

  
5. to clone repo from git:
  - git clone https://github.com/laiqbudye/test.git


6. to see which files got uncommited changes
  - git status
  
  
7. to stage file
  - git add <file name>  // it will take a particular file to staging area
  - git add .          // it will take all files to staging area
   
    
8. to unstage file
  - git restore --staged <file name>
  - git restore --staged .
    
    
9. to commit changes 
  - git commit -m "commit message"    // -m stands for message  // this command will commit on local branch


10. to see previous commits 
  - git log
  
  
11. to chekout on particular commit
  - git chekout <hashcode of commit>    // it will chekout on specific commit
  - git chekout branchname      // it will chekout on latest commit on that branch
  
  
12. 
