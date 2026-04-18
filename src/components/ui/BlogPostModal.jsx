import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function BlogPostModal({ post, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const renderContent = (content) => {
    const lines = content.split("\n");
    const elements = [];
    let listBuffer = [];
    let isFirst = true;

    const flushList = () => {
      if (listBuffer.length > 0) {
        elements.push(
          <ul
            key={"list-" + elements.length}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              margin: "24px 0",
              paddingLeft: "8px",
            }}
          >
            {listBuffer.map((item, i) => {
              const boldMatch = item.match(/\*\*(.+?)\*\* — (.+)/);
              return (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: "12px",
                    fontSize: "16px",
                    lineHeight: "1.8",
                    color: "#374151",
                  }}
                >
                  <span
                    style={{
                      color: "#C8922A",
                      flexShrink: 0,
                      fontFamily: "monospace",
                      marginTop: "2px",
                    }}
                  >
                    --
                  </span>
                  <span>
                    {boldMatch ? (
                      <>
                        <strong style={{ color: "#111318" }}>
                          {boldMatch[1]}
                        </strong>{" "}
                        — {boldMatch[2]}
                      </>
                    ) : (
                      item
                    )}
                  </span>
                </li>
              );
            })}
          </ul>,
        );
        listBuffer = [];
      }
    };

    lines.forEach((line, i) => {
      if (line.startsWith("## ")) {
        flushList();
        elements.push(
          <div key={i} style={{ marginTop: "56px", marginBottom: "20px" }}>
            <h2
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "24px",
                fontWeight: 800,
                color: "#111318",
                margin: 0,
                letterSpacing: "-0.02em",
                paddingBottom: "12px",
                borderBottom: "2px solid #F3F4F6",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  bottom: "-2px",
                  left: 0,
                  width: "48px",
                  height: "2px",
                  backgroundColor: "#C8922A",
                }}
              />
              {line.replace("## ", "")}
            </h2>
          </div>,
        );
      } else if (line.startsWith("- ")) {
        listBuffer.push(line.replace("- ", ""));
      } else if (line.trim() === "") {
        flushList();
        elements.push(<div key={i} style={{ height: "8px" }} />);
      } else {
        flushList();
        if (isFirst && line.trim().length > 0) {
          isFirst = false;
          const firstLetter = line.charAt(0);
          const rest = line.slice(1);
          elements.push(
            <p
              key={i}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "17px",
                lineHeight: "1.85",
                color: "#374151",
                margin: "0 0 20px 0",
              }}
            >
              <span
                style={{
                  float: "left",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "30px",
                  fontWeight: 800,
                  lineHeight: "0.1",
                  color: "#C8922A",
                  marginRight: "8px",
                  marginTop: "8px",
                }}
              >
                {firstLetter}
              </span>
              {rest}
            </p>,
          );
        } else {
          elements.push(
            <p
              key={i}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "17px",
                lineHeight: "1.85",
                color: "#374151",
                margin: "0 0 20px 0",
              }}
            >
              {line}
            </p>,
          );
        }
      }
    });
    flushList();
    return elements;
  };

  const wordCount = post.content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "rgba(200,200,200,0.35)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "#FDFCFB",
          borderRadius: "20px",
          boxShadow: "0 32px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.06)",
          width: "100%",
          maxWidth: "880px",
          maxHeight: "88vh",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Sticky header */}
        <div
          style={{
            padding: "16px 40px",
            borderBottom: "1px solid #F0EDE8",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "sticky",
            top: 0,
            backgroundColor: "#FDFCFB",
            zIndex: 10,
            backdropFilter: "blur(8px)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "10px",
                color: "#C8922A",
                letterSpacing: "0.15em",
                fontWeight: 600,
              }}
            >
              BLOG
            </span>
            <span
              style={{
                width: "1px",
                height: "10px",
                backgroundColor: "#D1CCC4",
              }}
            />
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "11px",
                color: "#9CA3AF",
              }}
            >
              {post.date}
            </span>
            <span
              style={{
                width: "1px",
                height: "10px",
                backgroundColor: "#D1CCC4",
              }}
            />
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "11px",
                color: "#9CA3AF",
              }}
            >
              {readingTime} min read
            </span>
          </div>
          <button
            onClick={onClose}
            style={{
              fontFamily: "monospace",
              fontSize: "11px",
              color: "#9CA3AF",
              border: "1px solid #E5E0D8",
              borderRadius: "6px",
              padding: "4px 12px",
              background: "none",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            ESC
          </button>
        </div>

        {/* Cover image */}
        {post.coverImage && (
          <div
            style={{
              width: "100%",
              height: "280px",
              overflow: "hidden",
              flexShrink: 0,
              position: "relative",
            }}
          >
            <img
              src={post.coverImage}
              alt={post.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, transparent 50%, rgba(253,252,251,0.9) 100%)",
              }}
            />
          </div>
        )}

        {/* Article content */}
        <div style={{ padding: "40px 52px 64px" }}>
          {/* Tags */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              marginBottom: "20px",
            }}
          >
            {post.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "monospace",
                  fontSize: "10px",
                  padding: "3px 10px",
                  borderRadius: "20px",
                  border: "1px solid #E8E2D9",
                  color: "#8B7355",
                  backgroundColor: "#F5F0E8",
                  letterSpacing: "0.05em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "34px",
              fontWeight: 800,
              color: "#111318",
              lineHeight: 1.2,
              marginBottom: "32px",
              letterSpacing: "-0.03em",
            }}
          >
            {post.title}
          </h1>

          {/* Author line */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "36px",
              paddingBottom: "32px",
              borderBottom: "1px solid #F0EDE8",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                border: "2px solid #C8922A",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <img
                src="/profile.jpg"
                alt="Yi Xue"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#111318",
                  margin: 0,
                }}
              >
                Lau Yi Xue
              </p>
              <p
                style={{
                  fontFamily: "monospace",
                  fontSize: "10px",
                  color: "#9CA3AF",
                  margin: 0,
                  letterSpacing: "0.05em",
                }}
              >
                CYBERSECURITY · NTU
              </p>
            </div>
          </div>

          {/* Body */}
          <div style={{ clearfix: "both" }}>{renderContent(post.content)}</div>

          {/* Footer */}
          <div
            style={{
              marginTop: "56px",
              paddingTop: "24px",
              borderTop: "1px solid #F0EDE8",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                fontFamily: "monospace",
                fontSize: "11px",
                color: "#9CA3AF",
                margin: 0,
              }}
            >
              Thanks for reading.
            </p>
            <button
              onClick={onClose}
              style={{
                fontFamily: "monospace",
                fontSize: "11px",
                color: "#C8922A",
                border: "1px solid #C8922A",
                borderRadius: "6px",
                padding: "6px 18px",
                background: "none",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
