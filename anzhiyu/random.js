var posts=["2025/04/15/hello-world/","2023/07/19/三伏天突袭南京/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };