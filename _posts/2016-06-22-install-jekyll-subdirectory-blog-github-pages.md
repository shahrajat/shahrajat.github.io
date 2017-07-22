---
layout: post
title: How I installed Jekyll in a Subdirectory for blog on GitHub
date: '2016-06-22 20:54:40 -0700'
categories: jekyll
published: true
---
**Edit** 07/04/2016: I have now installed Jekyll in the root directory itself, but following tutorial still holds. 

Jekyll is one clever way of having a blog which doesn't require you to have any Database or Backend server. All it does is generate Static HTML pages from Markdown format which you can directly host on the Github Pages. Here I will step-by-step guide on how to host a website and blog all from GitHub pages. 

- Estimated time: 15 Minutes
- Outcome: GitHub website and blog hosted similar to [http://shahrajat.github.io](http://shahrajat.github.io) and [http://shahrajat.github.io/blog](http://shahrajat.github.io/blog)

## Hosting a static website on GitHub (without Jekyll)
**Note**: You can do the following entirely from GitHub website without the need of having to create a repository locally and then pushing it through terminal.

1. Create a new GiHub repository named `<username>.github.io`.
2. Add `index.html` in it in the root directory it self.
3. Your website should now be accesible from `http://<username>.github.io`.

Or, if you prefer to have a project website, simply push the static HTML pages to a new gh-pages branch and it will be accessible from `<username>.github.io/project`!

## Hosting Jekyll Blog in subdirectory

I have my Homepage of the website [shahrajat.github.io](http://shahrajat.github.io) hosted with some static HTML pages I wrote. However, I don't want to have my blog hosted on the Homepage itself, instead I have it hosted at `shahrajat.github.io/blog`. To achieve this, follow these steps: 

1. **Install Ruby**: Since Jekyll runs with Ruby, you will need to have Ruby. If you are Mac and have home-brew installed, simply run `brew install ruby`.
2. **Install Jekyll**: Jekyll is like any other gem in Ruby which you can install with `gem install jekyll` or `sudo gem install jekyll`.
3. Create a new empty repository named `blog` on GitHub through the website.
4. Clone this repository locally with `git clone YOUR_REPOSITORY_LINK`. For example `git clone https://github.com/shahrajat/blog.git`.
5. From the parent directory of `blog`, run `jekyll new blog`. This will create a new blog in the `blog` folder. Now move to blog folder with `cd blog`.
6. Now, the key thing is, unlike other User/Organization sites (the ones hosted on `username.github.io`) which are contained in `master` branch, the Project Sites (like in the `blog` subdirectory) should be in a branch named `gh-pages`. So you need to commit the entire website (the repository named `blog` which you created) on this branch instead of the `master` branch.
7. To do this, create and switch to a new branch with `git checkout -b gh-pages`.
8. You can test you website locally by first building the website `jekyll build` and running the server with `jekyll serve`. Visit [http://127.0.0.1:4000](http://127.0.0.1:4000) to view it. 
9. **Add, Commit and Push**: run `git add -A`, `git commit -m "Initial commit"` and `git push origin gh-pages`.
10. **Updating _config.yml**: If you visit [http://username.github.io/blog](http://username.github.io/blog) you will have the HTML any CSS. This is because the the configuration in default Jekyll setup doesn't know that you expect the base folder to be in `/blog`. You can achieve this with editing the `_config.yml` file and adding these variable to it:


{% highlight md %}
baseurl: "/blog"
production_url : http://<username>.github.io.com/blog
BASE_PATH : http://<username>.com/blog
{% endhighlight %}

That's it! Your new blog should now accessible from `http://<username>.github.io/blog`. :smile:

## What Next?
Editing Markdown using GitHub is painful. A better approach is to use an online Markdown editors which are close to WYSIWYG editors. My favorite currently is [http://prose.io/](http://prose.io/) which allows linking github account to it so that you can directly browse your repositories/source files, edit them and see a preview before committing.


**Important References**:

1. For installing Ruby and Jekyll: [https://scotch.io/tutorials/getting-started-with-jekyll-plus-a-free-bootstrap-3-starter-theme](https://scotch.io/tutorials/getting-started-with-jekyll-plus-a-free-bootstrap-3-starter-theme).

2. For installing Jekyll in a subdirectory: [http://stackoverflow.com/questions/23417062/getting-jekyll-running-just-for-a-subdirectory-on-github?rq=1](http://stackoverflow.com/questions/23417062/getting-jekyll-running-just-for-a-subdirectory-on-github?rq=1)

3. Jekyll basics: [http://jekyllrb.com/docs/usage/](http://jekyllrb.com/docs/usage/)

[Jekyll docs][jekyll-docs]

[jekyll-docs]: http://jekyllrb.com/docs/home
