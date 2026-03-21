import { motion } from "framer-motion";

export default function CertRow({ cert, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, margin: "-60px" }}
      className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-6 py-6 bg-base hover:bg-surface transition-colors duration-200"
    >
      <div className="flex items-center gap-5">
        {cert.logo ? (
          <div
            className={
              "w-16 h-16 rounded-xl border border-gray-200 bg-white flex items-center justify-center shrink-0 overflow-hidden " +
              (cert.logoSize || "p-1")
            }
          >
            {" "}
            <img
              src={cert.logo}
              alt={cert.name}
              className="w-full h-full object-contain"
            />
          </div>
        ) : (
          <div className="w-16 h-16 rounded-xl border border-gray-200 bg-surface shrink-0 flex items-center justify-center">
            <span className="font-mono text-xs text-muted">CERT</span>
          </div>
        )}
        <div className="flex flex-col gap-1">
          <h3 className="font-sans text-xl font-semibold text-charcoal">
            {cert.name}
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-base text-muted">
              {cert.issuer}
            </span>
            {cert.issued && (
              <span className="font-mono text-base text-muted">
                · {cert.issued}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 shrink-0">
        {cert.status === "active" ? (
          <span className="font-mono text-sm px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
            Active
          </span>
        ) : (
          <span className="font-mono text-sm px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
            In Progress
          </span>
        )}
        {cert.verify && (
          <a
            href={cert.verify}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm px-4 py-2 bg-charcoal text-white hover:bg-accent transition-colors duration-200 rounded"
          >
            Verify
          </a>
        )}
      </div>
    </motion.div>
  );
}
