import React from 'react';
import Button from '../ui/Button';
import { useScrollReveal, useScrollRevealDirection } from '../../hooks/UseScrollReveal';
import { blogPosts } from '../../data/DetailBlogData';

const BlogSection: React.FC = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section className="bg-global-8 py-16">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4 transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-global-2 mb-2">
              What's trending now
            </h2>
            <p className="text-base text-global-3">
              Discover the most trending products in Ciseco.
            </p>
          </div>
          <button className="flex items-center gap-2 text-sm text-global-2">
            See all products
            <img src="/images/img_arrow_right.svg" alt="Arrow" className="w-4 h-4" />
          </button>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Large Blog Post */}
          <div className="space-y-6">
            {(() => { const [blogRef, blogClass] = useScrollRevealDirection(0); return (
              <img 
                ref={blogRef}
                src={blogPosts[0].image} 
                alt={blogPosts[0].title} 
                className={`w-full h-96 object-cover ${blogClass} transition-all duration-700 ease-out`}
              />
            ); })()}
            <div>
              <Button 
                variant="secondary" 
                size="sm"
                className="bg-button-1 text-button-1 mb-4"
              >
                {blogPosts[0].date}
              </Button>
              <h3 className="text-2xl lg:text-3xl font-semibold text-global-2 leading-tight">
                {blogPosts[0].title}
              </h3>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="space-y-6">
            {blogPosts.slice(1).map((post, index) => (
              <div key={post.id} className="flex gap-6">
                {index % 2 === 0 ? (
                  <>
                    <div className="flex-1">
                      <Button 
                        variant="secondary" 
                        size="sm"
                        className="bg-button-1 text-button-1 mb-4"
                      >
                        {post.date}
                      </Button>
                      <h3 className="text-xl lg:text-3xl font-semibold text-global-2 leading-tight mb-4">
                        {post.title}
                      </h3>
                      <button className="flex items-center gap-2 text-sm text-global-2">
                        Read More
                        <img src="/images/img_arrow_right.svg" alt="Arrow" className="w-4 h-4" />
                      </button>
                    </div>
                    {(() => { const [imgRef, imgClass] = useScrollRevealDirection(index + 1); return (
                      <img 
                        ref={imgRef}
                        src={post.image} 
                        alt={post.title} 
                        className={`w-48 h-48 object-cover ${imgClass} transition-all duration-700 ease-out`}
                      />
                    ); })()}
                  </>
                ) : (
                  <>
                    {(() => { const [imgRef, imgClass] = useScrollRevealDirection(index + 1); return (
                      <img 
                        ref={imgRef}
                        src={post.image} 
                        alt={post.title} 
                        className={`w-48 h-48 object-cover ${imgClass} transition-all duration-700 ease-out`}
                      />
                    ); })()}
                    <div className="flex-1">
                      <Button 
                        variant="secondary" 
                        size="sm"
                        className="bg-button-1 text-button-1 mb-4"
                      >
                        {post.date}
                      </Button>
                      <h3 className="text-xl lg:text-3xl font-semibold text-global-2 leading-tight mb-4">
                        {post.title}
                      </h3>
                      <button className="flex items-center gap-2 text-sm text-global-2">
                        Read More
                        <img src="/images/img_arrow_right.svg" alt="Arrow" className="w-4 h-4" />
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;