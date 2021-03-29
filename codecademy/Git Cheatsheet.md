# Git Cheatsheet

The following commands are useful in the Git branch workflow.

+ <b>git branch</b>: Lists all a Git project’s branches.
+ <b>git branch branch_name</b>: Creates a new branch.
+ <b>git checkout branch_name</b>: Used to switch from one branch to another.
+ <b>git merge branch_name</b>: Used to join file changes from one branch to another.
+ <b>git branch -d branch_name</b>: Deletes the branch specified.
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

