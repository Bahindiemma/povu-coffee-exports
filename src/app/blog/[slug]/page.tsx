import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '@/lib/data/content';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const paragraphs = post.content.split('\n\n').filter(Boolean);
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

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
            {post.title}
          </h1>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section kf-blog-single">
        <div className="container">
          <div className="row" style={{ justifyContent: 'center' }}>
            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8">
              <div className="kf-blog-single-content element-anim-1 scroll-animate" data-animate="active">
                <div style={{ marginBottom: '20px', display: 'flex', gap: '15px', alignItems: 'center' }}>
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
                  <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>
                    <i className="far fa-clock" style={{ marginRight: '5px' }} />{post.readTime}
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>
                    <i className="far fa-calendar-alt" style={{ marginRight: '5px' }} />{post.date}
                  </span>
                </div>

                <Link href="/blog" style={{ color: '#C9913A', fontSize: '14px', display: 'inline-block', marginBottom: '30px' }}>
                  <i className="fas fa-arrow-left" style={{ marginRight: '8px' }} />Back to Journal
                </Link>

                {paragraphs.map((p, i) => (
                  <p key={i} style={{
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '16px',
                    lineHeight: '1.9',
                    marginBottom: '20px',
                  }}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="section kf-latest-blog section-bg">
        <div className="container">
          <div className="kf-titles align-center">
            <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
              More from the Journal
            </div>
          </div>
          <div className="kf-blog-grid-items row" style={{ justifyContent: 'center' }}>
            {relatedPosts.map((p, index) => (
              <div key={p.slug} className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div className="kf-blog-grid-item element-anim-1 scroll-animate" data-animate="active">
                  <div className="image kf-image-hover">
                    <Link href={`/blog/${p.slug}`}>
                      <img src={['https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&q=80','https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=600&q=80'][index]} alt={p.title} />
                    </Link>
                  </div>
                  <div className="desc">
                    <h5 className="name">{p.title}</h5>
                    <div className="kf-date">
                      <i className="far fa-clock" />{p.readTime}
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
