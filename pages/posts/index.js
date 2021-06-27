// import styles from '../styles/Home.module.css'
import blogs from "../../blogs";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div id="card-container">
      {blogs.map((blog) => (
        <div key={blog.id} className="cards">
          <Link href={`/posts/${encodeURIComponent(blog.id)}`}>
            <a>
              <h2>{blog.name}</h2>
              <div className="image-container"></div>
              <Image
                src={blog.img}
                alt="Flutter Gradient Background"
                width="1200"
                height="800"
              />
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
