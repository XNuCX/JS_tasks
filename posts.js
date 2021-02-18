function solve() {
  class Post {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }
    toString() {
      return [`Post: ${this.title}`, `Content: ${this.content}`].join("\n");
    }
  }

  class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes) {
      super(title, content);
      this.likes = likes;
      this.dislikes = dislikes;
      this.comments = [];
    }
    addComment(comment) {
      this.comments.push(comment);
    }
    toString() {
      let result = [super.toString(), `Rating: ${this.likes - this.dislikes}`];
      if (this.comments.length > 0) {
        result.push("Comments:");
        result.push(" * " + this.comments.join("\n * "));
      }
      return result.join("\n");
    }
  }
  class BlogPost extends Post {
    constructor(title, content, views) {
      super(title, content);
      this.views = Number(views);
    }
    view() {
      this.views++;
      return this;
    }
    toString() {
      return super.toString() + `\nViews: ${this.views}`;
    }
  }
  return { Post, SocialMediaPost, BlogPost };
}
let [Post, SocialMediaPost, BlogPost] = solve();
let post = new SocialMediaPost("Post", "Content", 15, 10);
console.log(post);

console.log(post.toString());
let scm = new BlogPost("TestTitle", "TestContent", 10);

scm.view().view();
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());
