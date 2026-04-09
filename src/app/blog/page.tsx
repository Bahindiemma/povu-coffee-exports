import type { Metadata } from 'next';
import Image from "next/image";
import Link from 'next/link';
import { blogPosts } from '@/lib/data/content';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'POVU Coffee blog — origin education, farmer stories, brewing guides.',
};

export default function BlogPage() {
  return (
    <>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80)' }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            The POVU Journal
          </h1>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section kf-latest-blog section-bg">
        <div className="container">
          <div className="kf-titles align-center">
            <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
              From the Origin
            </div>
            <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
              Farmer Stories, Origin Education & Brewing Guides
            </h3>
          </div>
          <div className="kf-blog-grid-items row">
            {blogPosts.map((post, index) => (
              <div key={post.slug} className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="kf-blog-grid-item element-anim-1 scroll-animate" data-animate="active">
                  <div className="image kf-image-hover">
                    <Link href={`/blog/${post.slug}`}>
                      <Image src={['https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&q=80','https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=600&q=80','https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&q=80'][index]} alt={post.title} width={600} height={400} className="w-full h-auto" />
                    </Link>
                  </div>
                  <div className="desc">
                    <div style={{ marginBottom: '8px' }}>
                      <span style={{
                        display: 'inline-block',
                        fontSize: '11px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em',
                        color: '#C9913A',
                        border: '1px solid rgba(185,146,114,0.3)',
                        padding: '3px 10px',
                      }}>
                        {post.category}
                      </span>
                    </div>
                    <h5 className="name">{post.title}</h5>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: '1.6', margin: '10px 0' }}>
                      {post.excerpt}
                    </p>
                    <div className="kf-date">
                      <i className="far fa-calendar-alt" />
                      {post.date}
                    </div>
                    <div className="kf-comm">
                      <i className="far fa-clock" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
