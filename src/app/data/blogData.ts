export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string // Rich HTML/Markdown content
  date: string
  readTime: string
  category: 'Study Tips' | 'Language Guide' | 'Career Guide'
  image: string
  author?: {
    name: string
    role: string
    avatar: string
  }
  hideAuthor?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'see-mathematics-prep-tips',
    title: '5 Crucial Tips to Score an A+ in SEE Mathematics',
    excerpt: 'Mathematics can feel intimidating, but with the right blueprint and structural practice, scoring an A+ in SEE Math is fully achievable.',
    date: 'July 1, 2026',
    readTime: '4 min read',
    category: 'Study Tips',
    image: '/images/courses/coursesThree.svg',
    author: {
      name: 'Sudarsan Pd. Bhatt',
      role: 'Founder & Math Instructor',
      avatar: '/images/uploads/sudarsan-sit-e1668217849758-300x292.jpg'
    },
    content: `
      <p>Mathematics is often seen as one of the most challenging subjects in the Secondary Education Examination (SEE) board. However, scoring a perfect A+ is not about memorizing solutions; it is about pattern recognition, concept clarity, and strategic time management.</p>
      
      <h3>1. Mastery of the Specification Grid</h3>
      <p>Before jumping into solving problems, study the CDC curriculum specification grid. Understand exactly how many marks are allocated to Algebra, Geometry, Trigonometry, Statistics, and Arithmetic. Allocate your daily study sessions proportional to the marks weighting.</p>

      <h3>2. The Power of Concept Visuals</h3>
      <p>In Geometry and Trigonometry, never solve a question without sketching a neat, labeled diagram first. Drawing diagrams clears up 50% of the logical confusion on theorems, triangles, and coordinate grids.</p>

      <h3>3. Practice Past Papers with a Timer</h3>
      <p>Time management is where most students fall short. Set a timer for 3 hours and solve past years' board papers in exam conditions. Learn to identify and solve high-marks questions first to secure your pass and scoring thresholds early.</p>

      <h3>4. Don't Skip Formula Proofs</h3>
      <p>Knowing <i>why</i> a formula works is much better than simply memorizing it. When you understand the derivation of trigonometric identities or compound interest formulas, you can easily adapt if a question is presented with a twist.</p>

      <h3>5. Review Your Mistakes</h3>
      <p>Keep a separate "Mistake Notebook." Every time you get a calculation or proof step wrong during practice, write down the correction there. Review this notebook the morning before your exam to ensure you don't repeat silly errors.</p>
    `
  },
  {
    slug: 'why-language-classes-matter-after-school',
    title: 'Why Language and Fluency Classes are Crucial After School',
    excerpt: 'Transitioning from secondary school to college or careers requires advanced communication. Discover why IELTS and English language classes are key.',
    date: 'June 28, 2026',
    readTime: '5 min read',
    category: 'Language Guide',
    image: '/images/courses/coursesOne.svg',
    author: {
      name: 'Ram Kunwar',
      role: 'English Faculty Lead',
      avatar: '/images/mentor/boy2.svg'
    },
    hideAuthor: true,
    content: `
      <p>The gap between textbook English taught in schools and real-world conversational fluency is a major hurdle for many students. Whether you aspire to study abroad or join a premium local university, linguistic command is your passport to success.</p>

      <h3>Bridging the Conversation Gap</h3>
      <p>Traditional classrooms focus heavily on grammar rules and writing templates. While these are necessary, they do not build conversational confidence. Joining speaking-focused language groups trains you to think in English, eliminating translation lag in your mind.</p>

      <h3>The Gateway to Global Education: IELTS & PTE</h3>
      <p>If you plan to study in countries like Australia, Canada, or the UK, standardized language tests are mandatory. Preparation classes teach you specific test strategies, academic vocabulary, listening comprehension hacks, and fast-paced essay formatting that are not covered in standard school curricula.</p>

      <h3>Career Readiness</h3>
      <p>In today's globalized economy, employers look for candidates who can correspond clearly with international clients. Presentation skills, professional email writing, and telephone etiquette are practical assets that give language class graduates an immediate edge in job interviews.</p>
    `
  },
  {
    slug: 'tsc-exam-preparation-guide',
    title: 'Succeeding in TSC Exams: A Strategic Preparation Guide',
    excerpt: 'Earning a government teaching license requires navigating TSC papers. Here is the preparation layout to clear your license exams on the first attempt.',
    date: 'June 25, 2026',
    readTime: '6 min read',
    category: 'Career Guide',
    image: '/images/courses/coursesTwo.svg',
    author: {
      name: 'Dev Pant',
      role: 'Management & Govt Prep Lead',
      avatar: '/images/uploads/Dev-Pant.jpg'
    },
    content: `
      <p>Passing the Teacher Service Commission (TSC) examinations is the ultimate milestone for educators in Nepal aiming for secure government service. With low pass rates, success demands a structured, system-based approach.</p>

      <h3>1. Deep Integration of Pedagogical Theories</h3>
      <p>The first paper focuses heavily on educational philosophy, teaching methods, psychology, and learning theories. Do not just memorize names; understand how to apply Piaget’s stages or classroom management strategies in a real, diverse classroom setting.</p>

      <h3>2. Focus on Constitution and Education Acts</h3>
      <p>A significant portion of the syllabus is dedicated to the Constitution of Nepal, the Education Act (2028), and national education regulations. Make flashcards for specific amendment years, articles, and constitutional mandates to retain these facts easily.</p>

      <h3>3. Solve Subject-Specific Objective Questions Daily</h3>
      <p>Multiple-choice questions (MCQs) test precision. Dedicate at least 30 minutes daily to practice MCQs on computer basics, general knowledge, IQ tests, and regional geography. Scoring high here lifts your overall average drastically.</p>

      <h3>4. Master Written Answer Formats</h3>
      <p>For the subjective second paper, writing speed and structure are critical. Practice structuring your answers with clear headings, bullet points, diagrams, and direct references to government policies. A clean layout scores far higher than long, unstructured paragraphs.</p>
    `
  }
]
