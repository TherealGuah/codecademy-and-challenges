# Git Cheatsheet

## Basic commands

+ <b>git init</b>: initialises a git repository
+ <b>git add file_name</b>(<b>.</b> to add all modified files): adds file_name from the working directory to the staging area.
+ <b>git status</b>: to see all modied files in working directory and staging area.
+ <b>git diff</b>: to see diferences from the working directory to the staging area.
+ <b>git commit -m "commit_message"</b>: to commit files in the staging area to the repository.
 + <b> git commit -amend (-am) -m "commit_message"</b>: is a convenient way to modify the most recent commit. (https://www.atlassian.com/git/tutorials/rewriting-history#git-commit--amend)

## The following commands are useful in the Git branch workflow.

+ <b>git branch</b>: Lists all a Git project’s branches.
+ <b>git branch branch_name</b>: Creates a new branch.
+ <b>git checkout branch_name</b>: Used to switch from one branch to another.
+ <b>git merge branch_name</b>: Used to join file changes from one branch to another.
+ <b>git branch -d branch_name</b>: Deletes the branch specified.
+ <b>git checkout -b branch_name</b>: creates a new branch and switches to it.
---
A <b>remote</b> is a Git repository that lives outside your Git project folder.

+ <b>git clone</b>: Creates a local copy of a remote.
+ <b>git remote -v</b>: Lists a Git project’s remotes.
+ <b>git fetch</b>: Fetches work from the remote into the local copy.
+ <b>git merge origin/master</b>: Merges origin/master into your local branch.
+ <b>git push origin branch_name</b>: Pushes a local branch to the origin remote.git br

Git workflow: 
+ <b>Fetch/Merge</b> -> update branch with most recent origin changes
+ <b>Commit</b> -> Make changes on branch and commit them
+ <b>Fetch/Merge</b> -> update with most recent changes to prevent merge conflicts
+ <b>git push origin branch_name</b> -> push branch to origin for merge in remote

