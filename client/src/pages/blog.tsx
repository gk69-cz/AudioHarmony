// import { Navigation } from '@/components/navigation'
// import { CustomCursor } from '@/components/custom-cursor'
// import { Footer } from '@/components/footer'
// import { motion } from 'framer-motion'
// import { fadeInUp, staggerContainer } from '@/lib/animations'
// import { Calendar, User, ArrowRight } from 'lucide-react'
// import { Link } from 'wouter'

// export default function Blog() {
//   const articles = [
//     {
//       id: 1,
//       title: 'The Science Behind Zero Distortion Audio',
//       excerpt: 'Exploring the engineering principles that enable our speakers to achieve unprecedented clarity and accuracy.',
//       author: 'Dr. Sarah Chen',
//       date: '2024-01-15',
//       category: 'Technology',
//       image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
//     },
//     {
//       id: 2,
//       title: 'Room Acoustics: Optimizing Your Listening Environment',
//       excerpt: 'Professional tips for setting up your studio monitors and achieving the best possible sound in any space.',
//       author: 'Mark Rodriguez',
//       date: '2024-01-10',
//       category: 'Setup',
//       image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
//     },
//     {
//       id: 3,
//       title: 'The Future of Audio: Neural DSP Technology',
//       excerpt: 'How artificial intelligence is revolutionizing audio processing and what it means for the future of sound.',
//       author: 'Alex Thompson',
//       date: '2024-01-05',
//       category: 'Innovation',
//       image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
//     }
//   ]

//   return (
//     <>
//       <CustomCursor />
//       <Navigation />
//       <main className="pt-20">
//         <section className="py-32 bg-white dark:bg-satin-black">
//           <div className="max-w-8xl mx-auto px-6 lg:px-10">
//             <motion.div
//               variants={fadeInUp}
//               initial="initial"
//               animate="animate"
//               className="text-center mb-20"
//             >
//               <h1 className="text-6xl lg:text-8xl font-black tracking-wide mb-8">
//                 Insights &
//                 <span className="text-gold-accent dark:text-gold-glow block">Articles</span>
//               </h1>
//               <p className="text-xl text-platinum dark:text-soft-white/80 max-w-4xl mx-auto">
//                 Stay informed with the latest developments in audio technology, industry insights, 
//                 and expert guidance from our engineering team.
//               </p>
//             </motion.div>
            
//             <motion.div
//               variants={staggerContainer}
//               initial="initial"
//               animate="animate"
//               className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//             >
//               {articles.map((article) => (
//                 <motion.article
//                   key={article.id}
//                   variants={fadeInUp}
//                   className="bg-warm-gray dark:bg-deep-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
//                 >
//                   <div className="relative overflow-hidden">
//                     <img
//                       src={article.image}
//                       alt={article.title}
//                       className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
//                     />
//                     <div className="absolute top-4 left-4">
//                       <span className="bg-gold-accent dark:bg-gold-glow text-jet-black px-3 py-1 rounded-full text-xs font-semibold">
//                         {article.category}
//                       </span>
//                     </div>
//                   </div>
                  
//                   <div className="p-6">
//                     <h2 className="text-xl font-bold mb-3 text-jet-black dark:text-soft-white group-hover:text-gold-accent dark:group-hover:text-gold-glow transition-colors">
//                       {article.title}
//                     </h2>
                    
//                     <p className="text-platinum dark:text-soft-white/80 mb-4 text-sm leading-relaxed">
//                       {article.excerpt}
//                     </p>
                    
//                     <div className="flex items-center justify-between text-xs text-platinum dark:text-soft-white/60 mb-4">
//                       <div className="flex items-center space-x-2">
//                         <User className="w-3 h-3" />
//                         <span>{article.author}</span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <Calendar className="w-3 h-3" />
//                         <span>{new Date(article.date).toLocaleDateString()}</span>
//                       </div>
//                     </div>
                    
//                     <Link href={`/blog/${article.id}`}>
//                       <motion.button
//                         whileHover={{ x: 5 }}
//                         className="text-sm font-medium text-gold-accent dark:text-gold-glow hover:underline flex items-center gap-2"
//                       >
//                         Read More
//                         <ArrowRight className="w-4 h-4" />
//                       </motion.button>
//                     </Link>
//                   </div>
//                 </motion.article>
//               ))}
//             </motion.div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </>
//   )
// }
