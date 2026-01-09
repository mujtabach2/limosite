import { Metadata } from 'next';
import Link from 'next/link';
import { FiCalendar, FiClock, FiUser, FiArrowLeft, FiArrowRight } from 'react-icons/fi';

// This would typically come from a CMS or database
const blogPosts: { [key: string]: any } = {
  'ultimate-guide-toronto-airport-transfers': {
    title: 'The Ultimate Guide to Toronto Airport Transfers',
    excerpt: 'Everything you need to know about getting to and from Toronto Pearson Airport in style and comfort.',
    image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=1200&q=80',
    category: 'Airport Travel',
    date: '2024-01-15',
    readTime: '5 min read',
    author: 'GTA Limo Team',
    content: `
      <p>Toronto Pearson International Airport is Canada's busiest airport, handling millions of passengers each year. Whether you're a business traveler or heading out on vacation, how you get to and from the airport can set the tone for your entire trip.</p>

      <h2>Why Choose Professional Airport Transportation?</h2>
      <p>While there are many options for airport transfers, professional limousine service offers unmatched benefits:</p>
      <ul>
        <li><strong>Reliability:</strong> Professional drivers track your flight and adjust pickup times for delays</li>
        <li><strong>Comfort:</strong> Start your journey relaxed in a luxury vehicle</li>
        <li><strong>Efficiency:</strong> Direct service with no multiple stops</li>
        <li><strong>Fixed Pricing:</strong> Know your cost upfront with no surge pricing</li>
      </ul>

      <h2>Booking Your Airport Transfer</h2>
      <p>For the best experience, book your airport transfer at least 24 hours in advance. This ensures vehicle availability and allows your driver to plan the optimal route.</p>

      <h3>What Information to Provide</h3>
      <ul>
        <li>Flight number and airline</li>
        <li>Departure or arrival time</li>
        <li>Number of passengers and luggage</li>
        <li>Pickup or drop-off location</li>
        <li>Any special requirements (child seats, accessibility needs)</li>
      </ul>

      <h2>Day of Travel Tips</h2>
      <p>For departures, we recommend pickup times that get you to the airport 2 hours before domestic flights and 3 hours before international flights. Your driver will suggest optimal timing when you book.</p>

      <p>For arrivals, your driver will be tracking your flight. After landing, collect your luggage and proceed to the designated meeting point. Your driver will have a sign with your name.</p>

      <h2>Service Areas</h2>
      <p>Our airport transfer service covers all major airports in the region:</p>
      <ul>
        <li>Toronto Pearson International Airport (YYZ)</li>
        <li>Billy Bishop Toronto City Airport (YTZ)</li>
        <li>Hamilton International Airport (YHM)</li>
        <li>Buffalo Niagara International Airport (BUF)</li>
      </ul>

      <h2>Ready to Book?</h2>
      <p>Experience the convenience of professional airport transportation. Book your transfer today and travel with confidence.</p>
    `
  },
  'corporate-transportation-benefits': {
    title: '5 Benefits of Corporate Transportation Services',
    excerpt: 'Discover why more businesses are choosing professional transportation services for their executives and teams.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
    category: 'Corporate',
    date: '2024-01-10',
    readTime: '4 min read',
    author: 'GTA Limo Team',
    content: `
      <p>In today's competitive business environment, every advantage counts. Corporate transportation services offer significant benefits that go beyond simply getting from point A to point B.</p>

      <h2>1. Enhanced Productivity</h2>
      <p>When executives travel by professional car service, they can work during transit. With WiFi-equipped vehicles and comfortable workspaces, travel time becomes productive time. Make calls, review presentations, or catch up on emails while your professional chauffeur handles the driving.</p>

      <h2>2. Professional Image</h2>
      <p>First impressions matter in business. Arriving in a luxury vehicle driven by a professional chauffeur demonstrates attention to detail and success. When entertaining clients or partners, premium transportation shows you value their time and comfort.</p>

      <h2>3. Reliability and Punctuality</h2>
      <p>Professional drivers understand the importance of timing in business. They plan routes accounting for traffic, monitor conditions in real-time, and have backup routes ready. You'll never miss a meeting or flight due to transportation issues.</p>

      <h2>4. Cost Efficiency</h2>
      <p>While it may seem counterintuitive, corporate transportation can be more cost-effective than alternatives. Consider the hidden costs of rental cars, parking, fuel, and the executive's time spent driving. Professional service provides transparent, predictable costs with corporate billing options.</p>

      <h2>5. Reduced Stress</h2>
      <p>Business travel is stressful enough without worrying about navigation, parking, or traffic. Professional transportation eliminates these concerns, allowing executives to focus on what matters - their business objectives.</p>

      <h2>Implementing Corporate Transportation</h2>
      <p>Many companies establish corporate accounts for streamlined booking and billing. This provides access to preferred rates, priority service, and detailed expense reporting.</p>

      <p>Whether for regular executive travel, client entertainment, or special corporate events, professional transportation services deliver value that extends far beyond the ride itself.</p>
    `
  },
};

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts[params.slug];
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Apex Executive Limo Blog`,
    description: post.excerpt,
    keywords: `${post.category}, luxury transportation, Toronto, GTA, Apex Executive Limo`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [post.image],
    },
  };
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts[params.slug];

  if (!post) {
    return (
      <main className="pt-20 section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900">
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[400px] bg-gray-900">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container-custom">
            <div className="max-w-4xl">
              <div className="inline-block bg-white px-4 py-2 rounded-lg mb-4">
                <span className="font-semibold text-gray-900">{post.category}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <FiUser className="w-5 h-5" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar className="w-5 h-5" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiClock className="w-5 h-5" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-gray-900
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
                prose-ul:my-6 prose-li:text-gray-600 prose-li:my-2
                prose-strong:text-gray-900 prose-strong:font-semibold"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* CTA */}
            <div className="mt-12 p-8 bg-gray-900 text-white rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Experience Luxury?</h3>
              <p className="text-gray-300 mb-6">
                Book your premium ride today and discover why we're the preferred choice for luxury transportation in the GTA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book" className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center">
                  Book Now
                </Link>
              <a href="tel:+16477207100" className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-center">
                Call Us
              </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t flex justify-between items-center">
              <Link href="/blog" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                <FiArrowLeft className="w-5 h-5" />
                <span className="font-semibold">Back to Blog</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }));
}

