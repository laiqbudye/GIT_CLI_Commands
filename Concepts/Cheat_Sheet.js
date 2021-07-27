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
  
  
12. to see available branches:-
	- git branch


13. to create branch 
	- git branch <branch_name>


14. to chekout on another branch
	- git checkout <branch_name>


15. to create & checkout on new branch
	- git checkout -b <branch_name>


16. to push branch on remote
	- git push --set-upstream origin <branch_name>


17. to merge branch 
	- chekout to the branch in which you want to merge another branch (e.g chekout to develop)
	- git merge <branch_name... feature/myFeature> 

		
18. to check remote repo
	- git remote -v


19. to delete branch locally
	- git branch -d <branch_name>
	
		
20. to delete branch remotely
	- git push origin --delete <branch_name>
		
		
