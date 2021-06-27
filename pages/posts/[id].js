import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import blogs from "../../blogs";
const Post = () => {
  console.log(useRouter().query.id);
  const [id, setId] = useState(0);
  const ids = useRouter().query.id;
  useEffect(() => {
    setId(ids);
  });
  return (
    <div id="blog-page">
      {blogs.map((blog) =>
        blog.id == id ? (
          <div id="blog-container-page">
            <h1>{blog.name}</h1>
            <Image
              className="imgs"
              alt="flutter gradient background"
              src={blog.img}
              width="1200"
              height="600"
            />

            {blog.text.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
        ) : null
      )}
    </div>
  );
};

export default Post;
