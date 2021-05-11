
module.exports = {
  layout: "layouts/news/posts.njk",
  bodyClass: "news-post",
  tags: [
    "news",
    "post"
  ],
  permalink: "/news/{{ page.fileSlug }}.html",
  changefreq: "monthly",
  priority: "0.9",
  hidden: false
}
