import { Header2 } from "../../../devlink/Header2";
import { Section } from "../../../devlink/Section";
import { getPostById } from "@/lib/wp";

export default async function Page() {
  const POST_ID = 1; // your WP post ID
  const post = await getPostById(POST_ID);

  return (
    <>
      <Header2 />
      <Section
        contentSlot={
          <article
            className="rich-text" // match your Webflow rich-text class
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        }
      />
      </>
    );
  }

