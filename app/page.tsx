import Other from "./(components)/ui/Other";
import Tech from "./(components)/home/Tech";
import Travel from "./(components)/home/Travel";
import Trending from "./(components)/home/Trending";
import Subscribe from "./(components)/ui/Subscribe";
import Sidebar from "./(components)/ui/Sidebar";
import { prisma } from "./api/client";
import { Post } from "@prisma/client";

//
export const revalidate = 60;

const getPosts = async () => {
  const posts = await prisma.post.findMany();
  return posts;
};

// -If we use post.image directly it is impossible to add placeholder property. So we have to format images and make them static imports. This is not practical as you will need to have all images in your public directory

export default async function Home() {
  const posts = await getPosts();

  const formatPosts = () => {
    const trendingPosts: Array<Post> = [];
    const techPosts: Array<Post> = [];
    const travelPosts: Array<Post> = [];
    const otherPosts: Array<Post> = [];

    posts.forEach((post: Post, i: number) => {
      if (i % 4 === 0) {
        trendingPosts.push(post);
      }
      if (post?.category === "Tech") {
        techPosts.push(post);
      } else if (post?.category === "Travel") {
        travelPosts.push(post);
      } else if (post?.category === "Interior Design") {
        otherPosts.push(post);
      }
    });

    return [trendingPosts, techPosts, travelPosts, otherPosts];
  };

  const [trendingPosts, techPosts, travelPosts, otherPosts] = formatPosts();
  return (
    // The styling for whole page i.e background color is in the main below.
    <main className="px-10 leading-7 bg-bl-primary">
      <Trending post={trendingPosts} />
      {/* This div below controls the whole content under the trendign section. md:flex means 
        that a sidebar is created for larger screens while for smaller screens it collapses vertically with the content. */}
      <div className="gap-10 mb-5 md:flex">
        {/* This div below contains all the content except the sidebar for larger screens. */}
        <div className="basis-3/4">
          <Tech post={techPosts} />
          <Travel post={travelPosts} />
          <Other post={otherPosts} />
          {/* This div below is only visible in the main content when on larger 
            screens as it already exists in sidebar which collapses vertically in smaller screens */}
          <div className="hidden md:block">
            <Subscribe />
          </div>
        </div>
        {/* This is the div for the sidebar. Sidebar for larger screens and collapses vertically for smaller screens */}
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
