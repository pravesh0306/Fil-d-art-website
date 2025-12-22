import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { journalPosts } from '../data';
import { ArrowLeft, Share2, Calendar } from 'lucide-react';

const JournalPost = () => {
  const { slug } = useParams();
  const post = journalPosts.find(p => p.id === slug);

  if (!post) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="page-container">
      <motion.div
        className="journal-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link to="/" className="back-link">
          <ArrowLeft size={20} /> Back to Home
        </Link>

        <header className="post-header">
          <span className="post-date">
            <Calendar size={16} /> {post.date}
          </span>
          <h1 className="post-title">{post.title}</h1>
          <div className="post-share">
            <button className="share-btn" onClick={() => navigator.clipboard.writeText(window.location.href)}>
              <Share2 size={20} /> Share
            </button>
          </div>
        </header>

        <div className="post-hero">
          <img src={post.image} alt={post.title} loading="lazy" />
        </div>

        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="post-footer">
          <h3>More from the Journal</h3>
          <div className="related-posts">
            {journalPosts.filter(p => p.id !== slug).slice(0, 2).map(p => (
              <Link to={`/journal/${p.id}`} key={p.id} className="related-card">
                <div className="related-image">
                  <img src={p.image} alt={p.title} />
                </div>
                <h4>{p.title}</h4>
              </Link>
            ))}
          </div>
        </div>

      </motion.div>

      <style jsx>{`
        .page-container {
          padding-top: 120px;
          min-height: 100vh;
          background-color: var(--color-bg);
          padding-bottom: 4rem;
        }

        .journal-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-text);
          opacity: 0.6;
          margin-bottom: 2rem;
          font-size: 0.9rem;
          transition: opacity 0.3s;
        }

        .back-link:hover {
          opacity: 1;
        }

        .post-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .post-date {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-sans);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          opacity: 0.6;
          margin-bottom: 1rem;
        }

        .post-title {
          font-family: var(--font-serif);
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }
        
        .share-btn {
            background: none;
            border: none;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            opacity: 0.5;
            transition: opacity 0.3s;
        }
        
        .share-btn:hover {
            opacity: 1;
        }

        .post-hero {
          margin-bottom: 3rem;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }

        .post-hero img {
          width: 100%;
          height: auto;
          display: block;
        }

        .post-body {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          line-height: 1.8;
          color: var(--color-text);
          opacity: 0.9;
        }

        .post-body h3 {
          font-family: var(--font-sans);
          font-size: 1.5rem;
          margin-top: 3rem;
          margin-bottom: 1rem;
          opacity: 1;
        }

        .post-body p {
          margin-bottom: 1.5rem;
        }
        
        .post-footer {
            margin-top: 5rem;
            padding-top: 3rem;
            border-top: 1px solid rgba(0,0,0,0.1);
        }
        
        .related-posts {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin-top: 1.5rem;
        }
        
        .related-card {
            display: block;
        }
        
        .related-image {
            height: 200px;
            background: #eee;
            margin-bottom: 1rem;
            overflow: hidden;
            border-radius: 4px;
        }
        
        .related-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s;
        }
        
        .related-card:hover .related-image img {
            transform: scale(1.05);
        }
        
        .related-card h4 {
            font-family: var(--font-serif);
            font-size: 1.2rem;
        }

        @media (max-width: 768px) {
          .post-title {
            font-size: 2.5rem;
          }
          .related-posts {
            grid-template-columns: 1fr;
          }
        }

        /* Gallery Styles injected via innerHTML */
        :global(.journal-gallery-grid) {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin: 2.5rem 0;
        }

        :global(.journal-gallery-grid img) {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 4px;
        }

        :global(.journal-gallery-single) {
          margin: 2.5rem 0;
        }

        :global(.journal-gallery-single img) {
          width: 100%;
          height: auto;
          max-height: 500px;
          object-fit: cover;
          border-radius: 4px;
        }

        @media (max-width: 600px) {
          :global(.journal-gallery-grid) {
             grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default JournalPost;
