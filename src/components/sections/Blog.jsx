import SectionWrapper from "../ui/SectionWrapper";
import { blog } from "../../data/blog";
import { motion } from "framer-motion";
import { useState } from "react";
import BlogPostModal from "../ui/BlogPostModal";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    if (post.platform === "internal") {
      setSelectedPost(post);
    } else if (post.link) {
      window.open(post.link, "_blank");
    }
  };

  return (
    <SectionWrapper id="blog" className="bg-base">
      <div className="mb-12">
        <p className="font-mono text-base text-accent tracking-widest uppercase mb-3">
          Research & Writeups
        </p>
        <h2 className="font-sans text-6xl font-bold text-charcoal">Blog</h2>
        <p className="font-sans text-lg text-muted mt-4 max-w-xl">
          Technical writeups, CTF solutions, vulnerability research, and
          security notes. Updated as I learn.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blog.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: false, margin: "-60px" }}
            onClick={() => handlePostClick(post)}
            className="cursor-pointer border border-gray-200 rounded-xl p-6 bg-white hover:border-accent hover:shadow-md transition-all duration-300 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2 py-0.5 bg-surface text-muted border border-gray-200 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {post.date && (
                <span className="font-mono text-xs text-muted shrink-0">
                  {post.date}
                </span>
              )}
            </div>

            <h3 className="font-sans text-xl font-semibold text-charcoal leading-snug">
              {post.title}
            </h3>
            <p className="font-sans text-base text-muted leading-relaxed flex-1">
              {post.description}
            </p>

            <div className="mt-auto pt-2 border-t border-gray-100 flex items-center justify-between">
              <span className="font-mono text-xs text-accent">
                {post.platform === "internal"
                  ? "Read article"
                  : "Read on " + post.platform}
              </span>
              {post.platform !== "internal" && (
                <span className="font-mono text-xs text-muted">External</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {selectedPost && (
        <BlogPostModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </SectionWrapper>
  );
}
