import { Metadata } from 'next';
import Link from 'next/link';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Luxury Transportation Blog | Tips & Guides - Apex Executive Limo',
  description: 'Expert advice on luxury transportation, airport transfers, corporate travel, and special events. Tips for booking limo services in Toronto and GTA.',
  keywords: 'luxury transportation blog, limo tips, Toronto travel, airport transfer guide, Apex Executive Limo',
};

// This would typically come from a CMS or database
const blogPosts = [
  {
    slug: 'ultimate-guide-toronto-airport-transfers',
    title: 'The Ultimate Guide to Toronto Airport Transfers',
    excerpt: 'Everything you need to know about getting to and from Toronto Pearson Airport in style and comfort.',
    image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80',
    category: 'Airport Travel',
    date: '2024-01-15',
    readTime: '5 min read',
    author: 'Apex Limo Team'
  },
  {
    slug: 'corporate-transportation-benefits',
    title: '5 Benefits of Corporate Transportation Services',
    excerpt: 'Discover why more businesses are choosing professional transportation services for their executives and teams.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    category: 'Corporate',
    date: '2024-01-10',
    readTime: '4 min read',
    author: 'Apex Limo Team'
  },
  {
    slug: 'wedding-transportation-planning',
    title: 'Wedding Transportation: A Complete Planning Guide',
    excerpt: 'Make your special day perfect with our comprehensive guide to planning wedding transportation.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
    category: 'Weddings',
    date: '2024-01-05',
    readTime: '6 min read',
    author: 'Apex Limo Team'
  },
  {
    slug: 'choosing-right-limo-service',
    title: 'How to Choose the Right Limo Service in Toronto',
    excerpt: 'Key factors to consider when selecting a luxury transportation provider in the GTA.',
    image: 'https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?w=800&q=80',
    category: 'Tips & Guides',
    date: '2024-01-01',
    readTime: '5 min read',
    author: 'Apex Limo Team'
  },
  {
    slug: 'luxury-travel-business-executives',
    title: 'Luxury Travel Tips for Business Executives',
    excerpt: 'Maximize productivity and arrive refreshed with these executive travel tips.',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80',
    category: 'Corporate',
    date: '2023-12-28',
    readTime: '4 min read',
    author: 'Apex Limo Team'
  },
  {
    slug: 'airport-limo-vs-taxi-comparison',
    title: 'Airport Limo vs Taxi: Which is Better?',
    excerpt: 'Compare the pros and cons of airport limousine services versus traditional taxis.',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80',
    category: 'Airport Travel',
    date: '2023-12-20',
    readTime: '3 min read',
    author: 'Apex Limo Team'
  },
  {
    slug: 'night-out-transportation-guide',
    title: 'Safe Night Out: Your Transportation Guide',
    excerpt: 'Plan the perfect night out with safe, reliable transportation options for bars, clubs, and events.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    category: 'Tips & Guides',
    date: '2023-12-15',
    readTime: '4 min read',
    author: 'Apex Limo Team'
  },
  {
    slug: 'luxury-suv-vs-sedan-guide',
    title: 'Luxury SUV vs Sedan: Which Should You Choose?',
    excerpt: 'Understanding the differences between luxury SUVs and sedans to make the best choice for your needs.',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
    category: 'Fleet',
    date: '2023-12-10',
    readTime: '5 min read',
    author: 'Apex Limo Team'
  },
  {
    slug: 'toronto-pearson-terminal-guide',
    title: 'Toronto Pearson Airport Terminal Guide',
    excerpt: 'Navigate Toronto Pearson&apos;s terminals like a pro with our comprehensive guide.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
    category: 'Airport Travel',
    date: '2023-12-05',
    readTime: '6 min read',
    author: 'Apex Limo Team'
  },
  {
    slug: 'special-occasions-limo-rental',
    title: 'Celebrating Special Occasions with a Limo',
    excerpt: 'From birthdays to anniversaries, discover how a luxury limo can elevate any celebration.',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80',
    category: 'Weddings',
    date: '2023-11-28',
    readTime: '4 min read',
    author: 'Apex Limo Team'
  },
];

const categories = ['All', 'Airport Travel', 'Corporate', 'Weddings', 'Fleet', 'Tips & Guides'];

export default function BlogPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-gray-300">
              Expert advice, tips, and insights on luxury transportation in the GTA
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-gray-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-colors font-medium"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <Link href={`/blog/${blogPosts[0].slug}`} className="group">
              <div className="grid lg:grid-cols-2 gap-8 bg-gray-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    Featured
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="text-sm font-semibold text-gray-600 mb-2">
                    {blogPosts[0].category}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-gray-600 transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <FiCalendar className="w-4 h-4" />
                      <span>{new Date(blogPosts[0].date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiClock className="w-4 h-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm font-semibold text-gray-600 mb-2">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gray-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <FiCalendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiClock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest tips, guides, and special offers
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900"
                required
              />
              <button
                type="submit"
                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

