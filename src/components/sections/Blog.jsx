import SectionWrapper from "../ui/SectionWrapper";
import { blog } from "../../data/blog";
import { motion } from "framer-motion";

export default function Blog() {
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

      {blog[0].type === "placeholder" ? (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: false }}
          className="border border-dashed border-gray-300 rounded-xl p-16 flex flex-col items-center justify-center text-center gap-4"
        >
          <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center mb-2">
            <span className="font-mono text-accent text-xl">_</span>
          </div>
          <h3 className="font-sans text-2xl font-semibold text-charcoal">
            Writeups Coming Soon
          </h3>
          <p className="font-sans text-base text-muted max-w-md leading-relaxed">
            I am actively working on CTF writeups, vulnerability research notes,
            and security tooling documentation. Check back soon.
          </p>
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {[
              "CTF Writeups",
              "Vulnerability Research",
              "Security Tooling",
              "OSCP Notes",
            ].map((tag) => (
              <span
                key={tag}
                className="font-mono text-sm px-3 py-1 border border-gray-200 text-muted rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      ) : (
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
              className="border border-gray-200 rounded-xl p-6 bg-white hover:border-accent transition-colors duration-300 flex flex-col gap-4"
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
                  <span className="font-mono text-xs text-muted">
                    {post.date}
                  </span>
                )}
              </div>
              <h3 className="font-sans text-xl font-semibold text-charcoal">
                {post.title}
              </h3>
              <p className="font-sans text-base text-muted leading-relaxed flex-1">
                {post.description}
              </p>
              {post.link && (
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-accent hover:text-charcoal transition-colors"
                >
                  Read more
                </a>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
