---
title: Python best practices
description: Best practices while working on a python project
properties:
  languages:
    - Python
    - Markdown
  labels:
    - best-practices
    - guide
---

### Introduction

Python is a vast language and even though it's easy to learn, it's quite difficult to master. On
your journey, you would soon realize that having the right tools to aid you is essential to
the completion of your journey. What do I mean by a tool? Anything which lets you write code
faster, more efficiently and easily or helps put down my thoughts and ideas into something
less abstract.

### Editors/IDEs

Even though I put editors and IDEs under the same category, they are actually quite
different. For some languages like `C++` and `Rust`, IDEs perform much better than editors.
However for Python, this isn't really an issue.

VSCode is the highest rated code editor and it stays at the top for a number of reasons.I
won't go into them but let me tell you, once you are comfortable with VSCode and its vast
ecosystem of extensions, you would have to think twice before switching to any other code
editor. We will be using VSCode for this post.

Another popular IDE is Pycharm. I don't use it since it doesn't handle non python files
very well and most of my projects use more than just python. On the other hand, VSCode does
this quite well.

### Version Control System (VCS)

VCS gives you the ability to go back in time and pick up versions of code you need. This
might not sound very useful but you'd know how useful it is once you have messed up a
project so much that CTRL+Z can't take you back far enough in the code history to fix the
issue. Moreover, with services like Github, Gitlab etc., you can share your code with ease.
These days most companies would look at you Github history before hiring you for a
programming job, because it is often an accurate measure of how actively you engage in
productive programming.

### Auto-completions

Auto-completions are another fundamental part of any project. Imagine having a huge
variable in your project (maybe like `DJANGO_RESTFRAMEWORK_PERMISSIONS`) and having to
retype it every time you have to use it. You'll surely end up with some bruises on your
finger tips. Auto-completions solve exactly this problem (along with a few more).

Among the many auto-completion tools that I have used, [Kite][8] has been the most effective.
It uses machine learning to analyze your code and then provides suggestions to speed up the
development by quite a bit. I also suggest you buy their PRO version which is so
good at reading your mind that it sometimes feels like it is your reading mind. You can get it
for free if you're a student from [here][9].

### Some python based tools

I will be describing a bunch of problems here and how these tools solve them. Most of them
can be installed in virtual environments (except the first one) and then be used without
any configuration .

1. **[python-poetry][10]**: This has been a game changer for me ever since I started to use
   it. Poetry takes care of virtual environment management for you, and also provides an
   easy to use interface to add and remove project dependencies. It features advanced
   dependency resolution (something at which `pip` isn't very good at) and can also publish
   packages for you to PyPI or any other repository.

2. **[flake8][11]** and **[autopep8][12]**: These are linters and formatters you can use to
   make sure your project stays [pep8](https://pep8.org/) compliant and has good
   industry-accepted standards. It also makes it easier to coordinate with team members
   when all of you follow the same code style.Moreover, VSCode has excellent support for
   these tools and can be configure to use them easily.

3. **[commitizen][13]**: Ever found yourself writing a commit message saying `fixed stuff`
   and then committing it, only to come back to it in the future and having no idea what
   that commit did? I think we all can.

   Commitizen solves this problem by forcing you to write better commit messages. It
   follows the [conventional-commit](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)
   standards and uses it to define a set of configurable rules.

4. **[pre-commit][14]**: Git hook scripts are useful for identifying simple issues before
   submission to code review. We run our hooks on every commit to automatically point out
   issues in code such as missing semicolons, trailing whitespace, and debug statements. By
   pointing these issues out before code review, this allows a code reviewer to focus on
   the architecture of a change while not wasting time with trivial style nitpicks.

### Some VSCode extensions

1. **[Kite completion][1]**: This is the VSCode extension that can be used to auto complete
   python code. It also provides HTML, Javascript and Go support.
2. **[Settings Sync][2]**: This will help you synchronize your VSCode settings between
   different development devices you use.
3. **[Waka Time][3]**: This measures the amount of time you spend coding, breaks it down by the
   project, language, editor used and even time spent per commit (pro feature).
4. **[Sourcery][4]**: Sourcery via IDE works as an AI-powered coding assistant which helps you
   write better Python code faster. It works by providing refactoring suggestions on the
   fly that you can instantly integrate into your code.
5. **[Code spell checker][5]**: Checks spelling and provides suggestions for incorrect ones.
   Quite useful especially if you write documentation in VSCode.
6. **[Error lens][6]**: Though VSCode comes with an inbuilt problem explorer, it's not really
   intuitive because it is difficult to open up the problems tab and find the line where
   your error is and fix it. This extension displays the error right on the line where it
   is encountered.
7. **[VSCode Test Explorer UI][7]**: Every good developer writes tests, so this is a really
   useful tool to have in your tool-belt. It displays a breakdown of all your tests and
   provides buttons to execute them on the fly.

## Finishing up

So there's the list of tools I use for my python development. I hope they help you as much
as they help me. Thank you for taking the time to read this and hope to see you soon!

[1]: https://www.kite.com/
[2]: https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync
[3]: https://marketplace.visualstudio.com/items?itemName=WakaTime.vscode-wakatime
[4]: https://marketplace.visualstudio.com/items?itemName=sourcery.sourcery
[5]: https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker
[6]: https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens
[7]: https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-test-explorer
[8]: https://www.kite.com/
[9]: https://www.kite.com/pro/student/
[10]: https://python-poetry.org/
[11]: https://pypi.org/project/flake8/
[12]: https://pypi.org/project/autopep8/
[13]: https://commitizen-tools.github.io/commitizen/
[14]: https://pre-commit.com/
